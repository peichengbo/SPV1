/**
 * @desc 所有后台数据请求都应封装在/services目录中, 目录结构和方法名称应和RAP文档层层对应. 
 * 如RAP文档(http://apidocs.bbdservice.net/workspace/myWorkspace.do?projectId=9#408): 
 *   用户中心
 *      |-联系人
 *          |-增加联系人
 *          |-删除联系人
 *          |-编辑联系人
 *          |-获取联系人
 * 对应/src/services中目录结构为:
 *   /userCenter/                       // 目录
 *      |-contact.js                    // 文件
 *          |>function addContact       // 方法
 *          |>function deleteContact    // 方法
 *          |>function updateContact    // 方法
 *          |>function contactList      // 方法
 */

import { HttpMethod } from '../constants/common';
import HiggsPromise, {higgsUrl} from '../utils/higgsPromise';

/* 
 * 模拟数据请求，判断token是否有效，是否需要跳转登录界面
*/
export function handleGetToken() {
    return HiggsPromise({
        url: '/index',
        type: HttpMethod.GET,
        data: ''
    });
}