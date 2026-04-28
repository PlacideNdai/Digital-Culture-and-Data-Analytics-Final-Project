<template>
    <div class="breakdown-container">
        <div class="title">
            <h1>Breakdown</h1>
        </div>

        <div class="content">
            <p>
                Forza has this feature that’s off by default, but when active, you gain more points. It’s my favorite,
                but I’d hate it sometimes if I am trying to win. The feature simulates a real-world breakdown of a car
                when you’re driving it aggressively. Meaning when you’re hitting objects as you race, your car will
                break down, and in turn, the car slows down, and if continued, the car will stop completely. It turns
                out that this isn’t new. Race Driver Grid, a racing game where the player can race in different
                continents, has it, and the game is from 2008. As you drive and hit the walls, the car breaks down, and
                eventually it explodes. Race Driver Grid is a little tough on this compared to Forza.
            </p>

            <p>
                There isn’t perfection in anything, that’s intentional by design if you ask me. So, when drifting in and
                out, it’s okay to tap and break down; what matters is when you get up and continue the journey started.
                Setbacks and obstacles make us stronger; therefore, don’t run from them.
            </p>

            <h3>Try Race Driver Grid here:</h3>
            <a href="https://retrogamesonline.io/race-driver-grid-europe-enfrdeesit"> Play on Retrogamesonline!</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.breakdown-container {
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

.content p{
    padding: 1rem;
}

.content a {
    color: white;
    font-size: x-large;
    text-align: center;
    display: block;
}
</style>