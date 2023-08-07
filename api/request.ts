//后台请求根路径

import loadingStore from "../store/loading";


var baseURL="https://服务器域名/wxPay"


export default class Request {
    http(param:any) {
        // 请求参数
        var url = param.url,
            method = param.method,
            header = {
				'content-type': "application/json",
			},
            data = param.data || {},
            hideLoading = param.hideLoading || false;

        //拼接完整请求地址
        var requestUrl = baseURL + url;
		//请求方法
        if (method) {
            method = method.toUpperCase(); //小写改为大写
        }
        //加载圈
        if (!hideLoading) {
            // uni.showLoading({
            //     title: '加载中...'
            // });
			loadingStore.state.LoadingModel = true
        }

        // 返回promise
        return new Promise((resolve) => {
            // 请求
            uni.request({
                url: requestUrl,
                data: data,
                method: method,
                header: header,
                success: (res :any) => {
					console.log(res);
                    // 判断 请求api 格式是否正确
                    if (res.statusCode && res.statusCode != 200) {
                        uni.showToast({
							//后台把错误请求信息放在msg中 
                            title: '系统错误 可反馈 感谢(￣▽￣)',
                            icon: "error"
                        });
						// 将结果抛出
						resolve(res.data.data)
                        return;
                    }
					if (res.data.code && res.data.code != 200){
						console.log('后端自定义错误=====')
						uni.showToast({
							//后台把错误请求信息放在msg中 
							title: res.data.message,
							icon: "none"
						});
						// 将结果抛出
						resolve(res.data.data)
						return
					}
					if(res.data.data==null){
						// 将结果抛出
						resolve(res.data.data)
						return
					}
                    // 将结果抛出
                    resolve(res.data.data)
                },
                //请求失败
                fail: (e :any) => {
					console.log(e);
                    uni.showToast({
                        title: "请求失败" + e.errMsg,
                        icon: 'none'
                    });
                    resolve(e.data);
                },
                //请求完成
                complete() {
                    //隐藏加载
                    // if (!hideLoading) {
                    //     uni.hideLoading();
                    // }
					loadingStore.state.LoadingModel = false
                    return;
                }
            })
        })
    }
}