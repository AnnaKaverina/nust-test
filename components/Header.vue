<template>
    <div :class="$style.header">
        <div :class="$style.logoGroup">
            <NuxtLink to="/" :class="$style.link">
                <div :class="$style.logo">
                    <div :class="$style.imgWrapper">
                        <img src="@/assets/img/img-logo.svg" alt="logo" :class="$style.imgLogo">
                    </div>
                    <div :class="$style.logoTitle">Pepelane</div>
                </div>
            </NuxtLink>
            <div :class="$style.descr">World's first affordable airsharing</div>
        </div>
        <div :class="$style.optionsGroup">
            <div :class="$style.groupMod">
                <img src="@/assets/img/mod-icon.svg" alt="mod-icon" :class="$style.modIcon">
                <div :class="$style.modText">Night mod</div>
            </div>
            <div :class="$style.icons">
                <img src="@/assets/img/icon-message.svg" alt="icon-message" :class="$style.iconMessage">
                <img src="@/assets/img/icon-notify.svg" alt="icon-notify" :class="$style.iconNotify">
            </div>
            <div :class="$style.autor">
                <div :class="$style.autorName">Bessie Cooper</div>
                <img src="@/assets/img/autor-photo.png" alt="autor-photo" :class="$style.autorPhoto">
            </div>
        </div>
    </div>
</template>



<style module lang="sass">

.header
    height: 144px
    display: flex
    justify-content: space-between
    align-items: center
.link
    text-decoration: none
.logoGroup
    width: 490px
    display: flex
    justify-content: space-between
    align-items: center
.logo
    width: 170px
    display: flex
    justify-content: space-between
    align-items: center
.imgLogo
    display: block
    margin: 3px auto
    height: 48px
    width: 48px
.logoTitle
    font-weight: 500
    font-size: 24px
.descr
    font-size: 16px
    font-weight: 300
.optionsGroup
    width: 534px
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
.mod
    display: flex
    justify-content: space-between
    align-items: center
    width: 122px
.modText
    font-size: 16px
    font-weight: 300
.icons
    width: 74px
    display: flex
    justify-content: space-around
    align-items: center
    margin-left: 60px
.autor
    width: 181px
    display: flex
    justify-content: space-between
    align-items: center
.autorName
    font-size: 16px
    font-weight: 500
.autorPhoto
    border-radius: 100%
.iconNotify, .iconMessage, .modIcon
    &:hover
        transform: scale(1.1)


@media (max-width: 1090px)
    .logoGroup
        width: 450px
    .descr
        font-size: 14px
    .optionsGroup
        width: 400px
    .mod
        width: 90px
    .modText
        font-size: 12px
    .icons
        margin-left: 20px


@media (max-width: 915px)
    .logoGroup
        width: 400px
    .optionsGroup
        width: 300px
    .autor
        margin-left: 20px
    .icons
        margin-left: 10px
    .mod
        width: 110px


@media (max-width: 775px)
    .logo-group
        width: 350px
    .descr
        margin-left: 20px


@media (max-width: 680px)
    .descr, .autorName
        display: none
    .logo
        margin-left: 22px


@media (max-width: 520px)
    .header
        height: 56px
    .optionsGroup
        margin-right: 16px
    .modText
        display: none
    .mod
        width: 20px
    .icons
        margin-left: 0
    .autor
        width: 56px
    .autor-photo
        height: 32px
        width: 32px
    .logo
        width: 120px
    .logo-title
        font-size: 18px
    .img-logo
        height: 32px
        width: 32px


@media (max-width: 435px)
    .optionsGroup
        width: 135px
    .icons
        width: 60px
    .mod-icon, .iconMessage, .iconNotify
        width: 16px
    .autor
        width: 32px


</style>

