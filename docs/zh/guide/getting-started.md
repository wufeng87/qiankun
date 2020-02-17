# 快速上手

## 安装 qiankun

```bash
$ yarn add qiankun # 或者 npm i qiankun -S
```

## 在主应用中注册子应用

```ts
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
    activeRule: location => yourActiveRule(location),
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
    activeRule: location => yourActiveRule(location),
  },
]);

start();
```

当子应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 方法返回 `true` 的子应用对应的 render 方法就会被调用，同时依次调用子应用暴露出的生命周期钩子。

通常我们子应用的 render 跟 activeRule 配置可以抽取成公共方法，以 react 为例：

```ts
import { registerMicroApps, start } from 'qiankun';

function render({ appContent, loading }) {
  const container = document.getElementById('container');
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  { name: 'react app', entry: '//localhost:7100', render, activeRule: genActiveRule('/react') },
  { name: 'vue app', entry: { scripts: ['//localhost:7100/main.js'] }, render, activeRule: genActiveRule('/vue') },
]);

start();
```

## 子应用导出相应的生命周期钩子

子应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 `bootstrap`、`mount`、`unmount` 三个生命周期钩子，以供主应用在适当的时机调用。

```ts
/**
 * bootstrap 只会在子应用初始化的时候调用一次，下次子应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props);
  ReactDOM.render(<App />, document.getElementById('react15Root'));
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
}
```

qiankun 基于 single-spa，所以你可以在[这里](https://single-spa.js.org/docs/building-applications.html#registered-application-lifecycle)找到更多关于子应用生命周期相关的文档说明。

## 配置子应用的打包工具

除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别子应用暴露出来的一些信息，子应用的打包工具需要增加如下配置：

#### webpack:

```js
const packageName = require('./package.json').name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

相关配置介绍可以查看 [webpack 相关文档](https://webpack.js.org/configuration/output/#outputlibrary)。
