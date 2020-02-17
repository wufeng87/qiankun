/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import style from './index.less';

import Routes from './src/routes';

export default function Framework(props) {
  const { content, loading } = props;

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  function setInterval() {
    window.setInterval(() => {
      console.log('master interval');
    }, 1000);
  }
  // 应付
  function toApp2() {
    var app2Url = "fssc/?v=8c92e8583b2811eab2ee6d37c62ee387/#/api?appId=f8db08300a6511eabde445bc1be40415&TOKEN=8c92e8583b2811eab2ee6d37c62ee387&lang=zh_CN&menuId=null"
    app2Url = app2Url.replace(/v=(.*?)\//g, `v=${localStorage.getItem('__fssc_v')}/`)
    app2Url = app2Url.replace(/TOKEN=(.*?)&/g, `TOKEN=${localStorage.getItem('__fssc_token')}&`)
    const title = '应付';
    window.history.pushState({}, title, app2Url);
  }
  // 应收
  function toApp1() {
    let app1Url = "/fssc/?v=26a8efae38d011eab2eefd8eb0445854/#/api?appId=2c4d63580c4411eaaa59a1f852d94f71&TOKEN=26a8efae38d011eab2eefd8eb0445854&lang=zh_CN&menuId=be35d753754611e8a06c7544b51821c7"
    app1Url = app1Url.replace(/v=(.*?)\//g, `v=${localStorage.getItem('__fssc_v')}/`)
    app1Url = app1Url.replace(/TOKEN=(.*?)&/g, `TOKEN=${localStorage.getItem('__fssc_token')}&`)
    const title = 'app1';
    window.history.pushState({}, title, app1Url);
  }

  return (
    <>
      <header className={style.header}>
        <nav>
          <ol>
            <li><a onClick={() => goto('home', '/')}>home</a></li>
            <li><a onClick={() => goto('react15 app', '/15react15')}>react15 + antd2</a></li>
            <li><a onClick={() => goto('vue app', '/vue')}>vue2 + element2</a></li>
            <li><a onClick={() => goto('react app', '/react')}>react16 + antd3</a></li>
            {/* <li><a onClick={() => goto('fssc', '/fssc')}>fssc</a></li> */}
            <li><a onClick={() => toApp1()}>fssc</a></li>
            {/* <li><a onClick={() => toApp2()}>应付</a></li> */}
            <li><a onClick={() => goto('p1', '/p1')}>p1_platform</a></li>
            <li><a onClick={() => goto('pro', '/pro')}>ant design pro</a></li>


          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      { content ?
        <div dangerouslySetInnerHTML={{ __html: content }} className={style.appContainer}/>
        : <div>
          content in main

          <Routes {...props}></Routes>
        </div>
      }
    </>

  );
}
