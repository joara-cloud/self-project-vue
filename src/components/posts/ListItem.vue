<template>
	<div>
		<ul class="posts">
			<li v-for="(post, index) in posts" :key="index">
				<router-link to="/board/view">
					<div class="thumb">
						<img src="https://images.microcms-assets.io/protected/ap-northeast-1:6e79cea0-bbd1-4e28-96ec-2f1e846dcbd1/service/snaqme/media/eye%20catch%20new.png?fit=crop&amp;w=500&amp;h=500" alt="">
					</div>
					<div class="info">
						<h4 class="post_subject">{{post.subject}}</h4>
						<p class="post_date">{{post.created}}</p>
					</div>
				</router-link>
			</li>
			<!-- <li>
				<router-link to="/board/view">
					<div class="thumb">
						<img src="https://images.microcms-assets.io/protected/ap-northeast-1:6e79cea0-bbd1-4e28-96ec-2f1e846dcbd1/service/snaqme/media/eye%20catch%20new.png?fit=crop&amp;w=500&amp;h=500" alt="">
					</div>
					<div class="info">
						<h4 class="post_subject">게시판 제목입니다. 게시판 제목입니다. 게시판 제목입니다. 게시판 제목입니다. </h4>
						<p class="post_date">2021.01.10</p>
					</div>
				</router-link>
			</li> -->
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			subject: '',
			content: '',
			posts: []
		}
	},
	created() {
		this.$http({
			method: 'get',
			url: '/posts'
		}).then(({data}) => {
			console.log('get posts success!');
			console.log(data.posts);
			// this.subject = data.posts.subject;
			// this.content = data.posts.content;
			this.posts = data.posts;
		}).catch(function(err) {
			console.log('catch : ', err);
		})
	}
}
</script>

<style>
.posts {margin-left:-2%;font-size:0}
.posts > li {display:inline-block;width:23%;margin-left:2%;margin-bottom:25px;vertical-align:top}
.posts > li > a {display:block}
.posts .post_subject {padding:10px 0 0;font-size:16px;line-height:1.4;color:#172852}
.posts .post_date {padding:8px 0 0;font-size:14px;font-weight:600;color:#172852}
.posts .thumb img {width:100%}
</style>