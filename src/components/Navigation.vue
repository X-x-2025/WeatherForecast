<script setup>
import {ref} from 'vue'


</script>
<template>
    <div class="header">
        <div class="logo">腾讯天气</div>
        <div class="empty"></div>
        <a>腾讯网首页</a>
        <a>无障碍浏览</a>
        <div class="location">广东省&nbsp;&nbsp;广州市<a href="">[添加关注]</a></div>
        <input  ref="input" type="search">
        <div ref="hidden" class="hidden">
            <h4>当前定位</h4>
            <div>广州市</div>
            <table>
                <tr>
                    <td>北京</td>
                    <td>上海</td>
                    <td>广州</td>
                    <td>深圳</td>
                </tr>
                <tr>
                    <td>北京</td>
                    <td>上海</td>
                    <td>广州</td>
                    <td>深圳</td>
                </tr>
                <tr>
                    <td>北京</td>
                    <td>上海</td>
                    <td>广州</td>
                    <td>深圳</td>
                </tr>
                <tr>
                    <td>北京</td>
                    <td>上海</td>
                    <td>广州</td>
                    <td>深圳</td>
                </tr>

            </table>
        </div>
    </div>
</template>
<style>
        .hidden{
            display: none;
        }
        .header{
            display: flex;
            padding: 15px;
            justify-content: space-between;
        }
        .empty{
            flex: 1.5;
        }
        .header div{
            width: 150px;

        }
        .logo{
            flex: 2;
            font-size: large;
        }
        .location{
            flex: 1.5;
        }
        .location a{
            text-decoration: none;
        }
        
</style>