<template>
    <div :class="$style.wrapper" v-if="vehicle">
        <img :src="vehicle.image" alt="img" :class="$style.img">
        <div :class="$style.info">
            <div :class="$style.title">{{vehicle.name}}</div>
            <div :class="$style.navigation">
                <nuxt-link to="specifications" class="link">Specifications</nuxt-link>
                <nuxt-link to="team" class="link">Team</nuxt-link>
                <nuxt-link to="rent-terms" class="link">Rent terms</nuxt-link>
            </div>
            <div :class="$style.detailes">
                <NuxtChild 
                    v-bind:vehicle="vehicle"
                />
                <div :class="$style.rent">
                    <div :class="$style.rentText">
                        Rent for
                        <div :class="$style.rentValue">{{vehicle.rent}} $/h</div>
                    </div>
                    <button :class="$style.rentButton" class="button">Rent now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async created() {
        await this.$store.dispatch('setSelectedVehicleId', this.$route.params.id);
        if(this.$store.getters.getVehiclesFromState.length === 0) {
				await this.$store.dispatch('loadVehicles');
			}
    },
    computed: {
        vehicle() {
            return this.$store.getters.getVehiclesFromState.find(item => item.id === this.$store.getters.getSelectedVehicleId);
        }
    }
}
</script>

<style module lang="sass">

.wrapper
	display: flex
	justify-content: space-between
	align-items: center
.detailes
	min-height: 550px
	padding: 32px 0 0 0
	display: flex
	flex-direction: column
	justify-content: space-between
.img
	object-fit: contain
	width: 54%
	border-radius: 24px
.info
	width: 40%
	min-height: 500px
.title
	color: #012345
	font-size: 40px
	margin-top: 56px
	user-select: none
.navigation
	margin-top: 32px
	width: 300px
	display: flex
	justify-content: space-between
.rent
	height: 80px
	background-color: #F3F4F7
	border-radius: 16px
	padding: 0 32px
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 29px
.rentText
	display: inline-block
.rentValue
	display: inline-block
	color: #F84AB3
	user-select: none
.rentButton
	width: 136px
	height: 48px
	background: #4959FF
	border-radius: 12px
	font-weight: 500
	font-size: 16px
	line-height: 14px
	color: #FCFCFC

@media (max-width: 775px)
	.wrapper
		flex-direction: column
	.img
		width: 343px
		height: 332px
	.info
		width: 90%

@media (max-width: 520px)
	.detailes
		padding-bottom: 132px
		max-height: 900px
		padding-top: 20px
	.title
		font-size: 24px
		margin-top: 22px
	.navigation
		margin-top: 16px
	.rent
		position: fixed
		bottom: 32px
		left: 50%
		transform: translateX(-50%)
		width: 343px
	.rentButton
		font-size: 14px

</style>