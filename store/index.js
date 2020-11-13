import Vuex from 'vuex';
import {getVehicles} from './request';

const store = () => new Vuex.Store({
    state: {
        vehicles: [],
        select: ['whatever', 'airship', 'rocket', 'helicopter']
    },
    
    getters: {
        getVehiclesFromState(state) {
            return state.vehicles;
        },
        getSelect(state) {
            return state.select;
        }
    },
    
    mutations: {
        setVehicles(state, value) {
            state.vehicles = value;
        }
    },
    
    actions: {
        async loadVehicles(context) {
            const res = await getVehicles();
            context.commit('setVehicles', res);
        }
    }
});

export default store;

