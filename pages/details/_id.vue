<template>
    
    <div class="detailes" v-if="vehicle">
        <img :src="vehicle.image" alt="img" class="detailes__img">
        <div class="detailes__info">
            <div class="detailes__title">{{vehicle.name}}</div>
            <div class="detailes__navigation">
                <nuxt-link to="#" class="detailes__link detailes__link_active">Specifications</nuxt-link>
                <nuxt-link to="#" class="detailes__link">Team</nuxt-link>
                <nuxt-link to="#" class="detailes__link">Rent terms</nuxt-link>
            </div>
            <div class="detailes__wrapper">
                <Specifications style="display: none"/>
                <Team style="display: none"/>
                <Terms />
                <div class="detailes__rent">
                    <div class="detailes__rent-text">
                        Rent for
                        <div class="detailes__rent-value">{{vehicle.rent}} $/h</div>
                    </div>
                    <button class="detailes__rent-button button">Rent now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Specifications from '@/components/Specifications';
import Team from '@/components/Team';
import Terms from '@/components/Terms';

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