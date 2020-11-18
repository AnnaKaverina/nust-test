import Vuex from 'vuex';
import {getVehicles} from './request';

const store = () => new Vuex.Store({
    state: {
        vehicles: [],
        select: ['whatever', 'airship', 'rocket', 'helicopter'],
        selectedVehicleId: '',
        addScreen: false
    },
    
    getters: {
        getVehiclesFromState(state) {
            return state.vehicles;
        },
        getSelectedVehicleId(state) {
            return state.selectedVehicleId;
        },
        getSelect(state) {
            return state.select;
        },
        addScreen(state) {
            return state.addScreen;
        }
    },
    
    mutations: {
        setVehicles(state, value) {
            state.vehicles = value;
        },
        setSelectedVehicleId(state, id) {
            state.selectedVehicleId = id;
        },
        showAddScreen(state) {
            state.addScreen = !state.addScreen;
        }
    },
    
    actions: {
        async loadVehicles(context) {
            const res = await getVehicles();
            context.commit('setVehicles', res);
        },
        setSelectedVehicleId(context, id) {
            context.commit('setSelectedVehicleId', id);
        },
        showAddScreen(context) {
            context.commit('showAddScreen');
        }
    }
});

export default store;

