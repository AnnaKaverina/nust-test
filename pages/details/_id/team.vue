<template>
    <div :class="$style.team">
        <div :class="$style.text">
            {{vehicle.team_text}}
        </div>
        <div :class="$style.title">Qualified specialists</div>
        <div :class="$style.items">
            <div :class="$style.item">
                <img src="@/assets/img/team1.png" alt="img" :class="$style.img">
                <div :class="$style.textWrapper">
                    <div :class="$style.name">Marvin McKinney</div>
                    <div :class="$style.profession">Pilot assistant</div>
                </div>
            </div>
            <div :class="$style.item">
                <img src="@/assets/img/team2.png" alt="img" :class="$style.img">
                <div :class="$style.textWrapper">
                    <div :class="$style.name">Savannah Nguyen</div>
                    <div :class="$style.profession">Mechanic</div>
                </div>
            </div>
            <div :class="$style.item">
                <img src="@/assets/img/team3.png" alt="img" :class="$style.img">
                <div :class="$style.textWrapper">
                    <div :class="$style.name">Courtney Henry</div>
                    <div :class="$style.profession">Stewardess</div>
                </div>
            </div>
        </div>
        <div :class="$style.text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
    </div>
</template>

<script>

export default {
    props: ['vehicle']
}
</script>

<style module lang="sass">

.team
    min-height: 350px
.item
    width: 32%
.img
    border-radius: 16px
    width: 100%
    object-fit: contain
.text
    font-weight: 300
    font-size: 14px
    line-height: 146%
    margin: 0 0 32px 0
.title
    font-size: 24px
    font-weight: 500
    color: #012345
    margin-bottom: 32px
.items
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 16px
.name
    height: 30px
    font-size: 16px
    font-weight: 500
    margin-top: 16px
    color: #012345
.profession
    margin-top: 8px
    font-weight: 300
    font-size: 12px
    color: #677B8F

@media (max-width: 435px)
    .item
        margin-bottom: 12px
    .items
        flex-direction: column
        align-items: start
    .item
        display: flex
        justify-content: space-between
        align-items: center
        width: 343px
    .img
        width: 132px
        height: 80px
    .textWrapper
        width: 195px
    .name
        height: 20px
        margin: 0
    .profession
        margin-top: 4px

</style>