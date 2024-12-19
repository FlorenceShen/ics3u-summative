<script setup>
import Header from '../components/Header.vue';
import { useStore } from '../store';

const store = useStore();
console.log(store);

const saveChanges = () => {
    store.firstName = firstName.value;
    store.lastName = lastName.value;
}
</script>

<template>
    <Header />
    <h1 class="title">Settings</h1>
    <div class="info">
        <div class="form-group">
            <div class="info-label">First Name: </div>
            <input id="firstName" type="text" :value="store.firstName" class="form-input" />
            <div class="info-label">Last Name: </div>
            <input id="lastName" type="text" :value="store.lastName" class="form-input" />
            <div class="info-label">Email: </div>
            <input id="email" type="text" :value="store.email" class="form-input" readonly />
            <button @click="saveChanges">Save Changes</button>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-weight: bold;
    color: rgb(85, 129, 211);
    text-align: center;
}

button {
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: aliceblue;
    background-color: rgb(58, 101, 180);
    border: 2px solid rgb(113, 146, 207);
    border-radius: 8px;
    margin-top: 25px;
    margin-right: 10px;
    width: 250px;
    height: 35px;
}

.info {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: rgb(85, 129, 211);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #f0f0f0;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

.info-label {
    font-size: 1rem;
    color: #f0f0f0;
    margin-bottom: 0.5rem;
}

.form-input {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: aliceblue;
    color: #000000;
    width: 100%;
    box-sizing: border-box;
}

.form-input:focus {
    border-color: #007bff;
    outline: none;
}
</style>