<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const router = useRouter();
const password = ref('');

const handleLogin = () => {
    if (password.value === "hi") {
        router.push("/movies");
    } else {
        alert("Invalid Password");
    }
};
</script>

<template>
    <Header />
    <div class="login-container">
        <h1 class="words">Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
            <input type="email" placeholder="Email" class="input-field" required />
            <input v-model="password" type="password" placeholder="Password" class="input-field" required />
            <button type="submit" class="button">Login</button>
        </form>
        <Footer />
    </div>
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
</style>