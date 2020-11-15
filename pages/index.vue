<template>
	<div class="wrapper">
		<Items />
	</div>
</template>

<script>
	import styleMain from '@/assets/sass/main.sass';
	import Items from '@/components/Items';
	
	export default {
		async created() {
			if(this.$store.getters.getVehiclesFromState.length === 0) {
				await this.$store.dispatch('loadVehicles');
			}
		}
	}
</script>
