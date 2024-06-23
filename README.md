这是一个基于[Plasmo扩展](https://docs.plasmo.com/)的项目，我们使用`plasmo init`命令来初始化它。启动步骤如下：

### 开始使用

首先运行开发服务器：

```bash
pnpm dev
# 或者
npm run dev
```

然后在浏览器中打开相应的开发版本。比如，如果你为Chrome浏览器和manifest v3开发，就用`build/chrome-mv3-dev`。

你可以直接编辑`popup.tsx`来修改弹出窗口。每次改动后，它会自动刷新。想添加选项页，就在项目根目录下添加一个`options.tsx`文件，里面包含一个默认导出的React组件。添加内容页也类似，创建一个`content.ts`文件，导入所需的模块并进行一些逻辑处理，然后在浏览器中刷新扩展。

更多指导请参考[我们的文档](https://docs.plasmo.com/)

### 构建生产版本

运行以下命令：

```bash
pnpm build
# 或者
npm run build
```

这将为你生成生产环境的扩展包，准备打包并发布到应用商店。

### 发布到商店

最简单的部署方式是使用内置的[bpp](https://bpp.browser.market) GitHub操作。但在使用这个操作前，请确保先构建并上传扩展到商店，设置基础凭证。然后，只需按照[这些步骤](https://docs.plasmo.com/framework/workflows/submit)操作，你的自动化提交流程就启动了！

就这样，祝你项目顺利！