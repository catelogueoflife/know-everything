const app = getApp();
var host = 'https://miniapp.quzhuanme.com'; //生产环境
// var host = 'http://192.168.8.196:8079'; //测试环境

/** * POST请求， * URL：接口 * postData：参数，json类型 * doSuccess：成功的回调函数 * doFail：失败的回调函数 */
function post(url, headers, postDatas, doSuccess, doFail) {
    wx.request({  //项目的真正接口，通过字符串拼接方式实现 
        url: host + url,
        header: headers,
        data: postDatas,
        method: 'POST',
        timeout: 3000,
        success: function (res) {  //参数值为res.data,直接将返回的数据传入 
            if (doSuccess) {
                doSuccess(res.data)
            }
        },
        fail: function () {
            if (doFail) {
                doFail()
            }
        },
    })
}

function uploadFile(url, filePath, formData, doSuccess, doFail) {
    wx.uploadFile({
        url: host + url,
        filePath: filePath,
        name: "file",
        formData: formData,
        success: function (res) {
            (200 === res.statusCode && doSuccess) ? doSuccess(res.data) : ""
        },
        fail: function (t) {
            doFail ? doFail(t) : ''
        }
    });
}

//GET请求，不需传参，直接URL调用，
function getData(url, headers, doSuccess, doFail) {
    wx.request({
        url: host + url,
        header: headers,
        method: 'GET',
        success: function (res) {
            if (doSuccess) {
                doSuccess(res.data)
            }
        },
        fail: function () {
            if (doFail) {
                doFail();
            }
        },
    })
}

function log(headers) {
    wx.request({
        url: host + '/qimai/log',
        header: headers,
        method: 'GET',
        success: function () {

        },
        fail: function () {
        },
    })
}

function promisify(api) {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, {success: resolve||'', fail: reject||''}), ...params);
        });
    }
}

//将方法暴露

module.exports = {
    host:host,
    promisify: promisify,
    get: getData,
    post: post,
    uploadFile: uploadFile,
    log: log
}
