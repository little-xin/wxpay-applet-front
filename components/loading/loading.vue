<template>
	<view class="light-loading" v-if="loadingStore.state.LoadingModel">
		<view class="box" style="">
			<view class="h2">Loading</view>
			<view class="span"></view>
			<view class="span"></view>
			<view class="span"></view>
			<view class="span"></view>
			<view class="span"></view>
			<view class="span"></view>
		</view>
	</view>
</template>

<script setup>
import loadingStore from '../../store/loading';
</script>

<style lang="scss">
	.h2{ margin:0; padding:0 ; }
	
	@-webkit-keyframes loading {
	0% {
	opacity:0
	}
	to {
		opacity: 1
	}
	}
	@keyframes loading {
	0% {
	opacity:0
	}
	to {
		opacity: 1
	}
	}
	.dark-loading {
		background: #222
	}
	.light-loading {
		/* background: #fff; */
		background: rgb(255,255,255,0.1);
	}
	.dark-loading, .light-loading {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 20
	}
	.dark-loading .box .h2, .light-loading .box .h2 {
		color: #777;
		margin: 0;
		font-size: 24upx;
		text-transform: uppercase;
		letter-spacing: 1upx;
		text-align: center
	}
	.dark-loading .box .span, .light-loading .box .span {
		display: inline-block;
		vertical-align: middle;
		width: 18upx;
		height: 18upx;
		margin: 5upx;
		background: #fbd434;
		border-radius:50%;
		-webkit-animation: loading 1s infinite alternate;
		animation: loading 1s infinite alternate;
		
	}
	.dark-loading .box .span:nth-of-type(2), .light-loading .box .span:nth-of-type(2) {
		background: #E97040;
		-webkit-animation-delay: .2s;
		animation-delay: .2s
	}
	.dark-loading .box .span:nth-of-type(3), .light-loading .box .span:nth-of-type(3) {
		background: #F3993A;
		-webkit-animation-delay: .4s;
		animation-delay: .4s
	}
	.dark-loading .box .span:nth-of-type(4), .light-loading .box .span:nth-of-type(4) {
		background: #E9BB41;
		-webkit-animation-delay: .6s;
		animation-delay: .6s
	}
	.dark-loading .box .span:nth-of-type(5), .light-loading .box .span:nth-of-type(5) {
		background: #E5A848;
		-webkit-animation-delay: .8s;
		animation-delay: .8s
	}
	.dark-loading .box .span:nth-of-type(6), .light-loading .box .span:nth-of-type(6) {
		background: #F4CF39;
		-webkit-animation-delay: 1s;
		animation-delay: 1s
	}
	.dark-loading .box .span:nth-of-type(7), .light-loading .box .span:nth-of-type(7) {
		background: #40a070;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s
	}
</style>