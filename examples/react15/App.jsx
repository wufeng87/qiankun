/**
 * @author Kuitos
 * @since 2019-05-16
 */

import { Button, Modal, version as antdVersion } from 'antd';
import React, { version } from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    };

    this.setVisible = visible => this.setState({ visible });
    this.openFssc = this.openFssc.bind(this);
    this.openFssc2 = this.openFssc2.bind(this);
  }
  openFssc() {
    const inputVal = `fssc/?v=329e40c84be411eabad7f9cf45c94f70/#/api?TOKEN=329e40c84be411eabad7f9cf45c94f70&appId=e3d5e4747ff911e88b19918a2af23deb&appIdList=[]&TOKEN=329e40c84be411eabad7f9cf45c94f70&lang=zh_CN&menuId=56d9f001a5bf11e8a1a137fcf2a512d3&extramenu=%5B%7B%22icon%22%3A%22user-manage%22%2C%22title%22%3A%22%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_userMng%22%2C%22name%22%3A%22userMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35b042754611e8a06c33d913e43302%22%7D%2C%7B%22icon%22%3A%22console-groupmanage%22%2C%22title%22%3A%22%E7%BE%A4%E7%BB%84%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_groupMng%22%2C%22name%22%3A%22groupMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%222ae7147cd77611e89f696d3c211874d5%22%7D%2C%7B%22icon%22%3A%22user-roles%22%2C%22title%22%3A%22%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_roleMng%22%2C%22name%22%3A%22roleMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35d753754611e8a06c7544b51821c7%22%7D%5D`
    window.history.pushState({}, 'fssc', `/${inputVal}`);
  }
  // 
  openFssc2() {
    const inputVal = `fssc/?v=e2357b524c0311eabad7a1f7fa287a9a/#/api?TOKEN=e2357b524c0311eabad7a1f7fa287a9a&appId=e3d5e4747ff911e88b19918a2af23deb&appIdList=[]&TOKEN=e2357b524c0311eabad7a1f7fa287a9a&lang=zh_CN&menuId=56d9f001a5bf11e8a1a137fcf2a512d3&extramenu=%5B%7B%22icon%22%3A%22user-manage%22%2C%22title%22%3A%22%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_userMng%22%2C%22name%22%3A%22userMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35b042754611e8a06c33d913e43302%22%7D%2C%7B%22icon%22%3A%22console-groupmanage%22%2C%22title%22%3A%22%E7%BE%A4%E7%BB%84%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_groupMng%22%2C%22name%22%3A%22groupMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%222ae7147cd77611e89f696d3c211874d5%22%7D%2C%7B%22icon%22%3A%22user-roles%22%2C%22title%22%3A%22%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%22%2C%22uri%22%3A%22http%3A%2F%2F192.168.2.172%3A8080%2Fecs-console%2Findex.html%3Fv%3D1578985201526%23%2FoutLink_roleMng%22%2C%22name%22%3A%22roleMng%22%2C%22crossDomain%22%3Atrue%2C%22children%22%3A%5B%5D%2C%22menuId%22%3A%22be35d753754611e8a06c7544b51821c7%22%7D%5D`
    window.history.pushState({}, 'fssc', `/${inputVal}`);
  }
  render() {

    const { visible } = this.state;

    return (
      <div>
        <div style={{ color: 'green' }}>Hello React15</div>
        <Button onClick={this.openFssc}>fssc1</Button>
        <Button onClick={this.openFssc2}>fssc2</Button>
        <Button onClick={() => this.setVisible(true)}>open antd modal</Button>
        <Modal visible={visible} onCancel={() => this.setVisible(false)} onOk={() => this.setVisible(false)}>
          Hello React {version} and antd {antdVersion}
        </Modal>
      </div>
    );
  }
}
