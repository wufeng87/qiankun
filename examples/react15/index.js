/**
 * @author Kuitos
 * @since 2019-05-16
 */
import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  ReactDOM.render(<App />, document.getElementById('react15Root'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
