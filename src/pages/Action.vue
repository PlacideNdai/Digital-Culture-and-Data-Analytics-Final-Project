<template>
    <div class="main-container">

        <div class="intro">
            <h1>Play some of the games from the projects!</h1>
        </div>

        <div class="game-container">

            <div @click="window.open('https://www.retrogames.me/arcade/after-burner.html')">
                <h3>After Burn</h3>
                <a href="https://www.retrogames.me/arcade/after-burner.html"> Play on Retrogames!</a>
            </div>


            <div @click="window.open('https://www.retrogames.me/arcade/big-run.html')">
                <h3>Big Run</h3>
                <a href="https://classicreload.com/play/big-run.html"> Play on Classic Reload!</a>
            </div>
            <div @click="window.open('https://retromania.gg/games/n64/1080deg-snowboarding')">
                <h3>Try 1080 Snowboarding here:</h3>
                <a href="https://retromania.gg/games/n64/1080deg-snowboarding">Play on Retromania!</a>

            </div>

            <div @click="window.open('https://www.retrogames.me/nds-games/need-for-speed-prostreet-usa-enfrdeesit.html')">
                <h3>Need for Speed: ProStreet</h3>
                <a href="https://www.retrogames.me/nds-games/need-for-speed-prostreet-usa-enfrdeesit.html" target="_blank">Play on Retrogames!</a>
            </div>


            <div @click="window.open('https://www.retrogamesonline.io/wwf-war-zone-usa')">
                <h3>Try WWF War Zone USA here:</h3>
                <a href="https://retrogamesonline.io/wwf-war-zone-usa ">Play on Retrogamesonline!</a>
            </div>


            <div @click="window.open('https://www.retrogamesonline.io/race-driver-grid-europe-enfrdeesit')">
                <h3>Try Race Driver Grid here:</h3>
                <a href="https://retrogamesonline.io/race-driver-grid-europe-enfrdeesit" target="_blank">Play on Retrogamesonline!</a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        width: 75%;
        margin: auto;
        gap: 1rem;
        background: transparent;
        backdrop-filter: blur(70px);
        padding: .5rem;
        border-radius: 10px;
        height: auto;
        color: white;
    }

    .game-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1rem;
    }

    .game-container div {
        background: transparent;
        backdrop-filter: blur(70px);
        padding: .5rem;
        border-radius: 10px;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    .game-container div:hover {
        background: white;
        color: black;
        cursor: pointer;
        scale: 1.001;
        transition: all .2s ease-in-out;
    }
</style>