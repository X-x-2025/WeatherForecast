<script setup>
import Advise from './components/Advise.vue';
import Center from './components/Center.vue';
import LinearStatistic from './components/LinearStatistic.vue';
import Navigation from './components/Navigation.vue';
import SlideShow from './components/SlideShow.vue';

</script>
<template>
    <Navigation></Navigation>
    <Center></Center>
    <SlideShow></SlideShow>
    <LinearStatistic></LinearStatistic>
    <Advise></Advise>
</template>
<style>
* {
    /* background-color:rgb(241, 245, 252);  */
    background-color: transparent;
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white ); */
    color: black;
    font-family: "PingFang SC", "Microsoft YaHei", Simsun, Helvetica, Arial, sans-serif;
}

body {
    /* z-index: 10000; */
    /* background: linear-gradient(to bottom right, rgb(101, 184, 250), white); */
    /* background: linear-gradient(to bottom right, rgb(101, 184, 250), white); */
    /* min-height: 100vh; */
    /* background-color:rgb(241, 245, 252);  */
    /* background-image: url('./img/weatherimg/生成特定图片.png'); */
    /* background-size: cover; */
    /* background-size: 100% 100%; */
    /* background-repeat: no-repeat; */
    background: #f6f9fe url('./img/weatherimg/1630660726331.jpg') no-repeat center top;
}

#app {
    /* z-index: 10000; */
    background: transparent;
    /* min-height: 100vh;  */
    /* overflow: hidden; */
    


    
}
</style>