import { Button, Modal, version as antdVersion, Input } from 'antd';
import 'antd/dist/antd.min.css';
import React, { lazy, Suspense, useState, version } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

const User = lazy(() => import('./User'));

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <div className="App">
        <header className="App-header">
          <div style={{ color: 'green' }}>Hello React</div>
          <Button onClick={() => setVisible(true)}>open antd modal</Button>
          <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
            Hello React {version} and antd {antdVersion}
          </Modal>
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/users" component={User} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

function Home(props) {
  const [inputVal, setInputVal] = useState(
    'fssc/?v=d9a46eca367f11ea84a565f01832b78f/#/api?appId=e3d5e4747ff911e88b19918a2af23deb&appIdList=[]&TOKEN=d9a46eca367f11ea84a565f01832b78f&lang=zh_CN&menuId=56d9f001a5bf11e8a1a137fcf2a512d3&extramenu=%5B%7B%22icon%22%3A%22user-manage%22%2C%22title%22%3A%22%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_userMng%22%2C%22name%22%3A%22userMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35b042754611e8a06c33d913e43302%22%7D%2C%7B%22icon%22%3A%22console-groupmanage%22%2C%22title%22%3A%22%E7%BE%A4%E7%BB%84%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_groupMng%22%2C%22name%22%3A%22groupMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%222ae7147cd77611e89f696d3c211874d5%22%7D%2C%7B%22icon%22%3A%22user-roles%22%2C%22title%22%3A%22%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_roleMng%22%2C%22name%22%3A%22roleMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35d753754611e8a06c7544b51821c7%22%7D%5D',
  );
  function onChange(val) {
    setInputVal(val.target.value);
  }
  function go() {
    window.history.pushState({}, 'fssc', `/${inputVal}`);
    // window.history.pushState({}, 'vue', '/vue');

    // props.history.push(`/${inputVal}`);
  }
  return (
    <div>
      <h2>Home</h2>
      <Input onChange={onChange} value={inputVal}></Input>
      <Button onClick={go}>go</Button>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
