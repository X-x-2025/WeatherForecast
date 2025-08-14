<script setup>
import {ref, watch} from 'vue'
// const display = ref(false)
import axios from 'axios'
import { useCounterStore } from '../stores/counter';

const user = useCounterStore()
watch(() => user.city.value,(newValue) => {

    console.log('城市已改变为',newValue);

})

console.log(user.city);

function handleCityChange(cityName) {
    console.log(`点击事件触发，城市更新为: ${cityName}`)
    user.changeCity(cityName)
}
</script>
<template>
    <div class="header">
        <div class="logo">腾讯天气</div>
        <div class="empty"></div>
        <div class="tenxun">
        <a>腾讯网首页</a>&nbsp;&nbsp;
        <a>无障碍浏览</a>
        </div>
        <div class="location">{{user.city}}<a href="">&nbsp;&nbsp;[添加关注]</a></div>
        <input  ref="input" type="search">
        <div  class="hidden">
            <h4>当前定位</h4>
            <div>广州市</div>
            <table>
                <tr>
                    <td @click="handleCityChange('北京')">北京</td>
                    <td @click="handleCityChange('上海')">上海</td>
                    <td @click="handleCityChange('广州')">广州</td>
                </tr>
                <tr>
                    <td @click="handleCityChange('北京')">北京</td>
                    <td @click="handleCityChange('上海')">上海</td>
                    <td @click="handleCityChange('广州')">广州</td>
                </tr>
                <tr>
                    <td @click="handleCityChange('北京')">北京</td>
                    <td @click="handleCityChange('上海')">上海</td>
                    <td @click="handleCityChange('广州')">广州</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style>
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
        }
        .empty{
            flex:1
            /* display: none; */
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
            font-size: large;
        }
        .location{
            flex: 5;
        }
        .location a{
            text-decoration: none;
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
            right: 15%;
            top: 95px;
            width: 300px;
            background: rgb(241, 245, 252);
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
            padding: 5px;
            z-index: 1500;
            border-radius: 10px;
 
        }

</style>
<style scoped>

.hidden {
    width: 226px !important; 
}
</style>