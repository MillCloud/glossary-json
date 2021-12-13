# glossary-json

[Github Pages](https://millcloud.github.io/glossary/) | [Gitee Pages](https://millcloud.gitee.io/glossary/) | [Github Pages Repo](https://github.com/MillCloud/glossary) | [Gitee Pages Repo](https://gitee.com/MillCloud/glossary) | [Github Data Repo](https://github.com/MillCloud/glossary-json) | [Gitee Data Repo](https://gitee.com/MillCloud/glossary-json)

词汇表 JSON 数据。

- 使用 Github Workflow 排序、格式化、同步到 Gitee。
- 每次添加数据请只操作 `.json` 文件。
- 每次添加数据前请先 `git pull --rebase`。
- 如果你了解 JavaScript 生态，建议你使用 Node.js 16，全局安装 prettier `npm i -g --legacy-peer-deps prettier`，并在编辑完成后使用以下命令格式化。

```sh
node ./format.js && prettier ./*.json -w --loglevel=warn && echo "Prettify succeeded."
```

数据来源：

- [ ] [MDN](https://developer.mozilla.org/)
- [ ] [现代 JavaScript 教程](https://zh.javascript.info/)
- [x] [vue-next](https://v3.cn.vuejs.org/)
- [x] [vuex-next](https://next.vuex.vuejs.org/zh/)
- [x] [vue-cli-next](https://next.cli.vuejs.org/zh)
- [x] [element-plus](https://element-plus.gitee.io/zh-CN/)
- [x] [react](https://zh-hans.reactjs.org/)
- [x] [redux](https://cn.redux.js.org/)
- [x] [recoil](https://recoiljs.org/zh-hans/)
- [x] [ant-design](https://ant.design/)
- [x] [webpack](https://webpack.docschina.org/)
- [x] [vite](https://cn.vitejs.dev/)
- [x] [express](https://expressjs.com/zh-cn/)
- [x] [koa](https://koa.bootcss.com/)
- [x] [nest](https://docs.nestjs.cn/)
- [x] [serverless glossary](https://serverlessfirst.com/serverless-glossary/)
- [ ] [术语](https://www.termonline.cn/index)
