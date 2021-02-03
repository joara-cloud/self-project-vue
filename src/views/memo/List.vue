<template>
	<div id="content" class="memo_wrap">
		<memo-list></memo-list>
	</div>
</template>

<script>
import MemoList from '@/components/memo/MemoList.vue';

export default {
	components: {
		MemoList
	}
}
</script>

<style>
.memo_wrap {min-height:50vh;background: -webkit-gradient(linear, left top, left bottom, from(#3EB9DE), to(#3A80DE));background: linear-gradient(#3EB9DE, #3A80DE)}

</style>