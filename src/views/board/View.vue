<template>
	<div>
		<h3>{{this.postIndx}}</h3>
		board view
		
		<router-link to="/board/list" class="btn_ty01">목록으로</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			postIndx: 0
		}
	},
	created() {
		console.log(this.$route);
		this.postIndx = this.$route.params.idx;
	}
}
</script>

<style>

</style>