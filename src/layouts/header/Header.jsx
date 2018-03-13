/*
* @desc 头部
* @author lijing
*/
import './header.scss';
import React, { Component } from 'react';
/**
 * @desc 页面顶部组件
 */
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }

    /**
     * @desc 第一次渲染之后调用
     */
    componentDidMount(){
      //
    }

    render() {
        return (
            <div className="header_root">
                头部
            </div>
        );
    }
}