<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from '../store';

const props = defineProps(["genres"]);
const store = useStore();
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);

const addToCart = (movie) => {
  store.cart.set(String(movie.id), { title: movie.original_title, url: movie.poster_path })
  localStorage.setItem(`cart_${store.user.email}`, JSON.stringify(Object.fromEntries(store.cart)));
}


async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
})
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre" class="dropdown-box">
      <option v-for="genre of genres" :value="genre.id" :key="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster"
          @click="getMovieDetails(movie.id)" />
        <p class="movie-title">{{ movie.title }}</p>
        <button @click="addToCart(movie)">{{
          store.cart.has(String(movie.id)) ? "Added" : "Buy" }}</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.movie-gallery {
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
  align-items: center;
  margin-top: 20px;
}

.dropdown-box {
  background-color: rgb(58, 101, 180);
  color: rgb(254, 254, 254);
  border: 2px solid rgb(58, 101, 180);
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.genre-dropdown:hover {
  background-color: rgb(151, 119, 171);
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie-card {
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.movie-title {
  font-size: 16px;
  font-weight: bold;
  color: rgb(58, 101, 180);
  margin-top: 10px;
  padding: 10px;
}

.movie-card:hover .movie-title {
  color: #a36f89;
}

button {
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: aliceblue;
  background-color: rgb(58, 101, 180);
  border: 2px solid rgb(85, 129, 211);
  border-radius: 8px;
  margin: 25px 10px 5px;
  width: 105px;
  height: 35px;
}
</style>