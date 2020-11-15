<template>
    <div>
        <div class="specifications__descr">
        {{vehicle.specifications_text}}
        </div>
        <div class="specifications__subtitle">Features:</div>
        <div class="specifications__item">
            <img src="@/assets/img/spec-icon-1.svg" alt="icon" class="specifications__icon">
            <div class="specifications__item-text">
                <div class="specifications__item-subtitle">A challenge for a true champion</div>
                <div class="specifications__item-descr">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
        </div>
        <div class="specifications__item">
            <img src="@/assets/img/spec-icon-2.svg" alt="icon" class="specifications__icon">
            <div class="specifications__item-text">
                <div class="specifications__item-subtitle">A challenge for a true champion</div>
                <div class="specifications__item-descr">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import styleSpecifications from '@/assets/sass/specifications.sass';

export default {
    props: ['vehicle']
}
</script>