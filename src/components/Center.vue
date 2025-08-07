<script setup>

</script>
<template>
<div>
        <div class="current-weather">
            <div class="weather-icon">
                <div><img width="120px" height="120px" src="../img/CenterImg/晴朗.png" alt=""></div>
            </div>
            <div class="temperature">26°</div>
            <div class="weather-desc">晴朗</div>
        
            <div class="weather-details">
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/风.png" alt="">
                    <span>东南风 3级</span>
                </div>
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/湿度.png" alt="">
                    <span>湿度 42%</span>
                </div>
                <div class="detail-item">
                    <img width="30px" height="30px" src="../img/CenterImg/气压.png" alt="">
                    <span>气压 1015 hPa</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
  .current-weather {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            /* margin-bottom: 25px; */
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            /* display: flex;
            flex-direction: column;
            align-items: center; */
        }

        .weather-icon {
            font-size: 80px;
            /* margin: 10px 0;
             */
        }

        .temperature {
            font-size: 64px;
            font-weight: 300;
            /* margin: 5px 0; */
        }

        .weather-desc {
            font-size: 20px;
            /* margin-bottom: 15px; */
            margin-right:20px ;
        }

        .weather-details {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .detail-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }       
</style>