<template>
	<div class="wrapper">
		<Items />
	</div>
</template>

<script>
	import Items from '@/components/Items';
	export default {
		mounted() {
			if(this.$store.getters.getVehiclesFromState.length === 0) {
				this.$store.dispatch('loadVehicles');
			}
		}
	}
</script>
