<template>
	<card-popup>
		<div slot="header">
			메모 생성
			<button type="button" v-on:click="$emit('close')">&times;</button>
		</div>
		<div slot="body">
			<input type="text" placeholder="제목을 입력해주세요." v-model="subject">
			<textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요." v-model="content"></textarea>
		</div>
		<div slot="footer" class="text-right">
			<button class="modal-default-button" v-on:click="[$emit('close'), submitMemoList()]">저장</button>
		</div>
	</card-popup>
</template>

<script>
import CardPopup from '@/components/memo/CardPopup.vue';
import Bus from '@/utils/bus.js'

export default {
	components: {
		CardPopup
	},
	data() {
		return {
			showModal: false,
			subject: '',
<<<<<<< HEAD
			content: '',
			post: 6355
		}
	},
	methods: {
		clickevnet() {
=======
			content: ''
		}
	},
	methods: {
		submitMemoList() {
			// API (insert)
>>>>>>> a181dab55bf97e00bddd65ff71d9d06816678435
			this.$http({
				method: 'post',
				url: '/memo/create',
				data: {
					subject: this.subject,
					content: this.content,
<<<<<<< HEAD
					pos: 6355
				}
			})
			.then(function() {
				console.log('success then!');
			})
			.catch(function(e) {
				console.log('catch error', e);
=======
					pos: 65335
				}
			})
			.then(function(response) {
				console.log('성공!', response);
				Bus.$emit('onFetch');
			})
			.catch(function(err) {
				console.log('메모 추가 중 에러 : ', err);
>>>>>>> a181dab55bf97e00bddd65ff71d9d06816678435
			})
		}
	}

}
</script>

<style>

</style>