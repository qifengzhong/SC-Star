<template>
	<view class="main" :style="'display:' + styleDisplay ">
		<view class="innerMain">
			<navigator class="backToStart" url="../start/start">
				<view class="closeIcon">×</view>
			</navigator>
			<view class="title">账号密码登录</view>
			<view class="inputBox">
				<input type="text" value="" placeholder="请输入手机号码" />
				<input type="text" class="bottomInput" value="" placeholder="请输入您的密码" />
			</view>
			<navigator class="turnToIndex" url="../index/index" open-type="switchTab">
				<button class="loginBtn">登录</button>
			</navigator>
			<view class="footer">
				<view class="footerTitle">其他登录方式</view>
				<view class="iconBox">
					<image @click="login('微信')" class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/微信.svg" mode=""></image>
					<image @click="login('QQ')" class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/QQ.svg" mode=""></image>
					<image @click="login('微博')" class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/微博.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	
	export default {
		data() {
			return {
				styleDisplay:'none'
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.styleDisplay = 'block'
			})
		},
		methods: {
			...mapMutations(['StoreLogin']),
			login(provider) {
				
				if(provider === '微信') {
					uni.getUserProfile({
							desc: '登录',
							success: (info) => {
								console.log(info)
								this.StoreLogin(info.userInfo)
					            //这里取到的是用户的信息，自己安排自己的业务
								uni.showLoading({
									title: '登录中'
								});
								uni.login({
									provider: 'weixin',
									success: (res) => {
										console.log(res)
					                    //这里获取的是用户的code，用来换取 openid、unionid、session_key 等信息，再将信息丢给后台自己的登录业务就行了						
										uni.hideLoading();
										
										uni.switchTab({
											url: '/pages/index/index'
										});
									}
								})
							},
							fail: (err) => {
								console.log(err);
							}
						})
				}
			}
		}
	}
</script>

<style scoped>
.main {
	/* 加载背景图 */
	background-image: url("https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/账号页背景.svg");
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
}
.innerMain {
	width: 90vw;
	margin: 0 auto;
	height: 100%;
	position: relative;
}
.backToStart {
	position: absolute;
	left: 0;
	top:50px;
}
.closeIcon {
	font-size: 26px;
	color: #ccc;
}
.title {
	position: absolute;
	top: 110px;
	left:0;
	font-weight: 400;
	font-size: 18px;
	letter-spacing: 3rpx;
}
	
.inputBox {
	position: absolute;
	top: 180px;
	left:0;
	width: 100%;
}
.bottomInput {
	margin-top: 18px;
}
input {
	letter-spacing: 3rpx;
	font-size: 14px;
	height: 30px;
	color: #8c8c8c;
	border-bottom: 1px solid #9ebbc7;
}
.turnToIndex {
	position: absolute;
	top: 290px;
	width: 100%;
	height: 40px;
}
.loginBtn {
	width: 100%;
	height: 100%;
	letter-spacing: 10rpx;
	line-height: 40px;
	color: white;
	border-radius: 20px;
	border: none;
	background-color: #65c2ff;
}
.footer {
	position: absolute;
	bottom: 50px;
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.footerTitle {
	font-size: 12px;
	color: #8c8c8c;
}
.iconBox {
	width: 56%;
	display: flex;
	justify-content: space-around;
}
.icon {
	width: 30px;
	height: 30px;
}
</style>
