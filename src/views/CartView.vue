<script setup>
import Header from '../components/Header.vue';
import { useStore } from '../store';
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const message = ref(false);
const store = useStore();

const removeCart = (key) => {
  store.cart.delete(key)
  localStorage.setItem(`cart_${store.user.email}`, JSON.stringify(Object.fromEntries(store.cart)));
}
const checkout = () => {
    store.cart = null;
    localStorage.clear();
    message.value = true;
    onBeforeRouteLeave(() => {
        showMessage.value = false;
    });
}
</script>

<template>
    <Header />
    <div class="cart">
        <h1>Shopping Cart</h1>
        <div class="item" v-for="([key, value]) in store.cart">
            <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
            <h1>{{ value.title }}</h1>
            <button @click="removeCart(key)">Remove</button>
        </div>
        <button @click="checkout">Checkout</button>
        <div class="message" v-if="message">Thank you for your purchase!</div>
    </div>

</template>

<style scoped>
h1 {
    color: rgb(85, 129, 211);
    text-align: center;
    align-items: center;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: aliceblue;
    background-color: rgb(58, 101, 180);
    border: 2px solid rgb(85, 129, 211);
    border-radius: 8px;
    margin-top: 25px;
    margin-right: 10px;
    width: 105px;
    height: 35px;
}

.cart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vw;
}

.item {
    display: flex;
    align-items: center;
    gap: 2rem;
}

img {
    margin-left: 10px;
    width: 10%;
    border-radius: 5%;
}

.message {
    color: rgb(85, 129, 211);
    text-align: center;
    align-items: center;
    font-size: 70px;
}
</style>