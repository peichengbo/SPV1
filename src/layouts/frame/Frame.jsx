import 'mtui/style.css';
import './frame.scss';
import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

/**
 * @desc 页面整体框架组件
 */
export default class Frame extends Component {

    constructor () {
        super();
    }

    render() {
        const routerPath = this.props.location.pathname;
        return (
            <div className="frame">
                <div>
                    <div className="wrapper">
                        <div className="container clearfix">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

