# generate
back-end koa2+mysql front-end vue 推广页生成 组件拖拽合成页面 主要通过vuex存储work page elements

## 启动
```$xslt
cd front-end && yarn && yarn run build:engine && yarn run dev
```
```$xslt
cd generate-back-end && yarn && yarn run dev
```
## mysql
`generate-back-end/db/init.sql`初始化数据库
## core
核心在`front-end/src/core`下面，分为编辑器和引擎
`front-end/src/core/plugins`为拖拽插件



