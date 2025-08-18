<script setup>
import {ref, watch} from 'vue'
// const display = ref(false)
import axios from 'axios'
import { useCounterStore } from '../stores/counter';
const user = useCounterStore()
const control1 = ref(false);


// async function fun6() {
//     await axios({
//         url:`https://api.seniverse.com/v3/location/search.json?key=SfG87iro5XUCJp97J&q=${user.city}`,
//         method:'GET'
//     }).then((res) => {
//         console.log(res.data);
//     }).catch((err) => {
//         console.log(err);
//     })
// }
// fun6()

// 修改城市名
const cityNameDeal = (e) => {
    console.log(e.target.value);
        let timer = setTimeout(() => {
            user.city = e.target.value
        },1000)
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
        },500)
    // clearTimeout(timer)
}

// 控制记录的显示与隐藏
let count = false
const mouseenterFun1 = () => {
    control1.value = true
    // count = !count
    const timer = setTimeout(() => {
      if(count == false){
        const timer = setTimeout(() => {
        mouseleaveFun()
        },2000)
    }
    },2000)   
}
const mouseoverFun = () => {
    control1.value = true
    count = true
}
const mouseleaveFun = () => {
    const timer = setTimeout(() => {
        control1.value = false
    },500)

}

// 本地存储
// 存
localStorage.setItem(`1`,user.city)
// 取
const ku = ref([])
const citydata = localStorage.getItem('1')
// ku.value.push(citydata)
// console.log(ku);
// 删
// localStorage.removeItem('age')

// 测试
// watch(() => user.city,(newValue) => {
//     console.log('城市已改变为',newValue);
// })
// // console.log(user.city);

// 改城市
function handleCityChange(cityname) {
    console.log(`点击事件触发，城市更新为:${cityname}`)
    user.changeCity(cityname)
}
// 关注
const attention = (cityname) => {
    ku.value.push(cityname)
    // console.log(ku);
}
</script>
<template>
    <div class="header">
        <div class="logo">天气预报</div>
        <div class="empty"></div>
        <div class="tenxun">
        </div>
        <a style="font-size: 20px;" class="location" @mouseenter="mouseenterFun1">{{user.city}}</a>
        <button @click="attention(user.city)">添加关注</button>
        <div @mouseover="mouseoverFun" @mouseleave="mouseleaveFun" v-if="control1" class="hidden1">
            <table>
                <tr><td>关注城市</td></tr>
                <tr><td @click="handleCityChange(ku[ku.length-1])">{{ ku[ku.length-1] }}</td></tr>
                <tr><td @click="handleCityChange(ku[ku.length-2])">{{ ku[ku.length-2] }}</td></tr>
            </table>
        </div>
        <input @focus="display" @blur='notdisplay' @input="cityNameDeal" type="search">
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
        *{
            margin: 0;
            padding: 0;
        }
        .tenxun{
            flex: 5;
            /* padding:20px; */
        }
        .header{
            display: flex;
            align-items: baseline; 
            padding: 15px 5%; 
            gap: 20px;
            /* margin: 0 20px; */
        }
        .empty{
            flex:1
        }
        .logo {
            flex: 1;
            min-width: 120px;
        }
        .header div{
            width: 150px;
        }
        .logo{
            flex: 2;
            font-size: 30px;
        }
        .location{
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
            padding: 5px 5px;
            transition: all 0.3s;
            /* width: 100%; */
        }

        td:hover {
            background:white;
            cursor: pointer;
        }
        .hidden div {
            margin: 0 auto;
        }
        .hidden {
            position: absolute;
            right: 21%;
            top: 95px;
            width: 300px;
            background: rgb(241, 245, 252);
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
            padding: 5px;
            z-index: 1500;
            border-radius: 10px;

        }
        .hidden1 {
            position: absolute;
            right: 41%;
            top: 95px;
            width: 300px;
            background: rgb(241, 245, 252);
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
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