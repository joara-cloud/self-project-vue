<template>
	<div>
		<app-header></app-header>
			<div id="container">
				<router-view></router-view>
			</div>
    <app-footer></app-footer>
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
	components: {
		AppHeader,
		AppFooter
	}
}
</script>

<style>

</style>