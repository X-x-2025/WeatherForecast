<script setup>
import axios from 'axios';
import { ref } from 'vue';
const nowtemperature = ref(null);
const text = ref(null);
const wind_scale = ref(null);
const wind_direction = ref(null);
const pressure = ref(null);
const humidity = ref(null);
async function fun2(){
    await axios({
        url:'https://api.seniverse.com/v3/weather/now.json?key=SfG87iro5XUCJp97J&location=guangzhou',
        method:'GET', 
    }).then((res)=>{
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
    }).catch((err)=>{
        console.log(err);
    })
}
fun2()
</script>
<template>
<div>
        <div class="current-weather">
            <div class="weather-icon">
                <div><img width="120px" height="120px" src="../img/CenterImg/晴朗.png" alt=""></div>
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
<style>
    *{
        margin: 0;
        padding: 0;
    }
  .current-weather {
            background: rgba(255, 255, 255, 0.15);
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

        .weather-icon {
            font-size: 80px;
            /* margin: 10px 0;
             */
        }

        .temperature {
            font-size: 64px;
            font-weight: 300;
            /* margin: 5px 0; */
        }

        .weather-desc {
            font-size: 20px;
            /* margin-bottom: 15px; */
            margin-right:20px ;
        }

        .weather-details {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .detail-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }       
</style>