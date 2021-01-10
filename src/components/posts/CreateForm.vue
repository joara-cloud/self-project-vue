<template>
	<form action="" class="form_ty01" @submit.prevent="submitForm">
		<div class="row">
			<label for="">제목</label>
			<input type="text" v-model="subject">
		</div>
		<div class="row">
			<label for="">내용</label>
			<textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
		</div>
		<div class="row">
			<label for="">파일첨부</label>
			<input type="file">
		</div>
		<button type="submit" class="btn_ty01 c2">확인</button>
	</form>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			subject: '',
			content: ''
		}
	},
	methods: {
		submitForm() {
			axios({
				method: 'post',
				url: 'http://localhost:3000/posts/create',
				data: {
					subject: this.subject,
					content: this.content
				}
			}).then((response) => {
				console.log('sucess: ');
				console.log(response);
			}).catch((error) => {
				console.log('catch: '+error);
			})
		}
	}
}
</script>

<style>

</style>