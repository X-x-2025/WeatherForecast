<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { useCounterStore } from '../stores/counter';
import { watch } from 'vue';

const user = useCounterStore()
const weatherimgarr = ref([]);
const temperaturearr = ref([]);
async function fun1(){
    weatherimgarr.value = []
    temperaturearr.value = []
    await axios({
        url:`https://api.seniverse.com/v3/weather/hourly.json?key=SfG87iro5XUCJp97J&location=${user.city}&language=zh-Hans&unit=c&start=0&hours=24`,
        method:'GET', 
    }).then((res) => {
        // console.log(res.data);
        for(let i = 0;i <= 23;i++){
            // 处理图片
            const weatherimgmap = {
            0:"0@1x.png",
            1:"1@1x.png",
            2:"2@1x.png",
            3:"3@1x.png",
            4:"4@1x.png",
            5:"5@1x.png",
            6:"6@1x.png",
            7:"7@1x.png",
            8:"8@1x.png",
            9:"9@1x.png",
            10:"10@1x.png",
            11:"11@1x.png",
            12:"12@1x.png",
            13:"13@1x.png",
            14:"14@1x.png",
            15:"15@1x.png",
            16:"16@1x.png",
            17:"17@1x.png",
            18:"18@1x.png",
            19:"19@1x.png",
            20:"20@1x.png",
            21:"21@1x.png",
            22:"22@1x.png",
            23:"23@1x.png",
            24:"24@1x.png",
            25:"25@1x.png",
            26:"26@1x.png",
            27:"27@1x.png",
            28:"28@1x.png",
            29:"29@1x.png",
            30:"30@1x.png",
            31:"31@1x.png",
            32:"32@1x.png",
            33:"33@1x.png",
            34:"34@1x.png",
            35:"35@1x.png",
            36:"36@1x.png",
            37:"37@1x.png",
            38:"38@1x.png",
            39:"39@1x.png",
        }
        const weatherimg = weatherimgmap[res.data.results[0].hourly[i].code]
        // console.log(res.data.results[0].hourly[0].code);
        weatherimgarr.value.push(weatherimg)
        temperaturearr.value.push(res.data.results[0].hourly[i].temperature)

        }
        
        // console.log(temperaturearr);

        
    }).catch((err) =>{
        console.log(err);
    })
}
fun1()
watch(() => user.city,() => {
    console.log('城市已改变为',user.city);
    fun1()
})
console.log(user.city);




</script>
<template>
    <div class="hourly-list">
        <div class="hourly-title">
            <div>24小时预报</div>
            <div class="empty"></div>
            <div>更新时间: 14:30</div>
        </div>
        <div class="hourly-container">
            <div class="everyhour">
                <div class="time">00:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[0]" alt=""></div>
                <div class="temp">{{ temperaturearr[0] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">01:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[1]" alt=""></div>
                <div class="temp">{{ temperaturearr[1] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">02:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[2]" alt=""></div>
                <div class="temp">{{ temperaturearr[2] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">03:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[3]" alt=""></div>
                <div class="temp">{{ temperaturearr[3] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">04:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[4]" alt=""></div>
                <div class="temp">{{ temperaturearr[4] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">05:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[5]" alt=""></div>
                <div class="temp">{{ temperaturearr[5] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">06:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[6]" alt=""></div>
                <div class="temp">{{ temperaturearr[6] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">07:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[7]" alt=""></div>
                <div class="temp">{{ temperaturearr[7] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">08:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[8]" alt=""></div>
                <div class="temp">{{ temperaturearr[8] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">09:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[9]" alt=""></div>
                <div class="temp">{{ temperaturearr[9] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">10:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[10]" alt=""></div>
                <div class="temp">{{ temperaturearr[10] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">11:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[11]" alt=""></div>
                <div class="temp">{{ temperaturearr[11] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">12:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[12]" alt=""></div>
                <div class="temp">{{ temperaturearr[12] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">13:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[13]" alt=""></div>
                <div class="temp">{{ temperaturearr[13] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">14:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[14]" alt=""></div>
                <div class="temp">{{ temperaturearr[14] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">15:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[15]" alt=""></div>
                <div class="temp">{{ temperaturearr[15] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">16:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[16]" alt=""></div>
                <div class="temp">{{ temperaturearr[16] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">17:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[17]" alt=""></div>
                <div class="temp">{{ temperaturearr[17] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">18:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[18]" alt=""></div>
                <div class="temp">{{ temperaturearr[18] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">19:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[19]" alt=""></div>
                <div class="temp">{{ temperaturearr[19] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">20:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[20]" alt=""></div>
                <div class="temp">{{ temperaturearr[20] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">21:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[21]" alt=""></div>
                <div class="temp">{{ temperaturearr[21] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">22:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[22]" alt=""></div>
                <div class="temp">{{ temperaturearr[22] }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">23:00</div>
                <div class="icon"><img width="60px" height="60px" :src="weatherimgarr[23]" alt=""></div>
                <div class="temp">{{ temperaturearr[23] }}°</div>
            </div>
           
        </div>
    </div>
</template>
<style>
        *{
            margin: 0;
            padding: 0;
        }
        .hourly-list {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 25px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        .section-title {
            font-size: 18px;
            margin-bottom: 15px;
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
        }
        .empty{
            flex: 8;
        }

        .hourly-container {
            display: flex;
            justify-content: space-between;
            overflow-x: auto;
            padding: 10px 0;
            gap: 25px;
        }



        .everyhour {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 60px;
            margin: 12px 12px;
            margin-bottom: 5px;
        }

        .hour-item .time {

            font-size: 14px;
            margin:5px 5px; 
        }

        .hour-item .icon {
            font-size: 24px;
            margin-bottom: 8px;
            color: #FFD700;
        }

        .hour-item .temp {
            font-size: 16px;
            font-weight: 500;
        }


</style>