<template>
    <div class="items-wrapper">
        <div class="select-add-wrapper">
            <Select 
            v-bind:select="this.$store.state.select"
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
import store from '@/store/index'
import Item from '@/components/Item'
import Select from '@/components/Select'
import Add from '@/components/Add'

export default {
    props: ['vehicles'],
    components: {
        Item,
        Select
    }

}
</script>