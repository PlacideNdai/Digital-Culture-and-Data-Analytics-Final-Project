<template>
    <div class="openworld-container">
        <div class="title">
            <h1>Music</h1>
        </div>

        <div class="content">
            <p>
                I am picky about what music I listen to, I do not just listen to random songs because I find that to be
                meaningless for me. I discover most of my music from games that I play and Forza is really good with
                that. It has different radios that plays music. Forza was build around festivals, cars, and music.
                Thinking of music, I think Forza music was influenced by Rock Band 2. Rock Band 2 is a game with a
                guitar where the player plays notes that shows on the screen. Though in Forza you don’t get to play with
                music like in Rock Band 2, the music culture and good music with commentary was inspired by Rock Band 2.
            </p>

            <p>
                Isn’t it awesome and interesting that every culture has music? They have music for each event or
                emission: sad, joy, happy, grieve, etc. With that, every chaos has a song to it. If you were to make or
                choose a song for bringing order out of chaos, what would it be?
            </p>

            <h3>This would be the song I could choose: CHOP SUEY!</h3>

        </div>

        <div class="video">
            <iframe width="560" height="315"
                :src="`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoID}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
const videoID = "vLjkzaCvBSA"
</script>

<style scoped>
.openworld-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
    gap: 1rem;
    background: transparent;
    backdrop-filter: blur(70px);
    padding: .5rem;
    border-radius: 10px;
    height: fit-content;
    color:white;
}

.content p {
    padding: 1rem;
}

.video {
    display: flex;
    justify-content: center;
    align-items: center;
}

iframe {
    border-radius: 10px;
padding-inline: 1rem;
}

@media screen and (max-width: 1000px) {
    .openworld-container {
        width: 90%;
    }

    iframe {
        width: 100%;
        height: auto;
    }
}

</style>