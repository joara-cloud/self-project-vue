<template>
	<div id="content" class="memo_wrap">
		<memo-list v-on:dhow="addboard"></memo-list>
		<add-memo v-if="isAddboard" v-on:close="isAddboard=false"></add-memo>
	</div>
</template>

<script>
import MemoList from '@/components/memo/MemoList.vue';
import AddMemo from '@/components/memo/AddMemo.vue';

export default {
	data() {
		return {
			isAddboard: false
		}
	},
	components: {
		MemoList,
		AddMemo
	},
	methods: {
		addboard() {
			this.isAddboard = true;
		}
	}

}
</script>

<style>
.memo_wrap {min-height:50vh;background: -webkit-gradient(linear, left top, left bottom, from(#3EB9DE), to(#3A80DE));background: linear-gradient(#3EB9DE, #3A80DE);background:#ddd;}

</style>