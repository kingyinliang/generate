const path = require('path');
const fs = require('fs');
const Router = require('koa-router');

const load = async (dir, cb) =>{
    const url = path.resolve(__dirname, dir);

    fs.readdir(url, function(err,files){
        if(err){
            console.warn(err)
        }else{
            files.forEach((filename) => {
                let fileDir = path.join(dir, filename);
                fs.stat(fileDir,(error,stats) => {
                    if(error){
                        console.warn('获取文件stats失败');
                    }else{
                        const isDir = stats.isDirectory();
                        if(isDir){
                            load(fileDir, cb);
                        }
                        if (path.extname(filename) === '.js') {
                            filename = filename.replace('.js', '');
                            fileDir = fileDir.replace('routes', '');
                            fileDir = fileDir.replace('.js', '');
                            const routes= require(`${url}/${filename}`);
                            cb(fileDir, routes);
                        }
                    }
                })
            })
        }
    })
}

const initRouter = (app) => {
    const router = new Router();
    load('routes', (filename, routes) => {
        routes = typeof routes === 'function' ? routes(app) : routes;
        const prefix = /index/g.test(filename) ? filename.replace('/index', '') : `${filename}`;
        Object.keys(routes).forEach(key =>{
            const [method, path] = key.split(' ');
            console.log(`正在映射地址: ${method.toLocaleUpperCase()}  ${prefix}${path}`);
            router[method](prefix + path, routes[key]);
        })
    })
    return router;
}

const initController = (app) =>{
    load('controllers', (filename, controller) =>{
        filename = filename.replace(/\//g, '.')
        app = getName(filename.split('.'), app, controller)
    })
}

const getName = (arr, app, controller) => {
    let obj = app
    arr.forEach((item, index) =>{
        if(index === arr.length-1){
            obj[item] = controller
        } else if (obj[item]) {
            obj = obj[item]
        } else {
            obj[item] = {}
            obj = obj[item]
        }
    })
    return app
}

const readFile = (dir, cb, endCb) => {
    const url = path.resolve(__dirname, dir);
    fs.readdir(url, function(err,files){
        let count = 0
        let checkEnd = function() {
            ++count === files.length && endCb()
        }

        files.forEach(function(filename) {
            let fileDir = path.join(dir, filename);
            fs.stat(fileDir, function(err, stats) {
                if(stats.isDirectory()){
                    readFile(fileDir, cb, checkEnd);
                } else if (path.extname(filename) === '.js') {
                    filename = filename.replace('.js', '');
                    fileDir = fileDir.replace('routes', '');
                    fileDir = fileDir.replace('.js', '');
                    const routes= require(`${url}/${filename}`);
                    cb(fileDir, routes);
                    checkEnd()
                }
            })
        })
    })
}

const initRouterControllers = (app) => {
    let controllers = {}
    const router = new Router();
    readFile('controllers', (filename, controller) =>{
        filename = filename.replace(/\//g, '.')
        controllers[filename] = controller
    }, ()=>{
        // initRouter(controllers)
        readFile('routes', (filename, routes) => {
            routes = typeof routes === 'function' ? routes(controllers) : routes;
            const prefix = /index/g.test(filename) ? filename.replace('/index', '') : `${filename}`;
            Object.keys(routes).forEach(key =>{
                const [method, path] = key.split(' ');
                console.log(`正在映射地址: ${method.toLocaleUpperCase()}  ${prefix}${path}`);
                router[method](prefix + path, routes[key]);
            })
        }, () => {})
    })
    return router;
}

const routerResponse = (option={}) => {
    return async function(ctx,next){
        ctx.success = function (data) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : option.successCode || 200,
                msg : option.successMsg || 'success',
                data : data
            }
        }
        ctx.fail = function (msg,code) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : code || option.failCode || 99,
                msg : msg || option.successMsg || 'fail',
            }
        }
        await next()
    }
}


module.exports = { routerResponse, initRouter, initController }
