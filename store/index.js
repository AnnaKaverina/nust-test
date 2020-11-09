import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {getVehicles} from './request';

const store = () => new Vuex.Store({
    
    state: {
        vehicles: [],
        select: ['whatever', 'airship', 'rocket', 'helicopter']
    },
    getters: {
        getVehicles(state) {
            return state.vehicles;
        }
    },
    mutations: {
        setVehicles(state, value) {
            state.vehicles = value;
        }
    },
    actions: {
        loadVehicles({commit}) {
            getVehicles()
            .then(json => commit('setVehicles', json))
            .catch(() => {
                $nuxt.error({ message: 'Server error', statusCode: 404 });
            });
        }
    }
});

export default store;

/* export const state = () => ({
    vehicles: [],
    select: ['whatever', 'airship', 'rocket', 'helicopter']
});

export const mutations = {
    setVehicles(state, vehicles) {
        state.vehicles = vehicles;
    }
};

import getVehicles from './request';

export const actions = {
    async loadVehicles({commit}) {
        getVehicles()
        .then(vehicles => commit('setVehicles', vehicles))
        .catch((error) => {
            $nuxt.error({ message: 'Server error', statusCode: 404 });
            throw error;
        });
    }
};

export const getters = {
    get: state => {
        return state.vehicles;
    }
}; */