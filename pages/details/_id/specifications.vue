<template>
    <div>
        <div :class="$style.description">
        {{vehicle.specifications_text}}
        </div>
        <div :class="$style.subtitle">Features:</div>
        <div :class="$style.item">
            <img src="@/assets/img/spec-icon-1.svg" alt="icon" :class="$style.icon">
            <div :class="$style.itemText">
                <div :class="$style.itemSubtitle">A challenge for a true champion</div>
                <div :class="$style.itemDescription">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
        </div>
        <div :class="$style.item">
            <img src="@/assets/img/spec-icon-2.svg" alt="icon" :class="$style.icon">
            <div :class="$style.itemText">
                <div :class="$style.itemSubtitle">A challenge for a true champion</div>
                <div :class="$style.itemDescription">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['vehicle']
}
</script>

<style module lang="sass">

.item
    margin-bottom: 16px
    display: flex
    justify-content: space-between
.itemText
    width: 431px
    margin-left: 10px
.itemSubtitle
    font-size: 16px
    color: #012345
    font-weight: 500
    margin-bottom: 8px
    line-height: 152%
    user-select: none
.itemDescription
    font-weight: 300
    font-size: 14px
    line-height: 146%
    user-select: none
.description
    font-size: 14px
    font-weight: 300
    line-height: 146%
    color: #677B8F
    user-select: none
.subtitle
    margin: 32px 0
    font-size: 24px
    font-weight: 500
    color: #012345

@media (max-width: 775px)
    .item
        justify-content: space-around

@media (max-width: 680px)
    .item
        justify-content: space-between

@media (max-width: 520px)
    .subtitle
        margin: 20px 0
    .item
        margin-bottom: 12px

</style>