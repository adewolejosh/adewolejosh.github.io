<template>
    <nav>
        <div>
            <nuxt-link class="navbar-items" to="/">
                <img class="navbar-brand logo" src="@/static/images/dark-logo.png" alt="aj-logo">
            </nuxt-link>
            <nuxt-link class="navbar-items" to="/projects">Projects</nuxt-link>
            <nuxt-link class="navbar-items" to="/blog">Writings</nuxt-link>
            <a 
            class="navbar-items"
            href="https://docs.google.com/document/d/1DbnWrXYd13spsEVQ9QHWvNWsPD2Vu5eg/edit?usp=sharing&ouid=115828739539076750598&rtpof=true&sd=true"
            target="_blank"
            >
                Resume
            </a>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>

nav {
    margin-top: 5%;
    margin-left: 1%;
    margin-right: 5%;
    position: relative;
}

.navbar-brand {
    align-content: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
}

.navbar-items {
    padding: 20px;
    margin-left: 5px;
    margin-right: 5px;
    font-family: Libre Franklin;
    position: relative;
    text-align: center;
    align-content: center;
    justify-content: center;
}

nav a {
    color: black;
    text-decoration: none;
}

nav a.nuxt-link-exact-active {
    color: #42b983;
}

.logo {
    max-height: 50px;
    max-width: 50px;
    position: relative;
    align-content: center;
    justify-content: center;
    vertical-align: middle;
    pointer-events: none;
}

</style>
