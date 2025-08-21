<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useCounterStore } from '../stores/counter';
const user = useCounterStore()
const nowtemperature = ref(null);
const text = ref(null);
const wind_scale = ref(null);
const wind_direction = ref(null);
const pressure = ref(null);
const humidity = ref(null);
const weatherimg = ref(null)
async function fun2() {
    await axios({
        url: `https://api.seniverse.com/v3/weather/now.json?key=SfG87iro5XUCJp97J&location=${user.city}`,
        method: 'GET',
    }).then((res) => {
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
        }
        // 图片
        weatherimg.value = weatherimgmap[res.data.results[0].now.code]

        // 温度
        nowtemperature.value = res.data.results[0].now.temperature;
        // 天气
        text.value = res.data.results[0].now.text;
        // 风向
        wind_direction.value = res.data.results[0].now.wind_direction;
        // 风级
        wind_scale.value = res.data.results[0].now.wind_scale;
        // 气压
        pressure.value = res.data.results[0].now.pressure;
        // 湿度
        humidity.value = res.data.results[0].now.humidity;
        // console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
}
watch(() => user.city, () => {
    fun2()
})
fun2()



</script>
<template>
    <div>
        <div class="current-weather">
            <div class="weather-icon">
                <div><img width="120px" height="120px" :src="weatherimg" alt=""></div>
            </div>
            <div class="temperature">{{ nowtemperature }}°</div>
            <div class="weather-desc">{{ text }}</div>

            <div class="weather-details">
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/风.png" alt="">
                    <span>{{ wind_direction }}风 {{ wind_scale }}级</span>
                </div>
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/湿度.png" alt="">
                    <span>湿度 {{ humidity }}%</span>
                </div>
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/气压.png" alt="">
                    <span>气压 {{ pressure }} hPa</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    background-color: transparent;
}

.current-weather {
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white ); */
    z-index: 0;

    /* background: rgba(255, 255, 255, 0.15); */
    border-radius: 20px;
    padding: 25px;
    text-align: center;
    /* margin-bottom: 25px; */
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    /* display: flex;
            flex-direction: column;
            align-items: center; */
}

.weather-icon div img {
    text-align: center;
    margin: 0 auto;
    background-color: transparent;

}

.weather-icon {
    font-size: 80px;
    /* margin: 10px 0;*/
    background-color: transparent;

}

.temperature {
    font-size: 64px;
    font-weight: 300;
    /* margin: 5px 0; */
    background-color: transparent;
}

.weather-desc {
    font-size: 20px;
    /* margin-bottom: 15px; */
    margin-right: 20px;
    background-color: transparent;
}

.weather-details {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    background-color: transparent;
}

.detail-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
}
</style>