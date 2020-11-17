<template>
    <div :class="$style.terms">
        <div :class="$style.text">
            {{vehicle.term_text}}
        </div>
        <div :class="$style.conditions">Additional conditions:</div>
        <ul :class="$style.conditionsList">
            <li :class="$style.condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
            <li :class="$style.condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
            <li :class="$style.condition">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['vehicle']
}
</script>

<style module lang="sass">

.text
    font-weight: 300
    font-size: 14px
    color: #677B8F
    line-height: 146%
.conditions
    font-weight: 500
    font-size: 16px
    color: #012345
    margin: 24px 0 0 0
.conditionsList
    font-weight: 300
    font-size: 14px
    color: #677B8F
    line-height: 146%
    margin-top: 16px
    list-style: none
.condition
    margin-bottom: 16px
li::before
    content: ""
    display: block
    position: relative
    top: 12px
    right: 20px
    width: 4px
    height: 4px
    background-color: #F84AB3
    border-radius: 100%

</style>