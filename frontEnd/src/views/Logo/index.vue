<template>
	<PlumBlossom />
	<ChooseTheme class="absolute right-5 top-5 text-base" />
</template>

<script lang="ts">
  export default {
		name: 'Logo'
	}
</script>

<script setup lang="ts">
	import ChooseTheme from '~/components/ChooseTheme.vue'
	import PlumBlossom from '~/components/PlumBlossom.vue'
</script>

<style scoped></style>
