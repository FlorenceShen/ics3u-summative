<script setup>
import Header from '../components/Header.vue';
import { useStore } from '../store';
import { updateProfile, updatePassword } from 'firebase/auth';
import { auth } from "../firebase";
import { ref, onMounted } from 'vue';

const store = useStore();
console.log(store);

const firstName = ref(store.user?.displayName.split(' ')[0]);
const lastName = ref(store.user?.displayName.split(' ')[1]);
const user = auth.currentUser;
const newPassword = ref('');
const loginGoogle = ref(false);

onMounted(async () => {
    if (user?.providerData.some(provider => provider.providerId === 'google.com')) {
        loginGoogle.value = true;
    } else {
        loginGoogle.value = false;
    }
});

const saveChanges = async () => {
    const loginEmail = user?.providerData.some(provider => provider.providerId === 'password');
    if (!loginEmail) {
        alert("You have to sign in via email to save changes!");
        return;
    } try {
        await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
        store.user = user;
        if (newPassword.value) {
            await updatePassword(user, newPassword.value);
            alert("profile updated successfully!")
        }
    } catch (error) {
        alert("There was an error saving changes!");
    }
};
</script>

<template>
    <Header />
    <h1 class="title">Settings</h1>
    <div class="info">
        <div class="form-group">
            <div class="info-label">First Name: </div>
            <input id="firstName" type="text" v-model="firstName" class="form-input" :disabled="loginGoogle" />
            <div class="info-label">Last Name: </div>
            <input id="lastName" type="text" v-model="lastName" class="form-input" :disabled="loginGoogle" />
            <div class="info-label">Email: </div>
            <input id="email" type="text" :value="store.user.email" class="form-input" readonly />
            <div class="info-label">Change Password:</div>
            <input id="password" type="password" v-model="newPassword" class="form-input" :disabled="loginGoogle" />
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