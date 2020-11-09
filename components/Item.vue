<template>
    <div class="item" @click.prevent="openDetails(vehicle.id)">
        <img :src="vehicle.preview" alt="vehicle" class="item__img">
        <div class="item__info">
            <div class="item__info__title">{{vehicle.name}}</div>
            <div class="item__info__subtitle">{{vehicle.description}}</div>
            <div class="item__info__cost">{{vehicle.rent}} $/h</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['vehicle'],
    methods: {
        openDetails(id) {
            this.$router.push('/details/' + id);
        }
    }
}
</script>