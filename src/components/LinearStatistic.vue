<script setup>
import { ref } from 'vue'
import axios  from 'axios';
const high_0 = ref(null);
const high_1 = ref(null);
const high_2 = ref(null);
const high_3 = ref(null);
const high_4 = ref(null);
const high_5 = ref(null);
const high_6 = ref(null);
const dayarr = ref(null);

const low_0 = ref(null);
const low_1 = ref(null);
const low_2 = ref(null);
const low_3 = ref(null);
const low_4 = ref(null);
const low_5 = ref(null);
const low_6 = ref(null);



async function fun3(){
     await axios({
        url:'https://api.seniverse.com/v3/weather/daily.json?key=SfG87iro5XUCJp97J&location=guangzhou&language=zh-Hans&unit=c&start=-1&days=7',
        method:'GET',
     }).then((res) => {
        console.log(res.data);
        high_0.value = res.data.results[0].daily[0].high
        high_1.value = res.data.results[0].daily[1].high
        high_2.value = res.data.results[0].daily[2].high
        high_3.value = res.data.results[0].daily[3].high
        high_4.value = res.data.results[0].daily[4].high
        high_5.value = res.data.results[0].daily[5].high
        high_6.value = res.data.results[0].daily[6].high
        low_0.value = res.data.results[0].daily[0].low
        low_1.value = res.data.results[0].daily[1].low
        low_2.value = res.data.results[0].daily[2].low
        low_3.value = res.data.results[0].daily[3].low
        low_4.value = res.data.results[0].daily[4].low
        low_5.value = res.data.results[0].daily[5].low
        low_6.value = res.data.results[0].daily[6].low
        
        // console.log(high.value);
        // console.log(low.value);

        // 处理时间
        const map = {
            0:'星期天',
            1:'星期一',
            2:'星期二',
            3:'星期三',
            4:'星期四',
            5:'星期五',
            6:'星期六',
        }
         dayarr = []
        for (let i = 0; i < 7; i++) {
        const date = new Date(res.data.results[0].daily[i].date)
        // console.log(res.data.results[0].daily[i].date);
        const Day = map[date.getDay(res.data.results[0].daily[i].date)]
        dayarr.push(Day)
        
        }
        console.log(dayarr);
     }

     ).catch((err) => {
        console.log(err);
     })

}
fun3()

</script>
<template>
    <div class="daily-container">
     <div class="header"><ul><li>七日天气预报</li></ul><button>15日天气预报</button></div>
     <div class="content">
        <div class="template">
            <div class="yesterday">昨天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_0 }}°</div>
            <div>|</div>
            <div>{{ low_0 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
        <div class="template">
            <div class="yesterday">今天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_1 }}°</div>
            <div>|</div>
            <div>{{ low_1 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
        <div class="template">
            <div class="yesterday">明天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_2 }}°</div>
            <div>|</div>
            <div>{{ low_2 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
       <div class="template">
            <div class="yesterday">{{ dayarr[4] }}</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_3 }}°</div>
            <div>|</div>
            <div>{{ low_3 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
        <div class="template">
            <div class="yesterday">明天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_4 }}°</div>
            <div>|</div>
            <div>{{ low_4 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
        <div class="template">
            <div class="yesterday">明天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_5 }}°</div>
            <div>|</div>
            <div>{{ low_5 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
      <div class="template">
            <div class="yesterday">明天</div>
            <div class="date">8月06日</div>
            <div>大雨</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>{{ high_6 }}°</div>
            <div>|</div>
            <div>{{ low_6 }}°</div>
            <div><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
            <div>大雨</div>
            <div>微风1-3级</div>
        </div>
     </div>
   </div>
</template>

<style>
        .daily-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .header{
            display: flex;
            justify-content: space-between;
        }
        .content{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }


</style>