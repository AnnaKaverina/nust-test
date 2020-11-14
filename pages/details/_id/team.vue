<template>
    <div class="team">
        <div class="team__text">
            {{vehicle.team_text}}
        </div>
        <div class="team__title">Qualified specialists</div>
        <div class="team__items">
            <div class="team__item">
                <img src="@/assets/img/team1.png" alt="team-img" class="team__item-img">
                <div class="team__text-wrapper">
                    <div class="team__name">Marvin McKinney</div>
                    <div class="team__profession">Pilot assistant</div>
                </div>
            </div>
            <div class="team__item">
                <img src="@/assets/img/team2.png" alt="team-img" class="team__item-img">
                <div class="team__text-wrapper">
                    <div class="team__name">Savannah Nguyen</div>
                    <div class="team__profession">Mechanic</div>
                </div>
            </div>
            <div class="team__item">
                <img src="@/assets/img/team3.png" alt="team-img" class="team__item-img">
                <div class="team__text-wrapper">
                    <div class="team__name">Courtney Henry</div>
                    <div class="team__profession">Stewardess</div>
                </div>
            </div>
        </div>
        <div class="team__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
    </div>
</template>

<script>
export default {
    props: ['vehicle']
}
</script>