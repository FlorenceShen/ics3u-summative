<script setup></script>

<template>
    <br>
    <div class="footer">
        <div class="left">
            <div class="words padding"> <br> Florence Shen </div>
            <div class="words padding"> florence.shen@student.tdsb.on.ca</div>
            <a href="https://github.com/FlorenceShen/website-assignment.git" class="words link padding">Git
                Repository</a>
        </div>

        <div class="center">
            <div class="brand">
                <div class="words"><br> FlowFlix </div>
                <img class="logo2" src="/src/assets/image-removebg-preview.png" alt="flowflixLogo">
            </div>
            <div class="words fakeLink padding">Privacy Policy</div>
            <div class="words fakeLink padding">Terms & Conditions</div>
        </div>

        <div class="right">
            <div class="words padding"><br>Contact us:</div>
            <div class="words padding">flowflixstreaming@gmail.com</div>
            <a href="https://www.instagram.com/" class=" words link padding">Instagram</a>
            <a href="https://ca.linkedin.com/" class="words link padding">Linkedin</a>
            <a href="https://x.com/?lang=en" class="words link padding">X</a>
        </div>
        <br>
    </div>
</template>

<style scoped>
body {
    margin: 0px;
    background: rgb(9, 9, 121);
    background: radial-gradient(circle, rgb(17, 17, 154) 35%, rgb(12, 10, 54) 100%, rgb(0, 0, 0) 100%);
}

.words {
    color: rgb(58, 101, 180);
}

.footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 210px;
    background-color: rgb(2, 0, 36);
}

.left {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;

}

.link:link {
    color: rgb(85, 129, 211);
    text-decoration: none;
    
}

.link:visited {
    color: rgb(51, 29, 133);
    text-decoration: none;
}

.link:hover {
    color: rgb(154, 64, 172);
    cursor: pointer;
    text-decoration: underline;
}

.center {
    flex: 1;
    display: flex;
    flex-direction: column;

}

.logo2 {
    height: 30px;
    width: 40px;
    margin-top: 16px;
}

.brand {
    display: flex;
    margin-bottom: 5px;
}

.fakeLink:hover {
    color: rgb(154, 64, 172);
    text-decoration: underline;
    cursor: pointer;
}

.fakeLink {
    color: rgb(85, 129, 211);
}

.padding {
    padding-bottom: 9px;
}
</style>
