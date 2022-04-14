<template>
	<view class="main" ref="mainBox" id="mainBox" :style="'display:' + styleDisplay ">
		<view class="titleBox">
			<view class="firstTitle">星课堂</view>
			<view class="secondTitle">/让星星学会表达/</view>
		</view>
		<view class="loginAndRegister">
			<navigator class="loginNav" url="../login/login" hover-class="navigator-hover">
				<button class="btn loginBtn" type="default" >登录</button>
			</navigator>
			
			<button class="btn registerBtn" plain type="default">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				styleDisplay:'none'
			}
		},
		methods: {
			
		},
		mounted() {
			this.$nextTick(function() {
				this.styleDisplay = 'block'
			})
		},
	}
</script>

<style scoped>
@keyframes titleMove{
	0% {
		top:80vh;
	}
	100% {
		top:38vh;
	}
}
@keyframes opacity{
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
.main {
	/* 加载背景图 */
	background-image: url("https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/gif/启动背景.gif");
	width: 100vw;
	height: 100vh;
	/* 背景图垂直、水平均居中 */
	background-position: center center;
	/* 背景图不平铺 */
	background-repeat: no-repeat;
	/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
	background-attachment: fixed;
	/* 让背景图基于容器大小伸缩 */
	background-size: cover;
	position: relative;
}
.titleBox {
	width: 70vw;
	height: 160rpx;
	position: absolute;
	animation: titleMove 1.5s;
	animation-fill-mode: forwards;
	animation-timing-function: linear;
	animation-delay:1.5s; 
	left: 50%;
	top:80vh;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.firstTitle {
	color: white;
	font-size: 40rpx;
	font-weight: bolder;
	letter-spacing:10rpx;
}
.secondTitle {
	color: white;
	font-size: 26rpx;
	letter-spacing:10rpx;
}
.loginAndRegister {
	opacity: 0;
	width: 65vw;
	height: 200rpx;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	animation: opacity 1.5s;
	animation-fill-mode: forwards;
	animation-timing-function: linear;
	animation-delay:1.5s; 
}
.loginNav {
	width: 100%;
	height: 40px;
}
.btn {
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-radius: 20px;
	letter-spacing:10rpx;
}
.loginBtn {
	background-color: #96d1f8!important;
	color: white!important;
}
.registerBtn {
	color: white!important;
	border-color: white!important;
}
</style>
