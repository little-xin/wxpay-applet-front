<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<button type="primary" @click="payOrder(10)">微信支付</button>
		</view>
	</view>
	<!-- 接口请求加载动画 -->
	<loading></loading>
</template>

<script setup lang="ts">
	import { OrderType, toCloseOrder, toCreateOrder, ToPayData } from "../../api/wxpay/wxpay";
 //支付
 const payOrder = (cost : number) => {
 	var payData : OrderType = {
 		total: cost,
 		description: "熊币充值",
		openId:"用户openId"
 	};
 	wxpay(payData);
 }
const wxpay = (data : OrderType) => {
		toCreateOrder(data).then((res : ToPayData) => {
			//订单对象，从服务器获取 测试支付
			var orderInfoData = {
				timeStamp: res.timeStamp,  // 时间戳
				nonceStr: res.nonceStr,      // 随机字符串
				wxPackage: res.wxPackage, // 统一下单接口返回的 prepay_id 参数值
				signType: res.signType,        // 签名方式
				paySign: res.paySign, // 签名
				outTradeNo: res.outTradeNo
			};
			console.log(orderInfoData);
			uni.getProvider({
				service: 'payment',
				success: function (res) {
					console.log(res.provider)
					if (~res.provider.indexOf('wxpay')) {
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: "",
							timeStamp: orderInfoData.timeStamp,
							nonceStr: orderInfoData.nonceStr,
							package: orderInfoData.wxPackage,
							paySign: orderInfoData.paySign,
							signType: orderInfoData.signType,
							success: function (res) {
								console.log(res);
								uni.showToast({
									//后台把错误请求信息放在msg中 
									title: "(●'◡'●) 充值成功",
									icon: "none"
								});
							},
							fail: function (err) {
								//关单
								console.log(err);
								console.log("微信开始关单啦");
								toCloseOrder(orderInfoData.outTradeNo);
							}
						});
					}
				}
			});
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
