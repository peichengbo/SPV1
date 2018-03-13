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
import HiggsPromise from '../utils/higgsPromise';

/* 
 * 获取检索类型列表
*/
export function getSerchType() {
    return HiggsPromise({
        url: '/contract/category',
        type: HttpMethod.GET,
        data: ''
    });
}

/* 
 * 获取合同展示列表数据
*/
export function getContractList(data) {
    return HiggsPromise({
        url: '/contract/view',
        type: HttpMethod.GET,
        data: data
    });
}

/* 
 * 根据检索类型进行筛选
*/
export function choseDetail(data) {
    return HiggsPromise({
        url: '/contract/detail',
        type: HttpMethod.GET,
        data: data
    });
}

/* 
 * 点击查看合同详情更新预览次数
*/
export function updateNum(id) {
    return HiggsPromise({
        url: '/contract/number',
        type: HttpMethod.GET,
        data: id
    });
}