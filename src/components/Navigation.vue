<script setup>

</script>
<template>
    <div class="header">
        <div class="logo">腾讯天气</div>
        <div class="empty"></div>
        <div>腾讯网首页</div>
        <div>无障碍浏览</div>
        <div class="location">广东省&nbsp;&nbsp;广州市<a href="">[添加关注]</a></div>
        <input type="search">
    </div>
</template>
<style>
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