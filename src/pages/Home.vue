<template>
    <div class="home-info">
        <!-- info section -->
        <div class="info">
            <h1>Bringing Order Out of Chaos</h1> <br>
            <h4>Digital Culture and Data Analytics</h4> <br> <br>


            <p>For the semester-long project I choose to do Forza Horizon 5 because it’s one of my favorite games
                currently (2026). The goal is to learn about the game and what might have influenced it, drawing on
                older games from the 1900s to today. </p> <br>
            <p>Components that I choose to focus on are mechanics, arena, breakdown, and open world.
                In the mechanic, I choose to focus on drifting and tire marks. For the arena, the discussion will be on
                the beautiful, the good, and the ugly, meaning, the arena section will talk more on modes that happen,
                where the players win, lose, and draw (sometimes).
            </p> <br>
            <p>Finally, in each section I will attempt to connect it to the theme which is BRINGING ORDER OUT OF CHAOS
                THROUGH DRIFTING.</p>
        </div>

        <!-- video -->


        <div class="video-container">
            <iframe width="560" height="315"
                :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>


<script setup>
const videoId = 'Ag5QC3NFP3Y';
</script>

<style scoped>
.home-info {
    display: flex;
    font-size: large;
    align-items: center;
    padding: 20px;
    backdrop-filter: blur(20px);
    color: var(--nav-text-color);
    justify-content: center;
    margin:auto;
    width: 75%;
}

.info {
    width: 40vw;
    /* background: white;
    color: black; */
    padding: .5rem;
    border-radius: 10px;
}

.video-container {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 1000px) {
    .home-info {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }

    .info {
        width: 65vw;
    }
}
</style>