<script setup></script>

<template>
  <h2 class="words"> Binge the latest movies and shows starting at only $4.99 a month </h2>
  <p class="words"> Save over 15% on your Premium or Standard plan with an annual subscription.*</p>
  <br>
  <button class="browse" type="button">Browse Movies</button>
  <br>
</template>

<style scoped>
body {
    background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
    margin: 0px;
}

.words {
    color: rgb(58, 101, 180);
}

button:hover {
    cursor: pointer;
}

button {
    font-size: 18px;
    font-weight: bold;
    color: aliceblue;
    background-color: rgb(58, 101, 180);
    border: 2px solid rgb(85, 129, 211);
    border-radius: 8px;
    margin: 25px 10px 30px;
    width: 105px;
    height: 35px;
    float: right;
}

h2:hover {
    transform: scale(1.1);
}

h2 {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    margin: 200px 50px 10px;
    transition: transform 1s;
}

p {
    text-align: center;
}

.browse:hover {
    box-shadow: 0 12px 16px 0 rgba(199, 192, 192, 0.24), 0 17px 50px 0 rgba(158, 142, 142, 0.19);
    cursor: pointer;
    opacity: 1;
}

.browse {
    height: 50px;
    width: 250px;
    color: white;
    font-size: 30px;
    font-weight: 100;
    background-color: rgb(58, 101, 180);
    border-radius: 8px;
    border: 2px solid rgb(85, 129, 211);
    margin-right: 40%;
    margin-bottom: 50px;
    opacity: 0.8;
}
</style>
