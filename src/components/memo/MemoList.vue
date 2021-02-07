<template>
	<div class="memo_list_wrap">
		<div class="memo_section">
			<h3>Doing</h3>
			<ul id="memoList" class="memo_list">
				<li>
					<input type="text" value="1메모내용입니다." readonly>
					<div class="icon">
						<svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> 
							<path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path>
						</svg>
					</div>
					<button type="button" class="memo_delete">&times;</button>
				</li>
				<li>
					<input type="text" value="2메모내용입니다." readonly>
					<button type="button" class="memo_delete">&times;</button>
				</li>
				<li>
					<input type="text" value="3메모내용입니다." readonly>
					<button type="button" class="memo_delete">&times;</button>
				</li>
				<li>
					<input type="text" value="4메모내용입니다." readonly>
					<button type="button" class="memo_delete">&times;</button>
				</li>
				<li>
					<input type="text" value="5메모내용입니다." readonly>
					<button type="button" class="memo_delete">&times;</button>
				</li>
				<li class="add_list">
					<a href="" v-on:click.prevent="addList">+ Add list</a>
				</li>
			</ul>
		</div>
		<!-- <router-link to="/card/1" id="addCard" class="memo_section" v-on:click.prevent="$emit('dhow')">+ Add Card</router-link> -->
		<a href="" id="addCard" class="memo_section" v-on:click.prevent="$emit('dhow')">+ Add Card</a>
	</div>
</template>

<script>
import dragula from 'dragula';
import 'dragula/dist/dragula.css';

export default {
	data() {
		return {
			dragulaCard: '',
		}
	},
	mounted() {
		this.dragulaCard = dragula([
			...Array.from(this.$el.querySelectorAll('#memoList')) // 유사배열이라 Array.from처리해줌 (배열로 넣기위해)
		]).on('drop', (el) => { // wrapper, target, siblings
			console.log(el);
		})
	},
	methods: {
		addList() {
			console.log('add list');
		}
	}

}
</script>

<style>
.memo_list_wrap {display:flex;padding:0 50px;align-items:flex-start}
.memo_list {}
.memo_list > li {position:relative;margin-top:8px;padding:12px 10px;border-radius:4px;font-size:14px;background-color:#fff}
.memo_list > li:first-child {margin-top:0}
.memo_list > li > input {border:0;outline:none}
.memo_list .add_list {background-color:#a5c1de;}
.memo_list .add_list a {display:block}
.memo_list .memo_delete {position:absolute;right:5px;top:9px;width:24px;font-size:24px;line-height:1;background:none}
.memo_list .icon {margin:5px 0 0}
.memo_section {width:250px;margin-left:20px;padding:15px;border-radius:6px;background-color:#E5EFF5}
.memo_section:first-child {margin-left:0}
.memo_section h3 {padding:0 0 10px;font-size:16px}
</style>