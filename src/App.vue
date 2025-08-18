<script setup>
import Advise from './components/Advise.vue';
import Center from './components/Center.vue';
import LinearStatistic from './components/LinearStatistic.vue';
import Navigation from './components/Navigation.vue';
import SlideShow from './components/SlideShow.vue';





</script>
<template>
    <Navigation style="background-color: rgb(241, 245, 252);"></Navigation>
    <Center></Center>
    <SlideShow></SlideShow>
    <LinearStatistic></LinearStatistic>
    <Advise></Advise>
</template>
<style>
*{ 
    background-color:rgb(241, 245, 252); 
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white ); */
    color: black; 
}
body {
    z-index: 10000;
    background: linear-gradient(to bottom right,rgb(101,184,250),white);
    /* min-height: 100vh; */
    /* background-color:rgb(241, 245, 252);  */
}
/* #app{
    z-index: 10000;
    background: linear-gradient(to bottom right,rgb(101,184,250),white);
    min-height: 100vh; 
    overflow: hidden;
} */
</style>