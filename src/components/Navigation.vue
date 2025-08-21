<script setup>
import { onBeforeMount, ref, watch } from 'vue'
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
    }, 2000)
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
            }, 2000)
        }
    }, 2000)
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
    arr.value = stored ? stored.split(',') : [];

    // console.log(stored);
    // console.log(arr.value)
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
    console.log(arr.value);
})

// console.log(arr.value); 
// onMounted(() => {
getlocation()
// })
// console.log(arr.value);

console.log(arr.value[0]);


</script>
<template>
    <div class="header">
        <div class="logo">
            <img style="margin-right: 5px;" height="45px" src="../img/NavigationImg/天气预报.png" alt="">
            天气预报
        </div>
        <div class="empty"></div>
        <div class="tenxun">
        </div>
        <!-- <img width="40px" height="40px" src="../img/NavigationImg/定位.png" alt=""> -->
        <a style="font-size: 20px;" class="location" @mouseenter="mouseenterFun1">{{ user.city }}</a>
        <button @click="attention(user.city)">添加关注</button>
        <div @mouseover="mouseoverFun" @mouseleave="mouseleaveFun" v-if="control1" class="hidden1">
            <table>
                <tr>
                    <td style="font-size: 20px;">已关注的城市</td>
                </tr>
                <tr>
                    <td @click="clearlocation">清除所有记录</td>
                </tr>

                <tr v-for="(city, index) in arr.slice()" :key="index">
                    <td @click="handleCityChange(city)">{{ city }}</td>
                </tr>
            </table>
        </div>
        <input placeholder="请输入城市" v-model="inputValue" @focus="display" @blur='notdisplay' type="search">
        <button @click="submitCity">提交</button>
        <br>
        <div v-if="control" class="hidden">
            <h4>当前定位</h4>
            <div>广州</div>
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
    width: 150px;
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
    width: 100%;
    margin-top: 15px;
}

td {
    /* width: 200px; */
    padding: 5px 5px;
    transition: all 0.3s;
    /* width: 100%; */
}

.claer {
    white-space: nowrap;
}

td:hover {
    background: white;
    cursor: pointer;
}

.hidden div {
    margin: 0 auto;
}

.hidden {
    position: absolute;
    right: 23%;
    top: 110px;
    width: 300px;
    background: rgb(241, 245, 252);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 5px;
    z-index: 1500;
    border-radius: 10px;

}

.hidden1 {
    position: absolute;
    right: 43%;
    top: 110px;
    width: 300px;
    background: rgb(241, 245, 252);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 5px;
    z-index: 1000;
    border-radius: 10px;
}
</style>
<style scoped>
.hidden {
    width: 226px !important;
}
</style>