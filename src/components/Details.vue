<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "../store";

const route = useRoute();
const store = useStore();

const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`);
console.log(response.data);
</script>

<template>
    <div class="movie-detail">
        <h1 class="movie-title">{{ response.data.original_title }}</h1>
        <p class="movie-overview">{{ response.data.overview }}</p>
        <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
        <p class="movie-tagline"> {{ response.data.tagline }}</p>
        <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster"
            class="movie-poster" />
        <p class="movie-release-date">Original Language: {{ response.data.original_language }}</p>
        <h2 class="trailers-title">Trailers</h2>
        <div class="trailers-container">
            <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
                <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
                    <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
                        class="trailer-thumbnail" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movie-detail {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.movie-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(58, 101, 180);
    margin-bottom: 10px;
    text-align: center;
}

.movie-overview {
    font-size: 1.1rem;
    color: #fafafa;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: center;
}

.movie-release-date {
    font-size: 1.2rem;
    color: #f8f8f8;
    margin-bottom: 20px;
    text-align: center;
}

.movie-tagline {
    display: block;
    font-style: italic;
    font-size: 1.1rem;
    color: rgb(117, 133, 162);
    text-align: center;
    margin-bottom: 20px;
    text-decoration: none;
}

.cart {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: aliceblue;
    background-color: rgb(58, 101, 180);
    border: 2px solid rgb(85, 129, 211);
    border-radius: 8px;
    margin: 25px 347px 0px;
    width: 505px;
    height: 35px;
}

.movie-site {
    display: block;
    font-size: 1.1rem;
    color: rgb(58, 101, 180);
    text-align: center;
    margin-bottom: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.movie-site:hover {
    color: #333;
}

.movie-poster {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.movie-poster:hover {
    transform: scale(1.05);
}

.trailers-title {
    font-size: 2rem;
    font-weight: bold;
    color: rgb(58, 101, 180);
    margin-bottom: 20px;
    text-align: center;
}

.trailers-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.trailer-tile {
    width: 250px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.trailer-thumbnail {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.trailer-tile:hover .trailer-thumbnail {
    transform: scale(1.05);
}
</style>
