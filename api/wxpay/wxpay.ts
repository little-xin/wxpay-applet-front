import Request from '@/api/request'
var request = new Request().http

export interface OrderType {
	   total:number,
	   description:string,
	   // 微信用户唯一标识
	   openId:string
}
export interface ToPayData {
	timeStamp: string,
	nonceStr: string,
	wxPackage:string, 
	signType: string,
	paySign:string,
	outTradeNo:string
}
export function toCreateOrder(data:OrderType) {
    return request({
        url: "/order/createOrder",
        method: "Post",
		data
    })
}
export function toCloseOrder(outTradeNo:string) {
    return request({
        url: "/order/closeOrder",
        method: "Get",
		data:{
			outTradeNo
		}
    })
}