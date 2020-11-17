<template>
    <div :class="$style.item" @click.prevent="openDetails(vehicle.id)">
        <img :src="vehicle.preview" alt="vehicle" :class="$style.img">
        <div :class="$style.info">
            <div :class="$style.title">{{vehicle.name}}</div>
            <div :class="$style.subtitle">{{vehicle.description}}</div>
            <div :class="$style.cost">{{vehicle.rent}} $/h</div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['vehicle'],
    methods: {
        openDetails(id) {
            this.$router.push('/details/' + id + '/specifications');
        },
        setSelectedVehicleId(id) {
            this.$store.dispatch('setSelectedVehicleId', id);
        }
    }
}
</script>

<style module lang="sass">

.item
	width: 374px
	height: 164px
	background-color: #FCFCFC
	border-radius: 32px
	display: flex
	justify-content: flex-start
	margin: 32px 0 0 0
	padding-right: 10px
	&:hover
		transform: scale(1.05)
		cursor: pointer
.img
	height: 88px
	width: 88px
	display: block
	margin: 24px 0 0 32px
	border-radius: 24px
.info
	min-height: 100px
	width: 197px
	margin: 40px 0 0 24px
.title
	font-size: 16px
	font-weight: 500
	user-select: none
.subtitle
	margin-top: 12px
	font-size: 12px
	font-weight: 300
	line-height: 18px
	text-align: left
	user-select: none
.cost
	margin-top: 16px
	font-size: 14px
	font-weight: 500
	line-height: 21px
	text-align: left
	color: rgba(248, 74, 179, 1)
	user-select: none

@media (max-width: 1280px)
	.item
		width: 360px

@media (max-width: 1245px)
	.item
		width: 330px

@media (max-width: 1210px)
	.item
		width: 310px
	.img
		margin-left: 20px

@media (max-width: 1090px)
	.item
		width: 280px

@media (max-width: 1090px)
	.item
		width: 280px

@media (max-width: 1000px)
	.item
		width: 380px

@media (max-width: 915px)
	.item
		width: 360px

@media (max-width: 870px)
	.item
		width: 300px

@media (max-width: 775px)
	.item
		width: 250px

@media (max-width: 680px)
	.item
		width: 210px
	.img
		height: 70px
		width: 70px
	.info
		margin: 20px 0 0 14px

@media (max-width: 575px)
	.item
		width: 343px
		margin-left: auto
		margin-right: auto
	.img
		height: 88px
		width: 88px
		margin: 24px 0 0 32px
	.info
		margin: 32px 0 0 24px

@media (max-width: 520px)
	.item
		margin-top: 12px

@media (max-width: 435px)
	.item
		width: 343px
		padding-right: 0

</style>