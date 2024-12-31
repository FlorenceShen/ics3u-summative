<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useStore } from "../store"

const router = useRouter();
const store = useStore();
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const password = ref('');
const password2 = ref('');

async function registerByEmail() {
    if (password.value !== password2.value) {
        alert("Passwords do not match");
        return;    
    } 
    try {
        const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
        await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
        store.user = user;
        router.push("/movies");
        
    } catch (error) {
        alert("There was an error creating a user with email!");
    }
}

async function registerByGoogle() {
    try {
        const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
        store.user = user;
        router.push("/movies");
    } catch (error) {
        alert("There was an error creating a user with Google!");
    }
}
</script>

<template>
    <Header />
    <div class="register-container">
        <h1 class="register-title">Register</h1>

        <form @submit.prevent="registerByEmail" class="register-form">
            <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required />
            <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required />
            <input v-model="email" type="email" placeholder="Email" class="input-field" required />
            <input v-model="password" type="password" placeholder="Password" class="input-field" required />
            <input v-model="password2" type="password" placeholder="Re-enter Password" class="input-field" required />
            <button type="submit" class="button register">Register</button>
        </form>
        <button @click="registerByGoogle()" class="long-button">Register by Google</button>
    </div>
    <Footer />
</template>

<style scoped>
.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    text-align: center;
}

.register-title {
    font-size: 3rem;
    color: rgb(58, 101, 180);
    font-weight: bold;
    margin-bottom: 30px;
}

.register-form {
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

.long-button {
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
    width: 440px;
    height: 35px;
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