<script setup>
import {defineProps} from 'vue'
defineProps({
    week: [String, Number],
    month: [String, Number],
    day: [String, Number],
    dayWeatherText: String,
    dayWeatherImg: String,
    high: String,
    low: String,
    nightWeatherImg: String,
    nightWeatherText: String,
    windType: String,
    windScale: String
});
</script>
<template>
    <div class="template">
        <div class="yesterday">{{ week }}</div>
        <div class="date">{{ month }} 月 {{ day }} 日</div>
        <div>{{ dayWeatherText }}</div>
        <div class="icon"><img :src="dayWeatherImg" alt=""></div>
        <div>{{ high }}°</div>
        <div>|</div>
        <div>{{ low }}°</div>
        <div class="icon"><img :src="nightWeatherImg" alt=""></div>
        <div>{{ nightWeatherText }}</div>
        <div class="wind">{{ windType }}{{ windScale }}级</div>
    </div>
</template>
<style>
.icon {
    width: 60px;
    height: 60px;
    padding: 3px;

}

.icon img {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.yesterday {
    font-size: 15px;
    line-height: 20px;
    height: 20px;
    margin-bottom: 10px;
}

.date {
    padding: 3px;
    color: #c2c2c2;
    font-size: 15px;
}

.wind {
    font-size: 15px;
    color: #c2c2c2;
    padding-top: 4px;
}
</style>