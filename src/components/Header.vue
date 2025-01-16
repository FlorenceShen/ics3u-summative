<script setup>
import { useRouter} from 'vue-router';
import { useStore } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';


const store = useStore();
const router = useRouter();

const firstName = ref(store.user?.displayName.split(' ')[0]);

if (store.user !== null) {
const displayName = store.user.displayName;
console.log(displayName)
}

const logout = () => {
  store.user = null;
  signOut(auth);
  router.push(`/`);
}
</script>

<template>
  <div class="container">
    <h1 class="words">Flowflix</h1>
    <img class="logo" src="/src/assets/image-removebg-preview.png" alt="Flowflix logo" />
  </div>
  <div class="hello words" v-if="store.user">{{ `Hello ${firstName}!` }}</div>
  <div class="button-container">
    <RouterLink v-if="!store.user" to="/register" class="button register">Register</RouterLink>
    <RouterLink v-if="!store.user" to="/login" class="button login">Login</RouterLink>
    <RouterLink v-if="store.user" to="/movies" class="long-button">Browse Movies</RouterLink>
    <RouterLink v-if="store.user" to="/cart" class="button">Cart</RouterLink>
    <RouterLink v-if="store.user" to="/settings" class="button">Settings</RouterLink>
    <button v-if="store.user" class="button" @click="logout">Logout</button>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
}

.container {
  margin-top: 7px;
  margin-left: 4px;
  display: flex;
  align-items: left;
  text-align: left;
}

.hello {
  margin-left: 4px;
}

.words {
  color: rgb(58, 101, 180);
  font-size: 36px;
  margin-bottom: 15px;
}

.logo {
  float: left;
  width: 70px;
  height: 50px;
}

.logo:hover {
  transform: scale(1.1);
}

h1 {
  margin: 0;
  padding: 0;
}

.button-container {
  position: absolute;
  top: 1px;
  right: 1px;
  display: flex;
  gap: 5px;
}

button:hover {
  cursor: pointer;
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
  height: 35px;
  width: 200px;
}
</style>