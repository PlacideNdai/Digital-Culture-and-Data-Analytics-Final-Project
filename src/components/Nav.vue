<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/mechanics">Mechanics</router-link>
        <router-link to="/Arena">Arena</router-link>
        <router-link to="/breakdown">Breakdown</router-link>
        <router-link to="/openworld">Open World</router-link>

    </nav>
</template>

<script setup>

</script>

<style  scoped>
    nav {
        display: flex;
        flex-direction: column;
        height: 100vh;
        backdrop-filter: blur(10px);
        border-right: white solid 5px;
    }

    nav a {
        padding: 1rem;
        text-decoration: none;
        color: var(--nav-text-color);
        font-size: 1.5rem;
        font-weight: bold;
    }

    nav a:hover {
        background-color: var(--hover-nav-background);
        border-radius: 5px;
    }

    /* styling active link */
    nav a.router-link-active {
        background-color: white;
        color: black;
    }

</style>