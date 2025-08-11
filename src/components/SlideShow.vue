<script setup>
import axios from 'axios';
import {ref} from 'vue';
const temperature_00 = ref(null);
const temperature_01 = ref(null);
const temperature_02 = ref(null);
const temperature_03 = ref(null);
const temperature_04 = ref(null);
const temperature_05 = ref(null);
const temperature_06 = ref(null);
const temperature_07 = ref(null);
const temperature_08 = ref(null);
const temperature_09 = ref(null);
const temperature_10 = ref(null);
const temperature_11 = ref(null);
const temperature_12 = ref(null);
const temperature_13 = ref(null);
const temperature_14 = ref(null);
const temperature_15 = ref(null);
const temperature_16 = ref(null);
const temperature_17 = ref(null);
const temperature_18 = ref(null);
const temperature_19 = ref(null);
const temperature_20 = ref(null);
const temperature_21 = ref(null);
const temperature_22 = ref(null);
const temperature_23 = ref(null);
async function fun1(){
   
    await axios({
        url:'https://api.seniverse.com/v3/weather/hourly.json?key=SfG87iro5XUCJp97J&location=guangzhou&language=zh-Hans&unit=c&start=0&hours=24',
        method:'GET', 
    }).then((res)=>{
        // console.log(res.data);
        temperature_00.value = res.data.results[0].hourly[0].temperature
        temperature_01.value = res.data.results[0].hourly[1].temperature
        temperature_02.value = res.data.results[0].hourly[2].temperature
        temperature_03.value = res.data.results[0].hourly[3].temperature
        temperature_04.value = res.data.results[0].hourly[4].temperature
        temperature_05.value = res.data.results[0].hourly[5].temperature
        temperature_06.value = res.data.results[0].hourly[6].temperature
        temperature_07.value = res.data.results[0].hourly[7].temperature
        temperature_08.value = res.data.results[0].hourly[8].temperature
        temperature_09.value = res.data.results[0].hourly[9].temperature
        temperature_10.value = res.data.results[0].hourly[10].temperature
        temperature_11.value = res.data.results[0].hourly[11].temperature
        temperature_12.value = res.data.results[0].hourly[12].temperature
        temperature_13.value = res.data.results[0].hourly[13].temperature
        temperature_14.value = res.data.results[0].hourly[14].temperature
        temperature_15.value = res.data.results[0].hourly[15].temperature
        temperature_16.value = res.data.results[0].hourly[16].temperature
        temperature_17.value = res.data.results[0].hourly[17].temperature
        temperature_18.value = res.data.results[0].hourly[18].temperature
        temperature_19.value = res.data.results[0].hourly[19].temperature
        temperature_20.value = res.data.results[0].hourly[20].temperature
        temperature_21.value = res.data.results[0].hourly[21].temperature
        temperature_22.value = res.data.results[0].hourly[22].temperature
        temperature_23.value = res.data.results[0].hourly[23].temperature
        // console.log(res.data.results[0].hourly[0].temperature);
        
    }).catch((err)=>{
        console.log(err);
    })
}
fun1()



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
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">01:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">02:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">03:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">04:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">05:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">06:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">07:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">08:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">09:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">10:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">11:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">12:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">13:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">14:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">15:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">16:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">17:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">18:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">19:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">20:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">21:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">22:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
            <div class="everyhour">
                <div class="time">23:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">{{ temperature_00 }}°</div>
            </div>
           
        </div>
    </div>
</template>
<style>
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
            margin: 10px 12px;
        }

        .hour-item .time {
            font-size: 14px;
            margin-bottom: 8px;
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