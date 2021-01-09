<template>
	<header id="header">
		<div class="h_content">
			<h1><a href="/"><img alt="Vue logo" src="@/assets/logo.png"></a></h1>
			<ul class="gnb">
				<li><a href="">Usage</a></li>
				<li><a href="">Memo</a></li>
				<li><a href="">Board</a></li>
				<li class="member"><a href="">Login</a></li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style>
#header {position:fixed;left:50px;right:50px;top:0}
#header .h_content {display:flex;padding:54px 0;justify-content:space-between;align-items:center}
#header .h_content h1 {width:50px}
#header .h_content h1 img {width:100%}
#header .h_content .gnb > li {display:inline-block;margin:0 0 0 40px;vertical-align:middle;}
#header .h_content .gnb > li:first-child {margin:0}
#header .h_content .gnb > li > a {display:block;font-size:18px;font-weight:600;color:#172852}
#header .h_content .gnb .member {overflow:hidden;height:50px;border-radius:25px;line-height:50px;background-color:#e2cebc}
#header .h_content .gnb .member a {position:relative;padding:0 38px}
#header .h_content .gnb .member a:hover {color:#fff}
#header .h_content .gnb .member a:before {display:block;position:absolute;left:0;bottom:0;width:100%;height:100%;content:'';background-color:#d06d43}
</style>