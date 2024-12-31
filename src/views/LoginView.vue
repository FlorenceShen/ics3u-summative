<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import { useStore } from "../store";

const store = useStore();
const router = useRouter();
const password = ref('');
const email = ref('');

const loginByEmail = async () => {
    try {
        const user = (await signInWithEmailAndPassword(auth, email.value, password.value)).user;
        store.user = user;
        router.push("/movies");
    } catch (error) {
        console.log(error);
        alert("There was an error logging in with email!");
    }
};

const loginByGoogle = async () => {
    try {
        const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
        store.user = user;
        router.push("/movies");
    } catch (error) {
        alert("There was an error signing in with Google!");
    }
};
</script>

<template>
    <Header />
    <div class="login-container">
        <h1 class="words">Login</h1>
        <form @submit.prevent="loginByEmail" class="login-form">
            <input v-model="email" type="email" placeholder="Email" class="input-field" required />
            <input v-model="password" type="password" placeholder="Password" class="input-field" required />
            <button type="submit" class="button">Login</button>
        </form>
        <button @click="loginByGoogle()" type="submit" class="long-button">Login by Google</button>
    </div>
    <Footer />
</template>

<style scoped>
body {
    background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    text-align: center;
}

.words {
    font-size: 3rem;
    color: rgb(58, 101, 180);
    font-weight: bold;
    margin-bottom: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(85, 129, 211);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.input-field {
    width: 95%;
    padding: 12px;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: border 0.3s ease;
}

.input-field:focus {
    border-color: rgb(58, 101, 180);
}

.button {
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
    margin-top: 25px;
    margin-right: 10px;
    width: 105px;
    height: 35px;
}

.button:hover {
    background-color: #4768b5;
    cursor: pointer;
}

.long-button{
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
    margin-top: 25px;
    margin-right: 10px;
    width: 300px;
    height: 35px;
}
</style>