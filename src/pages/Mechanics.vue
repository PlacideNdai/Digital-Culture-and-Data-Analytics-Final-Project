<template>
    <div class="mec-container">
        <div class="mec-details">
            <div class="title">
                <h1>Drifting Mechanics</h1>
            </div>
            <div class="details">
                <p>
                    Many games from the 1900s implemented the drifting feature, and if you play them in order, over
                    time, you will see the gradual change and updates, and those include: getting smoother, leaving tire
                    marks, and the physics becoming more concrete and realistic. It’s awesome to see the changes, but
                    have you ever asked yourself where the concepts of drifting came from?
                </p>
                <br>

                <p>
                    I know! Drifting was borrowed from snowboarding, specifically, for many driving and racing games;
                    they borrowed the feature from 1080 Snowboarding, a game from 1998! The game is simple, well… not
                    really, but all you have to do is snowboard and win. When snowboarding, you drift by nature, and
                    from past games to now, it’s something that games borrowed. I may also argue that even in real life
                    today, the concerts were borrowed from snowboarding.
                </p>


                <p>Life is hard, everyone knows that, it doesn’t matter what status you are (working, middle, top class,
                    etc). When something is hard, it’s chaos, whether it’s school work keeping you awake longer than it
                    should, or learning an instrument and you can’t get the chord right, and so on. In those situations,
                    we drift to make things work, i.e. staying up late, that’s stretching or controlled force, which is
                    drifting. Drifting is a way for us to get out of chaos and bring order. In the game, you’re drifting
                    to not hit other objects as you fly by at 180 miles per hour in a 45 miles per hour zone. Don’t run
                    from drifting, play with it!</p>
            </div>
        </div>


        <div class="video">
            <iframe width="560" height="315"
                :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
const videoId = 'C86aZqLJGKY';
</script>

<style scoped>
.mec-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
    gap: 1rem;
    /* background-image: url("../assets/snowboading_image.png"); */
    background-size: auto;
    background-position: center;
}

.mec-container>div {
    height: fit-content;
    background: transparent;
    backdrop-filter: blur(70px);
    color: white;
    width: 100%;
    border-radius: 10px;
    padding: .5rem;
    margin: auto;
}

.mec-container p {
    width: 90%;
    padding: 1rem;
}

.video {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>