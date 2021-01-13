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
		<button type="submit" class="btn_ty01">확인</button>
	</form>
</template>

<script>
import bus from '@/utils/bus.js';

export default {
	data() {
		return {
			subject: '',
			content: ''
		}
	},
	methods: {
		async submitForm() {
			console.log('submitform 요청함');
			try {
				var response = await this.$http({
					method: 'post',
					url: '/posts/create',
					data: {
						subject: this.subject,
						content: this.content
					}
				});
				bus.$emit('show:toast', response.data.msg)
				this.$router.push('/board/list');
			} catch(errer) {
				console.log('submitform method error : ' + errer);
			}

		}
	}
}
</script>

<style>

</style>