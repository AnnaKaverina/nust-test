<template>
	<div class="wrapper">
		<Items 
			v-bind:vehicles="this.$store.state.vehicles"
		/>
		<!-- <div>{{test()}}</div> -->
	</div>
</template>

<script>
	import store from '@/store/index';
	import Items from '@/components/Items';
	export default {
		async fetch({store}) {
			if(store.getters['index/get'].length === 0) {
				await store.dispatch('loadVehicles')
			}
		},
		computed: {
			vehicles: function() {
				return this.$store.getters['loadVehicles']
			}
		},
		data: () => ({
		}),
		methods: {
			test: function() {
				this.$store.dispatch('loadVehicles')
			}
		}
	}
</script>
