<script setup>
import { ref, watch } from 'vue'
import axios from 'axios';
import { useCounterStore } from '../stores/counter';
const user = useCounterStore()

const montharr = ref([]);
const weekarr = ref([]);
const dayarr = ref([]);
const wind_typearr = ref([]);
const wind_scalearr = ref([]);
const higharr = ref([]);
const lowarr = ref([]);
const dayweathertextarr = ref([]);
const nightweathertextarr = ref([]);
const dayweatherimgarr = ref([]);
const nightweatherimgarr = ref([]);

async function getData() {
    montharr.value = []
    weekarr.value = []
    dayarr.value = []
    wind_typearr.value = []
    wind_scalearr.value = []
    higharr.value = []
    lowarr.value = []
    dayweathertextarr.value = []
    nightweathertextarr.value = []
    dayweatherimgarr.value = []
    nightweatherimgarr.value = []

    await axios({
        url: `https://api.seniverse.com/v3/weather/daily.json?key=SZ17KOUjoHofDseq4&location=${user.city}&language=zh-Hans&unit=c&start=-1&days=7`,
        method: 'GET',
    }).then((res) => {
        // console.log(res.data);
        // 处理天气代码
        const weathertextmap = {
            0: '晴',
            1: '晴',
            2: '晴',
            3: '晴',
            4: '多云',
            5: '晴间多云',
            6: '晴间多云',
            7: '大部多云',
            8: '大部多云',
            9: '阴',
            10: '阵雨',
            11: '雷阵雨',
            12: '雷阵雨伴有冰雹',
            13: '小雨',
            14: '中雨',
            15: '大雨',
            16: '暴雨',
            17: '大暴雨',
            18: '特大暴雨',
            19: '冻雨',
            20: '雨夹雪',
            21: '阵雪',
            22: '小雪',
            23: '中雪',
            24: '大雪',
            25: '暴雪',
            26: '浮尘',
            27: '扬沙',
            28: '沙尘暴',
            29: '强沙尘暴',
            30: '雾',
            31: '霾',
            32: '风',
            33: '大风',
            34: '飓风',
            35: '热带风暴',
            36: '龙卷风',
            37: '冷',
            38: '热',
            39: '未知',
        }
        // 处理天气图片
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
        // 处理时间
        const datemap = {
            0: '星期天',
            1: '星期一',
            2: '星期二',
            3: '星期三',
            4: '星期四',
            5: '星期五',
            6: '星期六',
        }
        // 处理风级
        const windmap = {
            0: '无风',
            1: '软风',
            2: '轻风',
            3: '微风',
            4: '和风',
            5: '劲风',
            6: '强风',
            7: '疾风',
            8: '大风',
            9: '列风',
            10: '狂风',
            11: '暴风',
            12: '飓风',
        }

        for (let i = 0; i < 7; i++) {
            const date = new Date(res.data.results[0].daily[i].date)
            // console.log(res.data.results[0].daily[i].date);
            // 获取星期
            const Week = datemap[date.getDay(res.data.results[0].daily[i].date)]
            weekarr.value.push(Week)
            // 获取月份
            montharr.value.push(date.getMonth(res.data.results[0].daily[i].date) + 1)
            // 获取日期
            dayarr.value.push(date.getDate(res.data.results[0].daily[i].date))
            // 获取最高温度
            higharr.value.push(res.data.results[0].daily[i].high)
            // 获取最低温度
            lowarr.value.push(res.data.results[0].daily[i].low)
            // 获取风类型
            const Wind_type = windmap[res.data.results[0].daily[i].wind_scale]
            wind_typearr.value.push(Wind_type)
            // 获取风级
            wind_scalearr.value.push(res.data.results[0].daily[i].wind_scale)
            // 获取白天天气文本
            const Dayweathertextarr = weathertextmap[res.data.results[0].daily[i].code_day]
            dayweathertextarr.value.push(Dayweathertextarr)
            // 获取夜晚天气文本
            const Nightweathertextarr = weathertextmap[res.data.results[0].daily[i].code_night]
            nightweathertextarr.value.push(Nightweathertextarr)
            // 获取白天天气图片
            const Dayweatherimgarr = weatherimgmap[res.data.results[0].daily[i].code_day]
            dayweatherimgarr.value.push(Dayweatherimgarr)
            // 获取夜晚天气图片
            const Nightweatherimgarr = weatherimgmap[res.data.results[0].daily[i].code_night]
            nightweatherimgarr.value.push(Nightweatherimgarr)
        }
        // console.log(montharr);
        // console.log(weekarr);
        // console.log(dayarr);
        // console.log(wind_typearr);
        // console.log(wind_scalearr);
        // console.log(higharr);
        // console.log(lowarr);
        // console.log(dayweathertextarr);
        // console.log(nightweathertextarr);
        // console.log(dayweatherimgarr);
        // console.log(nightweatherimgarr);
    }

    ).catch((err) => {
        console.log(err);
    })
}
getData()
watch(() => user.city, () => {
    // console.log('城市已改变为',user.city);
    getData()
})
// console.log(`API URL: https://api.seniverse.com/v3/weather/daily.json?key=SfG87iro5XUCJp97J&location=${user.city}&language=zh-Hans&unit=c&start=-1&days=7`)
// console.log(dayweatherimgarr)

</script>
<template>
    <div class="daily-container">
        <div class="header">
            <div class="title">七日天气预报</div>
            <div class="empty"></div>
            <a href="https://www.nmc.cn/">15日天气预报</a>
        </div>

        <div class="content">
            <div class="template">
                <div class="yesterday">昨天</div>
                <div class="date">{{ montharr[0] }} 月 {{ dayarr[0] }} 日</div>
                <div>{{ dayweathertextarr[0] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[0]" alt=""></div>
                <div>{{ higharr[0] }}°</div>
                <div>|</div>
                <div>{{ lowarr[0] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[0]" alt=""></div>
                <div>{{ nightweathertextarr[0] }}</div>
                <div class="wind">{{ wind_typearr[0] }}{{ wind_scalearr[0] }}级</div>
            </div>
            <div class="template">
                <div class="yesterday">今天</div>
                <div class="date">{{ montharr[1] }} 月 {{ dayarr[1] }} 日</div>
                <div>{{ dayweathertextarr[1] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[1]" alt=""></div>
                <div>{{ higharr[1] }}°</div>
                <div>|</div>
                <div>{{ lowarr[1] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[1]" alt=""></div>
                <div>{{ nightweathertextarr[1] }}</div>
                <div class="wind">{{ wind_typearr[1] }}{{ wind_scalearr[1] }}级</div>
            </div>
            <div class="template">
                <div class="yesterday">明天</div>
                <div class="date">{{ montharr[2] }} 月 {{ dayarr[2] }} 日</div>
                <div>{{ dayweathertextarr[2] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[2]" alt=""></div>

                <div>{{ higharr[2] }}°</div>
                <div>|</div>
                <div>{{ lowarr[2] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[2]" alt=""></div>

                <div>{{ nightweathertextarr[2] }}</div>
                <div class="wind">{{ wind_typearr[2] }}{{ wind_scalearr[2] }}级</div>

            </div>
            <div class="template">
                <div class="yesterday">{{ weekarr[3] }}</div>
                <div class="date">{{ montharr[3] }} 月 {{ dayarr[3] }} 日</div>
                <div>{{ dayweathertextarr[3] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[3]" alt=""></div>

                <div>{{ higharr[3] }}°</div>
                <div>|</div>
                <div>{{ lowarr[3] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[3]" alt=""></div>

                <div>{{ nightweathertextarr[3] }}</div>
                <div class="wind">{{ wind_typearr[3] }}{{ wind_scalearr[3] }}级</div>
            </div>
            <div class="template">
                <div class="yesterday">{{ weekarr[4] }}</div>
                <div class="date">{{ montharr[4] }} 月 {{ dayarr[4] }} 日</div>
                <div>{{ dayweathertextarr[4] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[4]" alt=""></div>

                <div>{{ higharr[4] }}°</div>
                <div>|</div>
                <div>{{ lowarr[4] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[4]" alt=""></div>

                <div>{{ nightweathertextarr[4] }}</div>
                <div class="wind">{{ wind_typearr[4] }}{{ wind_scalearr[4] }}级</div>

            </div>
            <div class="template">
                <div class="yesterday">{{ weekarr[5] }}</div>
                <div class="date">{{ montharr[5] }} 月 {{ dayarr[5] }} 日</div>
                <div>{{ dayweathertextarr[5] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[5]" alt=""></div>

                <div>{{ higharr[5] }}°</div>
                <div>|</div>
                <div>{{ lowarr[5] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[5]" alt=""></div>

                <div>{{ nightweathertextarr[5] }}</div>
                <div class="wind">{{ wind_typearr[5] }}{{ wind_scalearr[5] }}级</div>
            </div>
            <div class="template">
                <div class="yesterday">{{ weekarr[6] }}</div>
                <div class="date">{{ montharr[6] }} 月 {{ dayarr[6] }} 日</div>
                <div>{{ dayweathertextarr[6] }}</div>
                <div class="icon"><img :src="dayweatherimgarr[6]" alt=""></div>
                <div>{{ higharr[6] }}°</div>
                <div>|</div>
                <div>{{ lowarr[6] }}°</div>
                <div class="icon"><img :src="nightweatherimgarr[6]" alt=""></div>
                <div>{{ nightweathertextarr[6] }}</div>
                <div class="wind">{{ wind_typearr[6] }}{{ wind_scalearr[6] }}级</div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.daily-container {
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white ); */
    text-align: center;
    /* background: rgba(255, 255, 255, 100); */
    color: #c2c2c2;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    /* backdrop-filter: blur(10px); */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    background-color: transparent;
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white); */
}


.header {
    /* background: linear-gradient(to bottom right,rgb(101,184,250),white); */
    margin: 20px 20px;
    /* margin-right: 200px; */
    display: flex;
    justify-content: space-between;
}

.empty {
    flex: 8;
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

.icon{
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
.date{
    padding: 3px;
    color: #c2c2c2;
    font-size: 15px;
}
.wind{
    font-size: 15px;
    color: #c2c2c2;
    padding-top: 4px;
}

</style>