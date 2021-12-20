const Mysql = require('mysql');
const dbConfig = require('../config/db');

// 创建数据库连接
const pool = Mysql.createPool(dbConfig);

exports.query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, val, (err, fields) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(fields)
                    }
                    connection.release()
                })
            }
        })
    })
}
