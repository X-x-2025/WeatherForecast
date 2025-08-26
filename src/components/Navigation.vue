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

}

// 关注
const arr = ref([])
let cityname1 = ref('')
const attention = (cityname) => {
    const currentcity = arr.value.includes(cityname) ? arr.value : [...arr.value, cityname];
    localStorage.setItem('key', currentcity.join(','));
    cityname1.value = cityname;
}

// 取出存在本地的数据
const getlocation = () => {
    const stored = localStorage.getItem('key');
    // 把存在本地的数据取出（空值取[]）
    arr.value = stored ? stored.split(',') : [];
    // 获取数组中每个元素的天气信息
    arr.value.forEach(city => fun(city));

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
async function fun(city) {
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
        <div class="logo">
            <img style="margin-right: 5px;" height="45px" src="../img/NavigationImg/天气预报.png" alt="">
            天气预报
        </div>
        <div class="empty"></div>
        <div class="tenxun"></div>
        <div style="display: flex; justify-content: center; align-items:center; align-content: center; ">
            <img style="display: block;" width="30px" height="30px" margin-right="5px;"
                src="../img/NavigationImg/定位.png" alt="">
            <a style="font-size: 20px;  margin-right: 50px;" class="location" @mouseenter="mouseenterFun1">{{ user.city
                }}</a>
            <button style=" height: 30px; line-height: 30px; outline: none; " @click="attention(user.city)">添加关注</button>
        </div>
        <div @mouseover="mouseoverFun" @mouseleave="mouseleaveFun" v-if="control1" class="hidden1">
            <table style="width: 100%;">
                <tr>
                    <td style=" font-size: 20px;">已关注的城市</td>
                </tr>
                <tr>
                    <td @click="clearlocation">清除所有记录</td>
                </tr>
                <tr style="align-items: center; display: flex;justify-content: center;"
                    v-for="(city, index) in arr.slice()" :key="index">
                    <td style="align-items: center; display: flex;justify-content: center;line-height: 30px; font-size: 20px;"
                        @click="handleCityChange(city)">
                        {{ arr[index] }}&nbsp;&nbsp;&nbsp;{{ locationcitylist[index].low }}°/{{
                        locationcitylist[index].high }}°&nbsp;&nbsp;&nbsp;
                        <button @click.stop="deleteCity(index)"><img width="30px" height="30px"
                                style="line-height: 30px;  " src="../img/NavigationImg/垃圾桶.png" alt=""></button>
                    </td>
                </tr>
            </table> 
        </div>
        <div style=" display: flex; justify-content: center; align-items: center; align-content: center;margin: 0 auto; ">
            <input style=" display: block; margin: 0 auto;"  placeholder="请输入城市" v-model="inputValue" @focus="display" @blur='notdisplay'
                type="search">
            <button style=" margin-left: 10px; height: 30px; line-height: 30px; display: block; white-space: nowrap; outline: none;"   @click="submitCity">提交</button>
        </div>
        <br>
        <div v-if="control" class="hidden">
            <h4>当前定位</h4>
            <div style="display: flex; text-align: center; align-items: center; justify-content: center;">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <img style=" display: block; width: 20px; margin-left: 65px;" margin-right="5px;"
                        src="../img/NavigationImg/定位.png" alt="">
                    <div style="font-size: 20px; margin-left: -60px; ">广州</div>
                </div>
            </div>
            <p style="margin-top:8px;">热门城市</p>
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
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    background-color: transparent;
}

.tenxun {
    flex: 5;
    /* padding:20px; */
}

.header {
    background-color: transparent;
    display: flex;
    align-items: baseline;
    padding: 15px 5%;
    gap: 20px;
    /* margin: 0 20px; */
}

.empty {
    flex: 1
}

.logo {
    flex: 1;
    min-width: 120px;
}

.header div {
    width: 226px;
}

.logo {
    flex: 2;
    display: flex;
    font-size: 30px;
    white-space: nowrap;
}

.location {
    flex: 5;
}


/* 搜索框 */

input[type="search"] {
    padding: 8px 15px;
    border-radius: 20px;
    border: 1px solid #ddd;
    flex: 1;
}

table {
    width: 226px;
    margin-top: 15px;
    border-radius: 10px;
}

td {
    width: 226px;
    padding: 5px 5px;
    transition: all 0.3s;
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

.hidden div {
    /* width: 300px; */
    margin: 0 auto;
}


.hidden {
    position: absolute;
    right: 23%;
    top: 110px;
    width: 226px;
    background: rgb(241, 245, 252);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 5px;
    z-index: 1500;
    border-radius: 10px;

}

.hidden1 {
    position: absolute;
    right: 40%;
    top: 110px;
    width: 226px;
    background: rgb(241, 245, 252);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    /* padding: 5px; */
    z-index: 1000;
    border-radius: 10px;
}

button:active{
    background: #2980b9;
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}
</style>
<style scoped>
.hidden {
    width: 226px !important;
}
</style>