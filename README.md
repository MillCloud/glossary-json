# glossary-json

词汇表 JSON 数据。

- 使用 Github Workflow 排序、格式化、同步到 Gitee。
- 每次添加数据请只操作 `.json` 文件。
- 每次添加数据前请先 `git pull --rebase`。
- 如果你了解 JavaScript 生态，建议你使用 Node.js 16，全局安装 prettier `npm i -g --legacy-peer-deps prettier`，并在编辑完成后使用以下命令格式化。

```sh
node ./sort.js && prettier ./*.json -w --loglevel=warn && echo "Prettify succeeded."
```

数据来源：

- [ ] [现代 JavaScript 教程](https://zh.javascript.info/)
- [x] [vue-next](https://v3.cn.vuejs.org/)
- [x] [vuex-next](https://next.vuex.vuejs.org/zh/)
- [x] [vue-router-next](https://next.router.vuejs.org/zh/)
- [x] [vue-cli-next](https://next.cli.vuejs.org/zh)
- [ ] [element-plus](https://element-plus.gitee.io/zh-CN/)
- [x] [react](https://zh-hans.reactjs.org/)
- [ ] [react-native](https://reactnative.cn/)
- [ ] [redux](https://cn.redux.js.org/)
- [ ] [recoil](https://recoiljs.org/zh-hans/)
- [ ] [react-router](https://react-router.docschina.org/)
- [ ] [ant-design](https://ant.design/)
- [ ] [webpack](https://webpack.docschina.org/)
- [ ] [rollup](https://rollup.docschina.org/guide/zh/)
- [ ] [vite](https://cn.vitejs.dev/)
- [ ] [AWS](https://aws.amazon.com/)
- [ ] [阿里云](https://cn.aliyun.com/)
- [ ] [术语](https://www.termonline.cn/index)
