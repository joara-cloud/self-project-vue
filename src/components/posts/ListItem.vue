<template>
	<div>
		<div class="sort">
			<select name="" id="" v-model="sortSelect">
				<option value="8" selected>8개씩</option>
				<option value="12">12개씩</option>
				<option value="16">16개씩</option>
			</select>
		</div>
		<ul class="posts">
			<li v-for="(post, index) in currentList" :key="index">
				<router-link to="/board/view">
					<div class="thumb">
						<img src="@/assets/images/temp.png" alt="">
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
		<div class="pagination_wrap pagination">
			<button type="button" class="crumb crumb__prev">Previous</button>
			<ul class="pagination crumbs">
				<li v-for="(i, page) in new Array(pagination)" :key="i" :class="[currentPage == page ? 'active' : '', 'customclass']"><a :href="`?paging=${page}`" v-on:click.prevent="test(page)" class="crumb">{{page+1}} </a></li>
			</ul>
			<button type="button" class="crumb crumb__next">Next</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
			totalList: 0, // 전체 DATA개수
			paging: 0, // 페이징 개수
			// listNum: 8, // 한 페이지당 DATA 개수 (초기 10개)
			currentPage: 0, // 현재페이지
			sortSelect: 8, // 정렬개수
		}
	},
	methods: {
		test: function(page) {
			this.currentPage = page;
			console.log(this.currentPage);
		}
	},
	created() {
		this.$http({
			method: 'get',
			url: '/posts'
		}).then( ({data}) => {
			console.log('get posts success!');
			this.posts = data.posts;
			this.totalList = this.posts.length;


			console.log(this.paging);
		}).catch(function(err) {
			console.log('catch : ', err);
		})
	},
	computed: {
		currentList() {
			const start = this.currentPage * this.sortSelect;
			const end = start + this.sortSelect;


			return this.posts.slice(start, end);
			// return this.sortSelect;
		},
		pagination() {
			// this.paging = Math.ceil(this.totalList / this.sortSelect);
			return Math.ceil(this.totalList / this.sortSelect);

		}
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
.sort {padding:0 0 10px;text-align:right}
.sort select {padding:7px 10px;border:1px solid #ccc;border-radius:5px;font-size:14px}


.pagination {
  display: flex;justify-content:center;
  padding: 1rem;
  border-radius: 0.25rem;
}

.crumbs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.crumb {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: currentColor;
  border-radius: 0.2rem;
  border: 0.0625rem solid #d7d7d7; /* 1px */
}

.crumb:hover, .active .crumb, .crumb__active {
  background-color: #1d1f20;
  color: #fdfdfd;
  border-color: #1d1f20;
}

.crumb__prev { margin-right: 0.5rem; }
.crumb__next { margin-left: 0.5rem;}
</style>