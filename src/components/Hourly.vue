<script setup>
// 作用是展示数据
import {  defineProps } from 'vue'
defineProps({
    time: String,
    weatherImg: String,
    temperature: String
});


</script>
<template>
    <div class="everyhour">
        <div class="time">{{ time }}</div>
        <div class="icon"><img :src="weatherImg" alt=""></div>
        <div class="temp">{{ temperature }}°</div>
    </div>
</template>
<style scoped>
.everyhour {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    max-width: 60px;
    min-width: 60px;
    margin: 12px 12px;
    margin-bottom: 5px;
}

.time {
    color: #8a9baf;
    font-size: 14px;
    margin: 5px 5px;
}

.icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 5px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

}
.hour-item .icon img {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.hour-item .temp {
    font-size: 18px;
    color: #384c78;
    font-weight: 500;
}


</style>