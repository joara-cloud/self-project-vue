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
			<button class="modal-default-button" v-on:click="[$emit('close'), clickevnet()]">저장</button>
		</div>
	</card-popup>
</template>

<script>
import CardPopup from '@/components/memo/CardPopup.vue';

export default {
	components: {
		CardPopup
	},
	data() {
		return {
			showModal: false,
			subject: '',
			content: '',
			post: 6355
		}
	},
	methods: {
		clickevnet() {
			this.$http({
				method: 'post',
				url: '/memo/create',
				data: {
					subject: this.subject,
					content: this.content,
					pos: 6355
				}
			})
			.then(function() {
				console.log('success then!');
			})
			.catch(function(e) {
				console.log('catch error', e);
			})
		}
	}

}
</script>

<style>

</style>