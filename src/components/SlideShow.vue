<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useCounterStore } from '../stores/counter';
import { watch } from 'vue';
import Hourly from './Hourly.vue';

const user = useCounterStore();
const weatherimgarr = ref([]);
const temperaturearr = ref([]);
async function getData() {
    weatherimgarr.value = [];
    temperaturearr.value = [];
    await axios({
        url: `https://api.seniverse.com/v3/weather/hourly.json?key=SZ17KOUjoHofDseq4&location=${user.city}&language=zh-Hans&unit=c&start=0&hours=24`,
        method: 'GET',
    })
        .then((res) => {
            // console.log(res.data);
            for (let i = 0; i <= 23; i++) {
                // 处理图片
                const weatherimgmap = {
                    0: "0@1x.png",
                    1: "1@1x.png",
                    2: "2@1x.png",
                    3: "3@1x.png",
                    4: "4@1x.png",
                    5: "5@1x.png",
                    6: "6@1x.png",
                    7: "7@1x.png",
                    8: "8@1x.png",
                    9: "9@1x.png",
                    10: "10@1x.png",
                    11: "11@1x.png",
                    12: "12@1x.png",
                    13: "13@1x.png",
                    14: "14@1x.png",
                    15: "15@1x.png",
                    16: "16@1x.png",
                    17: "17@1x.png",
                    18: "18@1x.png",
                    19: "19@1x.png",
                    20: "20@1x.png",
                    21: "21@1x.png",
                    22: "22@1x.png",
                    23: "23@1x.png",
                    24: "24@1x.png",
                    25: "25@1x.png",
                    26: "26@1x.png",
                    27: "27@1x.png",
                    28: "28@1x.png",
                    29: "29@1x.png",
                    30: "30@1x.png",
                    31: "31@1x.png",
                    32: "32@1x.png",
                    33: "33@1x.png",
                    34: "34@1x.png",
                    35: "35@1x.png",
                    36: "36@1x.png",
                    37: "37@1x.png",
                    38: "38@1x.png",
                    39: "39@1x.png",
                };
                const weatherimg = weatherimgmap[res.data.results[0].hourly[i].code];
                // console.log(res.data.results[0].hourly[0].code);
                weatherimgarr.value.push(weatherimg);
                temperaturearr.value.push(res.data.results[0].hourly[i].temperature);
            }
            // console.log(temperaturearr);
        })
        .catch((err) => {
            console.log(err);
        });
}
getData();
watch(() => user.city, () => {
    // console.log('城市已改变为', user.city);
    getData();
});
// watch(() => user.city, () => {
//     // console.log('城市已改变为', user.city);
//     getDate();
// });
// console.log(user.city);

// 按钮操作
const container = ref(null);
// 左按钮
const slideleft = () => {
    container.value.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: container.value.scrollLeft - 330,
    });
};
// 右按钮
const slideright = () => {
    container.value.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: container.value.scrollLeft + 330,
    });
};
// console.log(temperaturearr.value);


</script>
<template>
    <div class="hourly-list">
        <div class="hourly-title">
            <div class="title">24小时预报</div>
            <div class="empty"></div>
            <div class="buttons">
                <button style="outline: none;" class="left" @click="slideleft"><</button>
                <button style="outline: none;" class="right" @click="slideright">></button>
            </div>
        </div>

        <div ref="container" class="hourly-container">
            <Hourly v-for="(hour, index) in 24" :key="index" 
            :time="`${hour}:00`"
            :weatherImg="weatherimgarr[index]" 
            :temperature="temperaturearr[index]">
            </Hourly>
        </div>
    </div>
</template>
<style scoped>
.hourly-list {
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    background-color: transparent;
}

.section-title {
    font-size: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}


.hourly-title {
    display: flex;
}

.title {
    font-size: 18px;
    color: #344665;
    line-height: 25px;
    height: 25px;
    margin-bottom: 18px;
    margin-left: 30px;
}

a {
    flex: 1;
}

.buttons {
    flex: 1;
    /* margin-left: 200px; */
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0 auto;
}

.hourly-container {
    width: 1166px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding: 10px 0;
    gap: 25px;
}

.hourly-container::-webkit-scrollbar {
    display: none;
}

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
    object-fit:contain;
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

/* 按钮样式 */
.left,
.right {
    margin-left: 200px;
    text-align: center;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 20%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.left:hover,
.right:hover {
    transform: scale(1.1);
    text-decoration: none;

    /* background-color: rgba(231, 214, 214, 0.8); */
}
</style>