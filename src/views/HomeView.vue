<script setup>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import Feature from '../components/Feature.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header />
    <Hero />
    <Feature />
    <Footer />
</template>

<style>
body {
    margin: 0;
    font-family: 'Oxygen';
    background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
}
</style>
