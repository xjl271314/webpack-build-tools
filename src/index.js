/**
 * 将参数中的null undefined转化为空
 * @param {String} el 
 */
export function transferDefectParams(el) {
    return ['null', 'undefined'].includes(el) ? '' : el
}

/**
 * 正则表示法
 * 思路:通过正则表达式获取url上的参数 然后通过数组reduce追加到对象中
 * 
 * @param {string} url 需要获取的url地址默认为当前地址
 */
export default function getUrlParameters(url = window.location.href) {
    /**
     * match返回字符串中匹配结果的数组,匹配不到返回null
     * [^?=&]+ 匹配除了?=&之外的字符 仅匹配一次
     * Array.reduce(callBack(prev,cur,index,array), initialValue)
     * Array.slice(start,[end]) 返回start-end的元素
     */
    const params = url.match(/([^?=&]+)=([^&]*)/g)
    if (params) {
        return params.reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = transferDefectParams(v.slice(v.indexOf('=') + 1)), a), {})
    }
    return {}
}