import Vuex from 'vuex';
import {getVehicles} from './request';

const store = () => new Vuex.Store({
    state: {
        vehicles: [],
        select: ['whatever', 'airship', 'rocket', 'helicopter'],
        selectedVehicleId: ''
    },
    
    getters: {
        getVehiclesFromState(state) {
            return state.vehicles;
        },
        getSelectedVehicleId(state) {
            return state.selectedVehicleId;
        }
    },
    
    mutations: {
        setVehicles(state, value) {
            state.vehicles = value;
        },
        setSelectedVehicleId(state, id) {
            state.selectedVehicleId = id;
        }
    },
    
    actions: {
        async loadVehicles(context) {
            const res = await getVehicles();
            context.commit('setVehicles', res);
        },
        setSelectedVehicleId(context, id) {
            context.commit('setSelectedVehicleId', id);
        }
    }
});

export default store;

