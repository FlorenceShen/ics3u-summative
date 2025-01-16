<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const response = ref(null);

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
    shuffle(response.value.data.results)
});
</script>

<template>
    <div class=featured-container v-if="response">
        <h3 class="words">Featured Movies</h3>
        <div class="movie-list">
            <div v-for="movie in response.data.results.slice(0, 4)" :key="movie.id" class="movie-card"
                @click="getMovieDetails(movie.id)">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
                    class="movie-poster" />

                <p class="movie-title">{{ movie.title }}</p>
            </div>
            <div class="movie-card">
                <img class="movie-poster" src="/src/assets/terminionApocalypseMoviePoster.jpg"
                    alt="Terminion Apocalypse Movie Poster" />
                <p class="movie-title">Terminion Apocalypse</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.words {
    color: rgb(58, 101, 180);
    font-family: 'Oxygen';
    font-size: 30px;
}

.featured-container {
    font-family: 'Oxygen';
    background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
    padding: 20px;
    padding: 20px;
    margin-top: 60px;
}

.movie-list {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;
    margin-top: 20px;
}

.movie-card {
    width: 210px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(225, 208, 208, 0.4);
    cursor:pointer;
}

.movie-poster {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 8px;
}

.movie-title {
    margin-top: 10px;
    font-size: 16px;
    color: rgb(58, 101, 180);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.movie-title:hover {
    color: #a36f89;
}

.box {
    width: 100%;
    height: 430px;
    background: rgb(2, 0, 36);
    top: 20px;
    border-width: 10px;
}

.moviePosters {
    float: left;
    padding-left: 70px;
    padding-top: 50px;
}
</style>