<template>
    <!-- <h1>Details {{$route.params.id}}</h1> -->
    <div class="detailes">
        <img src="@/assets/img/detailes-img.png" alt="img" class="detailes__img">
        <div class="detailes__info">
            <div class="detailes__title">XR-74 «Cooper»</div>
            <div class="detailes__navigation">
                <nuxt-link to="#" class="detailes__link detailes__link_active">Specifications</nuxt-link>
                <nuxt-link to="#" class="detailes__link">Team</nuxt-link>
                <nuxt-link to="#" class="detailes__link">Rent terms</nuxt-link>
            </div>
            <div class="detailes__wrapper">
                <Specifications style="display: none"/>
                <Team style="display: none"/>
                <Terms />
                <div class="detailes__rent">
                    <div class="detailes__rent-text">
                        Rent for
                        <div class="detailes__rent-value">164 $/h</div>
                    </div>
                    <button class="detailes__rent-button button">Rent now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Specifications from '@/components/Specifications';
import Team from '@/components/Team';
import Terms from '@/components/Terms';

export default {
    
}
</script>