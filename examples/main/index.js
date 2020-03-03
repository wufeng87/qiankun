/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from '../../es';
import Framework from './Framework';
// import Framework from './Framework.vue';
// import "import-map-overrides"
// let app = null;
import "core-js/stable";

function render({ appContent, loading }) {
  /*
  examples for vue
   */
  // if (!app) {
  //   app = new Vue({
  //     el: '#container',
  //     data() {
  //       return {
  //         content: appContent,
  //         loading,
  //       };
  //     },
  //     render(h) {
  //       return h(Framework, {
  //         props: {
  //           content: this.content,
  //           loading: this.loading,
  //         },
  //       });
  //     },
  //   });
  // } else {
  //   app.content = appContent;
  //   app.loading = loading;
  // }

  const container = document.getElementById('container');
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();

function startApp() {
  registerMicroApps(
    [
      { name: 'react16-main', entry: '//localhost:7100', render, activeRule: genActiveRule('/react') },
      { name: 'react15-main', entry: '//localhost:7102', render, activeRule: genActiveRule('/15react15') },
      { name: 'vue app', entry: '//localhost:7101', render, activeRule: genActiveRule('/vue') },
      { name: 'fssc-index', entry: '//localhost:8099', render, activeRule: genActiveRule('/fssc') },
      // { name: 'fssc-index2', entry: '//localhost:8099', render, activeRule: genActiveRule('/fssc1') },
    ],
    {
      beforeLoad: [
        app => {
          console.log('before load', app);
        },
      ],
      beforeMount: [
        app => {
          console.log('before mount', app);
        },
      ],
      afterUnmount: [
        app => {
          console.log('after unload', app);
        },
      ],
    },
  );

  setDefaultMountApp('/15react15');
  // setDefaultMountApp('/fssc');
  runAfterFirstMounted(() => console.info('first app mounted'));

  start({
    prefetch: true,
    prefetch: false,
    jsSandbox: false,  // 测试ie 禁用沙箱
    prefetch:false,
  });
}

// 模拟个异步获取路由
// setTimeout(() => {
startApp();
// }, 1000);
