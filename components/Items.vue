<template>
    <div> 
        <div :class="$style.selectAddWrapper">
            <div :class="$style.selectWrapper">
                Rent
                <select name="select" id="select" :class="$style.select" 
                    v-model="selectedOption"
                >
                    <option v-for="item of select" :key="item">
                        {{item}}
                    </option>
                </select>
            </div>
            <Add />
        </div>
        <div :class="$style.items">
            <Item 
                v-for="vehicle of filteredVehicles" :key="vehicle.id"
                v-bind:vehicle="vehicle"
            />
        </div>
    </div>
</template>

<script>

import Item from '@/components/Item';
import Add from '@/components/Add';

export default {
    components: {
        Item,
        Add
    },
    data() {
        return {
            selectedOption: 'whatever'
        }
    },
    computed: {
        vehicles() {
            return this.$store.getters.getVehiclesFromState;
        },
        select() {
            return this.separateSelect(this.$store.getters.getVehiclesFromState);
        },
        filteredVehicles() {
            if(this.selectedOption == 'whatever') {
                return this.vehicles;
            }
            return this.vehicles.filter(item => item.type == this.selectedOption);
        }
    },
    methods: {
        separateSelect(arr) {
            const select = new Set();
            select.add('whatever');
            for(let i = 0; i < arr.length; i++) {
                select.add(arr[i].type);
            }
            return select;
        }
    }
}
</script>

<style module lang="sass">

.items
    display: flex
    flex-wrap: wrap
    justify-content: space-between
.selectAddWrapper
    height: 48px
    display: flex
    justify-content: space-between
    margin: 0 0 8px 0
.select
    font-weight: 500
    font-size: 40px
    border: none
    color: #4959FF
    background-color: #F3F4F7
    cursor: pointer
    border: none
.selectWrapper
    width: 400px
    font-weight: 500
    font-size: 40px
    color: #012345
    line-height: 120%

@media (max-width: 680px)
    .select, .selectWrapper
        font-size: 30px

@media (max-width: 575px)
    .selectAddWrapper
        height: 32px

@media (max-width: 520px)
    .select
        font-size: 24px
    .selectWrapper
        font-size: 24px
        width: 200px
    .selectAddWrapper
        margin-bottom: 13px

</style>