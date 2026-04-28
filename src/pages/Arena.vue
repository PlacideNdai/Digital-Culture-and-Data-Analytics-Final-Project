<template>
    <div class="arena-content">
        <div class="title">
            <h1>Arena</h1>
        </div>

        <div class="content">
            <p>
                Forza has many arenas. The world itself is an arena, the mini-games inside are their own arena, and the
                garage and mechanic shops are also arenas. For this project, the focus will be on the track or
                battlefield where cars fight until one comes out victorious. Forza has many mini-games, and one of them
                is about tagging the other players out. The concept is easy: one team tags the other, the player, while
                they run away. Once tagged, the tagged member joins the tagging team. This idea is from a wrestling game
                called WWF War Zone USA. In WWF, you choose how many players to play, then they fight in teams until
                there is one winner. Now, that’s what happens in that arena.
            </p>


            <p>
                Zooming out for a big view and connection to the theme. When racing or speeding down in Forza and
                everything is chaotic, that’s the arena you’re facing. The goal is not trying to get out defeated;
                You’re to drift your way to victory, even if that means getting to point B.

            </p>
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
const videoID = "t1_ixHCAQis"
</script>

<style scoped>
.arena-content {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
    gap: 1rem;
    background: transparent;
    padding: .5rem;
    border-radius: 10px;
    height: auto;
    backdrop-filter: blur(70px);
    color: white;
}

.content p{
    padding: 1rem;
}

.content a {
    color: white;
    font-size: x-large;
    text-align: center;
    display: block;
}

.video {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>