<template>
    <div :class="$style.error">
        <h1 :class="$style.title">An error has occurred</h1>
        <span :class="$style.text">Please refresh the page</span>
        <button :class="$style.refreshButton" class="button">Reload page</button>
    </div>
</template>

<script>

export default {
    props: ['error'],
    middleware: [
        function({ redirect }) {
        return redirect(404, '/error');
        },
    ],
}
</script>

<style module lang="sass">

.error
	width: 420px
	height: 180px
	position: absolute
	top: 50%
	right: 50%
	transform: translate(50%, -50%)
	display: flex
	flex-direction: column
	justify-content: space-between
	align-items: center
.title
	font-size: 40px
	line-height: 100%
	color: #012345
	margin: 0
.text
	font-weight: 300
	font-size: 14px
	color: #677B8F
	line-height: 146%
.refreshButton
	width: 161px
	height: 48px
	background-color: #4959FF
	border: none
	border-radius: 12px
	font-size: 16px
	font-weight: 500
	line-height: 48px
	color: #FCFCFC

@media (max-width: 575px)
	.error
		height: 141px
	.title
		font-size: 24px
	.refreshButton
		width: 133px
		height: 44px
		line-height: 44px

@media (max-width: 575px)
	.title
		font-size: 24px

</style>