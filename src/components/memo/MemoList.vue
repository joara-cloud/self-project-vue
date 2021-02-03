<template>
	<div>
		<ul id="memoList" class="memo_list">
			<li>
				<p>1메모내용입니다.</p>
				<button type="button" class="memo_delete">&times;</button>
			</li>
			<li>
				<p>2메모내용입니다.</p>
				<button type="button" class="memo_delete">&times;</button>
			</li>
			<li>
				<p>3메모내용입니다.</p>
				<button type="button" class="memo_delete">&times;</button>
			</li>
			<li>
				<p>4메모내용입니다.</p>
				<button type="button" class="memo_delete">&times;</button>
			</li>
			<li>
				<p>5메모내용입니다.</p>
				<button type="button" class="memo_delete">&times;</button>
			</li>
		</ul>
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
			...Array.from(this.$el.querySelectorAll('#memoList'))
		]).on('drop', () => {
			console.log('drop');
		})

		
      
	}

}
</script>

<style>

</style>