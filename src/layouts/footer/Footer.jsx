import './footer.scss';
import React, { Component } from 'react';
// import ImgFotter from '../../images/loginfooter.png';

/**
 * @desc 页面底部组件
 */
export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
            	<span className="leftText">版权所有：成都数联惠法科技有限公司</span>技术支持: 成都数联惠法科技有限公司
            </div>
        );
    }
}


