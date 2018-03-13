import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Frame from '../layouts/frame/Frame';
import NotFound from '../components/common/error/notFound/NotFound';
import SystemError from '../components/common/error/systemError/SystemError';
// 登陆
import Login from '../components/login/Login';
import Index from '../components/index/Index';
export default class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Frame}>
                    {/* 添加onEnter={checkLogin}属性, 可进行登录校验 */}
                    <IndexRoute component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/index" component={Index}/>
                    <Route path="*" component={NotFound}/>
                    <Route path="/systemError" component={SystemError}/>
                </Route>  
            </Router>
        );
    }
}

