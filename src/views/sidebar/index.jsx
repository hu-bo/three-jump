import React from 'react';
import { 
  Link 
} from 'react-router-dom';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class Sidebar extends React.Component {
  state = {
    current: '1',
    openKeys: ['home'],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  // 当点击子菜单(SubMenu)时获取父级菜单的Key
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['data'],
    };
    return map[key] || [];
  }
  render() {
    return (
      <Menu
        mode="inline"
        defaultOpenKeys={['home']}
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="home" title={<span><i className="anticon icon-home" /><span>主页</span></span>}>
          <Menu.Item key="1">
            <Link to="/query/history-query">历史查询</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/query/new-query">新建查询</Link>
          </Menu.Item>
          <Menu.Item key="3">帮助信息</Menu.Item>
        </SubMenu>
        <SubMenu key="data" title={<span><i className="anticon icon-appstore" /><span>数据管理</span></span>}>
          <Menu.Item key="5">
            <Link to="/topics">数据源管理</Link>
          </Menu.Item>
          <Menu.Item key="6">表管理</Menu.Item>
          <Menu.Item key="7">公共模板管理</Menu.Item>
          <Menu.Item key="8">个人模板管理</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="9">Option 7</Menu.Item>
            <Menu.Item key="10">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><i className="anticon icon-setting" /><span>权限管理</span></span>}>
          <Menu.Item key="11">用户管理</Menu.Item>
          <Menu.Item key="12">组管理</Menu.Item>
          <Menu.Item key="13">审计日志</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidebar