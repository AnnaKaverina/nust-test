<template>
    <div :class="$style.wrapper">
        <div :class="$style.text">Add new</div>
        <button :class="$style.add" class="button" v-on:click="showAddScreen()">
            <img src="@/assets/img/plus.svg" alt="plus" :class="$style.plus">
        </button>
    </div>
</template>

<script>

export default {
    methods: {
		showAddScreen() {
			this.$store.dispatch('showAddScreen');
		}
	}
}

</script>

<style module lang="sass">

.add
	width: 48px
	height: 48px
	background: #4959FF
	border-radius: 16px
	display: flex
	justify-content: center
	align-items: center
	cursor: pointer
.plus
	display: block
	height: 14px
	width: 14px
	color: #FCFCFC
.text
	font-size: 20px
	line-height: 140%
	color: #4959FF
	cursor: pointer
.wrapper
	width: 151px
	display: flex
	justify-content: space-between
	align-items: center

@media (max-width: 680px)
	.text
		font-size: 16px

@media (max-width: 575px)
	.add
		width: 32px
		height: 32px
		border-radius: 8px

</style>