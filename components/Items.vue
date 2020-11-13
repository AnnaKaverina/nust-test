<template>
    <div class="items-wrapper">
        <div class="select-add-wrapper">
            <Select 
            v-bind:select="select"
            />
            <Add />
        </div>
        <div class="items">
            <Item 
                v-for="vehicle of vehicles" :key="vehicle.id"
                v-bind:vehicle="vehicle"
            />
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item'
import Select from '@/components/Select'
import Add from '@/components/Add'

export default {
    components: {
        Item,
        Select,
        Add
    },
    computed: {
        vehicles() {
            return this.$store.getters.getVehiclesFromState;
        },
        select() {
            return this.$store.getters.getSelect;
        }
    }
}
</script>