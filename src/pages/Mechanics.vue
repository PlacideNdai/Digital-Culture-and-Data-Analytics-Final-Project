<template>
    <div class="mec-container">
        <div class="mec-details">
            <div class="title">
                <h1>Mechanics</h1>
            </div>
            <div class="details"></div>
        </div>


        <div class="tiremark-details">
            <div class="title">
                <h1>Tire Marks</h1>
            </div>
            <div class="details">

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.mec-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
    gap: 1rem;
}

.mec-container > div {
    height: 35vh;
    background: white;
    width: 100%;
    border-radius: 10px;
    padding: .5rem;
}
</style>