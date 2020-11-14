<template>
    <div class="items-wrapper">
        <div class="select-add-wrapper">
            <div class="select-wrapper">
                Rent
                <select name="select" id="select" class="select" 
                    v-model="selectedOption"
                >
                    <option v-for="item of select" :key="item">
                        {{item}}
                    </option>
                </select>
            </div>
            <Add />
        </div>
        <div class="items">
            <Item 
                v-for="vehicle of filteredVehicles" :key="vehicle.id"
                v-bind:vehicle="vehicle"
            />
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item';
import Select from '@/components/Select';
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