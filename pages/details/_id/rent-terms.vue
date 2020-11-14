<template>
    <div class="terms">
        <div class="terms__text">
            {{vehicle.term_text}}
        </div>
        <div class="terms__conditions">Additional conditions:</div>
        <ul class="terms__conditions-list">
            <li class="condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
            <li class="condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
            <li class="condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['vehicle']
}
</script>