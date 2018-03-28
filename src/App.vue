<template lang="html">
    <div id="app" class="wrapper">
        <header class="header">
            <div class="header__item">
                Toggler
            </div>
            <div class="header__item">
                <router-link to="/">
                    <div class="logo">
                        <span class="logo__inner">underground.zp.ua</span>
                    </div>
                </router-link>
            </div>
            <div class="header__item">
                User
            </div>
        </header>
        <main class="main" role="main">
            <router-view></router-view>
        </main>
        <footer class="footer">
            Footer
        </footer>
        <layout-overlay v-if="overlay"></layout-overlay>
    </div>
</template>

<script>
import LayoutOverlay from './components/layout/layout-overlay.vue'

export default {
    name: 'app',
    computed: {
        overlay () {
            return this.$store.getters.overlay
        }
    },
    components: {
        LayoutOverlay
    }
}
</script>

<style lang="less">
@import (reference) "./less/vars.less";
@import (reference) "./less/mixins.less";

/* START: Reset Default Styles */
html, body, div, span, applet,
object, iframe,
h1, h2, h3, h4, h5, h6, p,
blockquote, pre,
a, abbr, acronym, address, big,
cite, code, del, dfn, em,
img, ins, kbd, q, s,
samp, small, strike,
strong, sub, sup, tt,
var, dl, dt, dd, ol, ul,
li, fieldset, form, label,
legend, table, caption,
tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
/* END: Reset Default Styles */
/* START: General */
html {
    height: 100%;
    background: @colorPageBackground;
    box-sizing: border-box;
}

 *, *:before, *:after {
    box-sizing: inherit;
}

 body {
     height: 100%;
     color: #f5f5f5;
     font-family: 'Average', serif;
     -webkit-text-size-adjust: 100%;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-size: 20px;
     line-height: 1.6;
}

a {
    color: #7fdfff;

    &:hover {
        color: #60c4e5;
    }
}

img {
    display: block;
    width: 100%;
}

ul, ol {
    padding: 0 0 0 40px;
}

strong {
    font-weight: 700;
}

em {
    background: @colorBasicYellow;
    border-bottom: 1px solid @colorBasicYellowDark;
}

pre {
    overflow: auto;
    white-space: pre-wrap;
    tab-size: 2;
    background: @colorBasicAir;
    border-bottom: 1px solid @colorBasicAirDark;
    padding: 20px 10px;
    box-shadow: 0px 0px 5px 0px @colorBasicBoxShadowLight;
}

iframe {
    display: block;
}

::selection {
      background: @colorBasicYellowDark;
      color: @colorBasicWhite;
      text-shadow: none;
}
/* END: General */
/* START: Typography */
h1, h2, h3, h4, h5, h6 {
    color: #ccc;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-size: 54px;
    line-height: 72px;
    font-weight: 800;
}

h2 {
    font-size: 34px;
    line-height: 46px;
    font-weight: 700;
}

h3 {
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
}

.content {

    &__item,
    & h1,
    & h2,
    & h3,
    p,
    ul,
    pre {
        margin: 0 0 40px 0;

        &:last-child {
            margin: 0;
        }
    }
}
/* END: Typography */
/* START: Form Elements */
button,
input[type="button"] {
    padding: 0;
    border: none;
    display: inline-block;
    font-size: 1em;
    line-height: 1.6;
    cursor: pointer;
}

input,
textarea {
    font-size: 1em;
    line-height: 1.6;
}

label {
    display: block;
}

.form {

    &__item {
        margin: 0 0 10px 0;

        &:last-child {
            margin: 0;
        }
    }
}

.button {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-family: 'Average', serif;
    background: none;
    cursor: pointer;

    &:disabled {
        color: @colorBasicGrayLight;

        &:hover {
            color: @colorBasicGrayLight;
        }
    }

    &--dark {
        color: @colorBasicGray;

        &:hover {
            color: @colorBasicGreenDark;
        }
    }

    &--light {
        color: @colorBasicWhite;

        &:hover {
            color: @colorBasicGreenDark;
        }
    }

    &--icon {
        width: 34px;
        height: 34px;
    }
}
/* END: Form Elements */
/* START: General Blocks Layout */
.wrapper {
    display: grid;
    grid-template-columns: minmax(320px, 1600px);
    justify-content: center;
}

.header {
    position: fixed;
    z-index: 997;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 34px 1fr 34px;
    grid-column-gap: 20px;
    padding: 20px;
    background: @grayVeryDark;
    border-bottom: 1px solid @grayDark;
}

.main {
    background: @grayVeryDark;
    padding: 80px;
    margin: 160px 0 0;
}

.footer {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    background: @grayVeryDark;
    border-top: 1px solid @grayDark;
    padding: 20px 80px;
    margin: 0 0 80px;
}

.components-list {
    display: grid;
    grid-row-gap: 80px;
}

.logo {
    display: inline-block;
    vertical-align: middle;

    &__inner {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
    }
}

.article-intro {
    color: @colorBasicGrayLight;

    &__item,
    &__title,
    &__content {
        display: inline;
    }

    &__item {
        margin: 0 10px 0 0;

        &:last-child {
            margin: 0;
        }
    }
}

.overlay {
    position: fixed;
    z-index: 998;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.8);
}
/* END: General Blocks Layout */
/* START: Help classes */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
}
/* END: Help classes */
/* START: Media Queries */
@media only screen and (max-width: @screenMiddle) {
    /* START: Typography */
    .content {

        &__item,
        & h1,
        & h2,
        & h3,
        p,
        ul,
        pre {
            margin: 0 0 30px 0;
        }
    }
    /* END: Typography */
    /* START: General Blocks Layout */
    .main {
        margin: 80px 0 0;
        padding: 60px;
    }

    .footer {
        margin: 0;
        padding: 20px 60px;
    }

    .components-list {
        grid-row-gap: 60px;
    }
    /* END: General Blocks Layout */
}

@media only screen and (max-width: @screenSmall) {
    /* START: General */
    body {
        font-size: 18px;
    }
    /* END: General */
    /* START: Typography */
    h1 {
        font-size: 42px;
        line-height: 56px;
    }

    h2 {
        font-size: 26px;
        line-height: 36px;
    }

    h3 {
        font-size: 20px;
        line-height: 28px;
    }

    .content {

        &__item,
        & h1,
        & h2,
        & h3,
        p,
        ul,
        pre {
            margin: 0 0 20px 0;
        }
    }
    /* END Typography */
    /* START: General Blocks Layout */
    .main {
        margin: 76px 0 0;
        padding: 40px;
    }

    .footer {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        padding: 20px 40px;
    }

    .components-list {
        grid-row-gap: 40px;
    }
    /* END: General Blocks Layout */
}

@media only screen and (max-width: @screenExtraSmall) {
    /* START: General Blocks Layout */
    .main {
        padding: 40px 20px;
    }

    .footer {
        padding: 20px;
    }
    /* END: General Blocks Layout */
}
/* END: Media Queries */
</style>
