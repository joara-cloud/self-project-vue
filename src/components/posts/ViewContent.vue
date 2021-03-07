<template>
	<div>
		
	</div>
</template>

<script>
import {fetch_post} from '@/api/index.js'

export default {
	props: {
		postIndex: { // 해당 게시물의 idx
			type: Number,
			required: true
		}
	},
	async created() {
		try {
			const {data} = await fetch_post('post', `/posts/${this.postIndex}`);
			console.log(data);
		} catch(err) {
			console.log(err);
		}
	}
}
</script>

<style>

</style>