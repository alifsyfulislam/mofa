<template>
    <div>
        <div class="mainbox">
            <div class="err">4</div>
            <i class="far fa-question-circle fa-spin"></i>
            <div class="err2">4</div>
            <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .mainbox {
        background-color: #ffffff;
        height: 100vh;
        width: 100%;
    }

    .err {
        color: #700f1e;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 20%;
        top: 30%;
    }

    .far {
        position: absolute;
        font-size: 8.5rem;
        left: 42%;
        top: 30%;
        color: #700f1e;
    }

    .err2 {
        color: #700f1e;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 68%;
        top: 30%;
    }

    .msg {
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.6rem;
        position:absolute;
        left: 16%;
        top: 55%;
        width: 75%;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
