import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Layout, Icon } from 'antd';
import './index.css';
import logo from '@/static/images/iq_logo_sm.png';
import Sidebar from '@/views/sidebar/';
import {
  QueryList,
  QueryDetails
} from '@/views/query/history-query/';
import NewQuery from '@/views/query/new-query/';

console.log(QueryDetails)
const { Header, Sider, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false, //缩进菜单
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        
        {/*左边的菜单*/}
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <img src={logo} alt=""/>
          </div>            
          <Sidebar/>
        </Sider>
        {/*左边的菜单-end*/}

         {/*右边的内容*/}
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
         
          <Content>
            {/*默认显示query QueryList*/}
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <Route exact path='/' component={QueryList}/>
              <Route path='/query/history-query' component={QueryList}/>
              <Route path='/query/new-query' component={NewQuery}/>
            </ReactCSSTransitionGroup>
          </Content>
        </Layout>
        {/*右边的内容*/}
      </Layout>
    );
  }
}

export default Home