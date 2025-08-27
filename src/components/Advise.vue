<script setup>
import axios from 'axios';
import { useCounterStore } from '../stores/counter';
import { ref, watch } from 'vue';
const user = useCounterStore()
const dress = ref(null);
const dressadvise = ref(null);
const umbrella = ref(null);
const umbrellaadvise = ref(null);
const sunscreen = ref(null);
const sunscreenadvise = ref(null);
const uv = ref(null);
const uvadvise = ref(null);

async function fun8() {
    await axios({
        url: `https://api.seniverse.com/v3/life/suggestion.json?key=SZ17KOUjoHofDseq4&location=${user.city}&language=zh-Hans&days=5`,
        method: 'GET'
    }).then((res) => {
        // console.log(res.data);
        dress.value = res.data.results[0].suggestion[0].dressing.brief;
        dressadvise.value = res.data.results[0].suggestion[0].dressing.details;
        umbrella.value = res.data.results[0].suggestion[0].umbrella.brief;
        umbrellaadvise.value = res.data.results[0].suggestion[0].umbrella.details;
        sunscreen.value = res.data.results[0].suggestion[0].sunscreen.brief;
        sunscreenadvise.value = res.data.results[0].suggestion[0].sunscreen.details;
        uv.value = res.data.results[0].suggestion[0].uv.brief;
        uvadvise.value = res.data.results[0].suggestion[0].uv.details;
        // console.log(dressadvise.value);
    }).catch((err) => {
        console.log(err);
    })
}
fun8()
watch(() => user.city, () => {
    fun8()
})

</script>
<template>
    <div class="life-index">
        <div class="section-title">
            <div class="title">生活指数</div>
            <div class="empty"></div>
        </div>
        <div class="index-container">
            <div class="index-item">
                <div class="advise-type">
                    <img width="30px" height="30px" src="../img/AdviseImg/生活用品.png" alt="">
                    <span>穿衣建议</span>
                </div>
                <div class="index-level">{{ dress }}</div>
                <div class="index-desc">{{ dressadvise }}</div>
            </div>

            <div class="index-item">
                <div class="advise-type">
                    <img width="30px" height="30px" src="../img/AdviseImg/伞.png" alt="">
                    <span>雨伞</span>
                </div>
                <div class="index-level">{{ umbrella }}</div>
                <div class="index-desc">{{ umbrellaadvise }}</div>
            </div>

            <div class="index-item">
                <div class="advise-type">
                    <img width="30px" height="30px" src="../img/AdviseImg/防晒.png" alt="">
                    <span>防晒</span>
                </div>
                <div class="index-level">{{ sunscreen }}</div>
                <div class="index-desc">{{ sunscreenadvise }}</div>
            </div>

            <div class="index-item">
                <div class="advise-type">
                    <img width="30px" height="30px" src="../img/AdviseImg/紫外线.png" alt="">
                    <span>紫外线</span>
                </div>
                <div class="index-level">{{ uv }}</div>
                <div class="index-desc">{{ uvadvise }}</div>
            </div>
        </div>
    </div>

</template>
<style>
* {
    margin: 0;
    padding: 0;
    background-color: transparent;
}

.life-index {
    /* background: rgba(255, 255, 255, 0.15); */
    /* background: linear-gradient(to bottom right, rgb(101, 184, 250), white); */
    border-radius: 20px;
    padding: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.index-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.index-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 15px;
}

.advise-type {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 15px;
}

.advise-type i {
    margin-right: 8px;
    font-size: 18px;
}

.index-level {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
}

.index-desc {
    font-size: 13px;
    opacity: 0.9;
}

.advise-type img {
    margin-right: 5px;
}

.section-title {
    display: flex;
}

.title {
    font-size: 18px;
    color: #344665;
    line-height: 25px;
    height: 25px;
    margin-bottom: 18px;
    margin-left: 30px;
}

.empty {
    flex: 9;
}
</style>