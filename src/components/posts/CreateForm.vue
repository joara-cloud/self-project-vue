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
			<input type="file" @change="uploadFile" ref="uploadImageFile">
		</div>
		<img :src="image" alt="">
		<button type="submit" class="btn_ty01">확인</button>
	</form>
</template>

<script>
import bus from '@/utils/bus.js';

export default {
	data() {
		return {
			subject: '',
			content: '',
			image: '',
			uploadImageFile: '' 
		}
	},
	methods: {
		async submitForm() {
			console.log('submitform 요청함');
			try {

				// upload file
				const fd = new FormData();
				fd.append('uploadImage', this.uploadImageFile); // 지정해준 key값으로 node.js에서 upload.single('upLoadImage') 이런식으로 받게 됨
				
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


		},
		onFileChange(event) {
			// var files = event.target.files || event.dataTransfer.files;  event.dataTransfer.files가 뭔지 모르겠음
			var files = event.target.files; // return FileList
			console.log(files);
			if(!files.length)
				return;

			this.createImage(files[0]);
		},
		createImage(file) {
			var reader = new FileReader();
			var vm = this;

			reader.onload = (e) => { // FileReader에서 전달 받은 파일을 읽기 성공하면 load EventListener에 등록한 function이 호출된다.
				console.log(vm.image = e.target);
				vm.image = e.target.result;
			}
			console.log(file);
			reader.readAsDataURL(file); // 파일 전달 방식 4가지 중 하나
			// reader.readAsText(file); 
		},
		uploadFile() {
			this.uploadImageFile = this.$refs.uploadImageFile.file[0];
		}
	}
}
</script>

<style>

</style>