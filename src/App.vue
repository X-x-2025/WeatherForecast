<script setup>
import Advise from './components/Advise.vue';
import Center from './components/Center.vue';
import LinearStatistic from './components/LinearStatistic.vue';
import Navigation from './components/Navigation.vue';
import SlideShow from './components/SlideShow.vue';
import Chart from './components/chart.vue';


</script>
<template>
    <Navigation></Navigation>
    <!-- <hr> -->
    <Center></Center>
    <SlideShow></SlideShow>
    <LinearStatistic></LinearStatistic>
    <Advise></Advise>
    <chart></chart>

</template>
<style>
* {
    background-color: transparent;
    color: black;
    font-family: "PingFang SC", "Microsoft YaHei", Simsun, Helvetica, Arial, sans-serif;
}

body {
    background: #f6f9fe url('./img/weatherimg/1630660726331.jpg') no-repeat center top;
}

#app {

    background: transparent;

}
</style>