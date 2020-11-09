<template>
    <div class="select-wrapper">
        Rent
        <select name="select" id="select" class="select">
            <Option
                v-for="item of select" :key="item"
                v-bind:item="item"
            />
        </select>
    </div>
</template>

<script>
import store from '@/store/index';
import Option from '@/components/Option';
export default {
    props: ['select']
}
</script>