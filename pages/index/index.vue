<template>
	<view class="main">
		<view class="header">
			<view class="leftHeader">
				<view class="name headerTop">{{userName ? userName : 'xxx'}}</view>
				<view class="date headerBottom">03月21日   星期一</view>
			</view>
			<view class="rightHeader">
				<view v-if="selectWeather.length === 3" class="headerSelectTitle headerTop">今天的天气是...</view>
				<view v-if="selectWeather.length != 3" class="headerSelectTitle headerTop">
					{{selectWeather[0] === '晴天' ? '明天也要开心哦！' : selectWeather[0] === '多云' ? '你笑起来真好看' : '你超棒的！'}}
				</view>
				<view class="headerIconBox headerBottom" :style="selectWeather.length === 3 ? '' : 'justify-content: center;'">
					<image v-if="selectWeather.length === 3 || selectWeather[0] === '晴天'"  class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/太阳.svg" mode="" @click="selectForWeather('晴天')"></image>
					<image v-if="selectWeather.length === 3 || selectWeather[0] === '多云'" class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/多云.svg" mode="" @click="selectForWeather('多云')"></image>
					<image v-if="selectWeather.length === 3 || selectWeather[0] === '阴天'" class="icon" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/雨天.svg" mode="" @click="selectForWeather('阴天')"></image>
				</view>
			</view>
		</view>
		<view class="banner">
			<image class="bannerImg" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/banner.svg" mode=""></image>
		</view>
		<view class="contentBox">
			<view class="contentTitle"><view class="yellowLine"></view>课程分类</view>
			<view class="contentCard firstCard">
				<view class="leftImage  firstLeftImage">
					<image class="cardImg" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/tongue.svg" mode=""></image>
				</view>
				<view class="cardMain">
					<view class="cardTitle">口语课程</view>
					<view class="cardMainContent">为学龄前听障儿童设计的专业口语表达课程，助其健康成长</view>
					<view class="cardBtn">开始学习</view>
				</view>
			</view>
			<view class="contentCard ">
				<view class="leftImage secondLeftImage">
					<image class="cardImg" src="https://7463-tcb-lsgag8dl5de0e4-4dq8l0eaf059a-1311058144.tcb.qcloud.la/svg/fingerspelling.svg" mode=""></image>
				</view>
				<view class="cardMain">
					<view class="cardTitle">手语教程</view>
					<view class="cardMainContent">为学龄前听障儿童设计的专业手语表达课程，助其健康成长</view>
					<view class="cardBtn">开始学习</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	
	export default {
		data() {
			return {
				title: 'Hello',
				selectWeather:["晴天","多云","阴天"]
			}
		},
		computed:mapState(['userName','avatarUrl']),
		onLoad() {

		},
		created() {
			uni.showToast({
				title: '登录成功',
			});
		},
		methods: {
			selectForWeather(weather) {
				this.selectWeather = []
				this.selectWeather.push(weather)
			}
		}
	}
</script>

<style scoped>
.main {
	width: 90vw;
	margin: 0 auto;
	height: 100%;
	padding-top: 80px;
}
.icon {
	width: 20px;
	height: 20px;
	z-index: 999;
}
.header {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
}
.leftHeader,
.rightHeader {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.name {
	font-size: 22px;
	font-weight: 700;
	display: flex;
	align-items: center;
	letter-spacing: 5rpx;
}
.date {
	font-size: 14px;
	color: #C0C0C0;
	display: flex;
	align-items: center;
}
.headerSelectTitle {
	font-size: 13px;
	color: #8c8c8c;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.headerIconBox {
	width: 28vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.headerTop,
.headerBottom {
	height: 43px;
}
.banner,
.bannerImg {
	position: relative;
	top:-10px;
	width: 100%;
}
.contentBox {
	position: relative;
	top: -20px;
	width: 100%;
}
.contentTitle {
	display: flex;
	align-items: center;
	position: relative;
	top: -15px;
}
.yellowLine {
	display: inline-block;
	width: 4px;
	height: 16px;
	background-color:#fed14c ;
	margin-right: 5px;
}

.leftImage {
	width: 30%;
	height: 100%;
	flex:1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.firstLeftImage {
	background-color: #f0feff;
}
.secondLeftImage {
	background-color: #f0f6ff;
}
.contentCard {
	width: 100%;
	height: 140px;
	border-radius: 15px;
	overflow: hidden;
	display: flex;
	box-shadow: 0 2px 10px 0px  rgba(25,107,166,0.1);
}
.firstCard {
	margin-bottom: 20px;
}
.cardImg {
	width: 80%;
	height: 60%;
}
.cardMain {
	padding: 10px;
	flex:2;
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: white;
}
.cardTitle {
	font-size: 16px;
	font-weight: 550;
	margin-bottom: 3px;
}
.cardMainContent {
	color: #d0d0d0;
	font-size: 12px;
}
.cardBtn {
	background-color: #febe00;
	color: white;
	width: 35%;
	height: 26px;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	line-height: 26px;
	border-bottom-left-radius: 13px;
	border-top-right-radius: 13px;
	border-bottom-right-radius: 13px;
	position: absolute;
	bottom: 10px;
	right: 10px;
}
</style>
