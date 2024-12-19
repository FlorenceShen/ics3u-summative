<script setup>
import Header from '../components/Header.vue';
import Genres from '../components/Genres.vue';
import Footer from '../components/Footer.vue';

const genresList = [
  { genreName: "Action", id: 28 },
  { genreName: "Comedy", id: 35 },
  { genreName: "Mystery", id: 9648 },
  { genreName: "Horror", id: 27 },
  { genreName: "Family", id: 10751 },
]
</script>

<template>
  <Header />
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped></style>