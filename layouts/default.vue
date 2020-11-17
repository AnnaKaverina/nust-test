<template>
	<div :class="$style.container">
		<Header />
		<div :class="$style.wrapper">
			<nuxt />
		</div>
	</div>
</template>

<script>

import Header from '@/components/Header';

export default {
	components: {
    	Header
  	}
}

</script>

<style module lang="sass">

.container
	max-width: 1920px 
	margin: 0 auto

.wrapper
	position: relative
	width: 100%
	min-height: 708px
	border-radius: 48px
	background-color: #F3F4F7
	padding: 56px 64px 64px 64px

@media (max-width: 575px)
	.wrapper
		min-height: 684px

@media (max-width: 520px)
	.wrapper
		padding: 26px 16px 16px 16px
		border-radius: 24px

@media (max-width: 435px)
	.container
		width: 375px        

</style>