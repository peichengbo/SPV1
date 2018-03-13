/**
 * 向session中写入值
 * @param name
 * @param value
 */
export function saveSession(name, value) {
    if(((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))) {
        document.cookie = name + '=' + value;
    }else {
        sessionStorage.setItem(name, value);
    }
}

/**
 * 读取session的值
 * @param name
 * @returns {*}
 */
export function getSession(name) {
    let returnValue = '';
    if(((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))) {
        let cName = name + '=';
        let cookieArr = document.cookie.split(';');
        for(let i = 0; i < cookieArr.length; i++)
        {
            let itemInfo = cookieArr[i].trim();
            if (itemInfo.indexOf(cName) === 0) {
                returnValue = itemInfo.substring(cName.length, itemInfo.length);
            }
        }
    } else {
        returnValue = sessionStorage.getItem(name);
    }
    return returnValue;
}

/**
 * 移除session中的值
 * @param name
 */
export function removeSession(name) {
    if(((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }else {
        sessionStorage.removeItem(name);
    }
}