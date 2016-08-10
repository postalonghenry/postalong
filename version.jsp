<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title></title>
    <style>
    	.text-center {text-align: center;}
    	h1, h2, h3 {
    		margin: 0;
    	}
    	.mui-btn {
			font-size: 14px;
			font-weight: 400;
			line-height: 1.42;
			position: relative;
			display: inline-block;
			margin-bottom: 0;
			padding: 6px 12px;
			cursor: pointer;
			-webkit-transition: all;
			transition: all;
			-webkit-transition-timing-function: linear;
			transition-timing-function: linear;
			-webkit-transition-duration: .2s;
			transition-duration: .2s;
			text-align: center;
			vertical-align: top;
			white-space: nowrap;
			color: #333;
			border: 1px solid #ccc;
			border-radius: 3px;
			border-top-left-radius: 3px;
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
			border-bottom-left-radius: 3px;
			background-color: #fff;
			background-clip: padding-box;
		}
		.mui-btn:active {
			color: #fff;
			background-color: #929292;
		}
		.title {
			font-size: 25px;
		}
		.title-sub {
			padding: 0px 0 5px 0;
			font-size: 18px;
		}
    	
    	.title-wrap {
    		padding: 15px 0 5px 0;
    	}
    	.center-img-box {
    		margin: 10px 0 0 0;
    	}
    	.center-img-box .img-box {
    		width: 200px;
    		margin: 0 auto;
    	}
    	.download-bar {
    		width: 260px;margin: 10px auto;
    		overflow: hidden;
    	}
    	.android-box {
    		float: left;text-align: center;
    		height: 95px;
    	}
    	.android-img-box {
    		width: 50px;margin: 0px auto 6px auto;
    		height: 50px;
    	}
    	.play-img-box {
    		width: 150px;
			height: 50px;
			line-height: 4.5;
			margin: 0px auto 6px auto;
    	}
    	.button-bar {
    		
    	}
    	.button-bar .download {
    		border-radius: 17px / 19px;
    	}
    	.android-download {
    		width: 90px;
    	}
    	.android-download .download {
    		text-decoration: none;
    	}
    	.google-download {
    		width: 150px;
    		margin-left: 20px;
    	}
    	.google-download .download {
    		width: 115px;
			text-decoration: none;
    	}
    	.later-publish {
    		color: red;font-size: 14px;padding: 5px 0 0 0;
    	}
    </style>
</head>
<body>
	<div class="div-container">
		<div class="title-wrap">
			<h3 class="title-sub text-center">互动，互需，互助，互惠</h3>
			<h3 class="title-sub text-center">通过</h3>
			<h1 class="title text-center">互递竟是如此简单</h1>
		</div>
		<div class="center-img-box">
			<div class="img-box">
				<img width="100%" src="./img/cutpage.png"/>
			</div>
		</div>
		<div class="download-bar">
			<div class="android-box android-download">
				<div class="android-img-box">
					<img width="100%" src="./img/ic_launcher.png"/>
				</div>
				<div class="button-bar">
					<a href="${base.ext2}" class="download mui-btn">在线下载</a>
				</div>
			</div>
			<div class="android-box google-download">
				<div class="play-img-box">
					<img width="100%" src="./img/play_one_bar_logo_2x.png"/>
				</div>
				<div class="button-bar">
					<a href="https://play.google.com/store/apps/details?id=com.postalong.publicexpress" class="download mui-btn">google play下载</a>
				</div>
			</div>
		</div>
		<div class="text-center later-publish">苹果版本后续开放</div>
	</div>
    
</body>
</html>