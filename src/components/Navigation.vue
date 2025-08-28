<script setup>
import { onBeforeMount, ref, watch, toRaw } from 'vue'

import { onMounted, onUpdated } from 'vue'
// const display = ref(false)
import axios from 'axios'
import { useCounterStore } from '../stores/counter';
const user = useCounterStore()
const control1 = ref(false);

// 修改城市名
const inputValue = ref('')
const submitCity = () => {
    if (inputValue.value) {
        user.city = inputValue.value;
    }
}
// 控制搜索框的显示与隐藏
const control = ref(false);
const display = () => {
    control.value = true
}
const notdisplay = () => {
    // 延时消失
    let timer = setTimeout(() => {
        control.value = false
    }, 3000)
    // clearTimeout(timer)
}

// 控制记录的显示与隐藏
let count = false
const mouseenterFun1 = () => {
    control1.value = true
    // count = !count
    const timer = setTimeout(() => {
        if (count == false) {
            const timer = setTimeout(() => {
                mouseleaveFun()
            }, 3000)
        }
    }, 3000)
}
const mouseoverFun = () => {
    control1.value = true
    count = true
}
const mouseleaveFun = () => {
    const timer = setTimeout(() => {
        control1.value = false
    }, 3000)

}

// 改城市
function handleCityChange(cityname) {
    console.log(`点击事件触发，城市更新为:${cityname}`)
    user.changeCity(cityname)
}


// 清除本地存储
const clearlocation = () => {
    localStorage.clear();
    arr.value = []
    getlocation()
}

// 关注
const arr = ref([])
let cityname1 = ref('')
const attention = (cityname) => {
    const currentcity = arr.value.includes(cityname) ? arr.value : [...arr.value, cityname];
    localStorage.setItem('key', currentcity.join(','));
    cityname1.value = cityname;
    getlocation()
}

// 取出存在本地的数据
const getlocation = () => {
    const stored = localStorage.getItem('key');
    // 把存在本地的数据取出（空值取[]）
    arr.value = stored ? stored.split(',') : [];
    // 获取数组中每个元素的天气信息
    arr.value.forEach(city => getData(city));

}

// 删除
const deleteCity = (index) => {
    arr.value.splice(index, 1);
    localStorage.setItem('key', arr.value.join(','));
}


// 监听关注
watch(() => cityname1.value, (newValue, oldValue) => {
    // 过滤相同值和空值
    if (!newValue || newValue === oldValue)
        return;
    if (!arr.value.includes(newValue)) {
        arr.value = [...arr.value, newValue];
        // 同步更新存储
        localStorage.setItem('key', arr.value.join(','));
    }
    console.log('监听了');
    // console.log('arr.value是：'+arr.value);
    // fun()
    // 更新温度
    getlocation()

})

// console.log(arr.value); 
// onMounted(() => {
getlocation()
// })
// 获取天气信息函数
const locationcitylist = ref([])
// let i = 0;
async function getData(city) {
    await axios({
        url: `https://api.seniverse.com/v3/weather/daily.json?key=SZ17KOUjoHofDseq4&location=${city}&language=zh-Hans&unit=c&start=-1&days=7`,
        method: 'GET',
    }).then((res) => {
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
        console.log(res.data)
        locationcitylist.value.push({
            high: res.data.results[0].daily[1].high,
            low: res.data.results[0].daily[1].low,
            weatherimg: weatherimgmap[res.data.results[0].daily[1].code_day],
        })
    })
    // higharr.value.push(locationcitylist.value[i][i].high)

}
// console.log(arr.value);

</script>
<template>
    <div class="header">
        <span class="logo">
            <img src="../img/NavigationImg/天气预报.png" alt="">
            <p>天气预报</p>
        </span>
        <div>
            <img style="display: block; margin-bottom: -28px;" width="30px" height="30px"
                src="../img/NavigationImg/定位.png" alt="">
            <a style="font-size: 20px;  margin-right: 50px; color: #fff;" class="location"
                @mouseenter="mouseenterFun1">{{ user.city }}</a>
            <button style=" outline: none; color: #fff;" @click="attention(user.city)">添加关注</button>
            <div @mouseover="mouseoverFun" @mouseleave="mouseleaveFun" v-if="control1" class="hidden1">
                <table style="width: 100%;">
                    <span style=" font-size: 14px; color:#9f9f9f; padding:0 10px;">已关注的城市</span>
                    <span class="spanstyle" @click="clearlocation">清除所有记录</span>
                    <tr v-for="(city, index) in arr.slice()" :key="index">
                        <td style="align-items: center; display: flex;justify-content: center;line-height: 30px; font-size: 14px;"
                            @click="handleCityChange(city)">
                            {{ arr[index] }}&nbsp;&nbsp;&nbsp;{{ locationcitylist[index].low }}°/{{
                                locationcitylist[index].high }}°&nbsp;&nbsp;&nbsp;
                            <button @click.stop="deleteCity(index)"><img width="30px" height="30px"
                                    style="line-height: 30px;  " src="../img/NavigationImg/垃圾桶.png" alt="">
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="input-container">
            <input placeholder="请输入城市" v-model="inputValue" @focus="display" @blur='notdisplay' type="search">
            <div v-if="control" class="hidden">
                <h4>当前定位</h4>
                <div style="display: flex; align-items: center;margin-left: 12px;">
                    <img style="margin-bottom: 5px;" width="21px" height="21px" src="../img/NavigationImg/定位.png"
                        alt="">
                    <div style="font-size: 14px; margin-left: -98px; margin-bottom: 5px;">广州</div>
                </div>
                <p class="hot">热门城市</p>
                <table>
                    <tr>
                        <td @click="handleCityChange('北京')">北京</td>
                        <td @click="handleCityChange('上海')">上海</td>
                        <td @click="handleCityChange('广州')">广州</td>
                    </tr>
                    <tr>
                        <td @click="handleCityChange('杭州')">杭州</td>
                        <td @click="handleCityChange('南京')">南京</td>
                        <td @click="handleCityChange('西安')">西安</td>
                    </tr>
                    <tr>
                        <td @click="handleCityChange('重庆')">重庆</td>
                        <td @click="handleCityChange('成都')">成都</td>
                        <td @click="handleCityChange('郑州')">郑州</td>
                    </tr>
                </table>
            </div>
        </div>
        <button
            style="  margin-left: 10px; height: 30px; line-height: 30px; display: block; white-space: nowrap; outline: none;color: #fff;"
            @click="submitCity">提交</button>
    </div>

</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    background-color: transparent;
    font-family: "PingFang SC", "Microsoft YaHei", Simsun, Helvetica, Arial, sans-serif;
    /* font: 12px / 18px Simsun, Helvetica, Arial, sans-serif; */
    /* color: #fff; */
}

.header {
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 5%;
    gap: 20px;
    font-size: 14px;
    color: #555;
    /* margin: 0 20px; */
}

.header div {
    width: 226px;
}

.logo {
    /* position: relative; */
    /* margin: 0 auto; */
    display: flex;
    align-items: center;
    height: 45px;
    flex: 2;
    font-size: 30px;
    /* white-space: nowrap; */
    color: #fff;
    text-align: start;
}

.logo p {
    display: inline;
    font-size: 30px;
    color: #fff;
    /* margin: 0 auto; */
    /* text-align: start; */
    /* margin-top: 10px; */
}

.logo img {
    margin-right: 10px;
    /* margin:auto 0; */
    height: 45px;
    /* line-height: 45px; */
    /* width: 45px; */
    display: inline-block;
    /* position: absolute;
    left: -5%;
    bottom: 0%; */
}



input[type="search"] {
    height: 39px;
    position: relative;
    padding: 8px 15px;
    border-radius: 20px;
    border: 1px solid #ddd;
    flex: 1;
    color: #fff;
}

input[type="search"]::placeholder {
    opacity: 0.8;
    color: #fff;
}

table {
    width: 226px;
    margin-top: 5px;
    border-radius: 10px;
}

td {
    width: 226px;
    padding: 5px 5px;
    /* transition: all 0.3s; */
    /* width: 100%; */
    border-radius: 10px;
}

.claer {
    white-space: nowrap;
}

td:hover {
    width: 226px;
    background: white;
    cursor: pointer;
}

.hidden {
    z-index: 1000;
    position: absolute;
    left: 10px;
    top: 99%;
    width: 226px;
    background: rgb(241, 245, 252);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 10px;
    font-size: 14px;
    color: black;
    margin-top: 4px;
    padding: 20px 0 10px;

}

.hidden1 {
    z-index: 1000;
    position: absolute;
    top: 11%;
    background: #fff;
    background: rgb(241, 245, 252);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .15);
    border-radius: 5px;
    padding: 5px 0 10px;
    font-size: 14px;
    color: black;

}

button:active {
    background: #2980b9;
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}

h4 {
    /* height: 14px; */
    /* line-height: 14px; */
    /* cursor: pointer; */
    margin-bottom: 24px;
    float: left;
    /* margin-left: 20px; */
    font-size: 12px;
    color: #9f9f9f;
    height: 12px;
    line-height: 12px;
    margin-bottom: 8px;
    margin-top: 2px;
    clear: both;
    padding: 0 20px;
}

.hot {
    margin-bottom: 24px;
    float: left;
    /* margin-left: 20px; */
    font-size: 12px;
    color: #9f9f9f;
    height: 12px;
    line-height: 12px;
    margin-bottom: 8px;
    margin-top: 2px;
    clear: both;
    padding: 0 20px;
}

.spanstyle {
    width: 226px;
    background: white;
    cursor: pointer;
    font-size: 14px;
    color: #9f9f9f;
    padding: 0 10px;
    margin: 0 auto;
    margin-top: 10px;

}

.input-container {
    position: relative;
    height: 39px;
}
</style>
