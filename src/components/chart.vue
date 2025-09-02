
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';
import { useCounterStore } from '../stores/counter';
import { defineProps } from 'vue'
import { shouldShowAllLabels } from 'echarts/types/src/coord/axisHelper.js';

const props = defineProps({
    higharr: {
        type: Array,  
    },
    lowarr: {
        type: Array,
    }
})

// console.log(higharr);
// console.log(lowarr);

const chartRef = ref();
let chartInstance = null;
const handleResize = () => {
    if (chartInstance) {
        chartInstance.resize();
    }
};

onMounted(() => {
    chartInstance = echarts.init(chartRef.value)
    renderChart();
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const renderChart = () => {
    const option = {
        grid: {
            top: 50,
            bottom: 50,
            left: 10,
            right: 200
        },

        title: { text: '温度最值图',show:false },

        xAxis: { type: 'category',  data: ['周一', '周二', '周三', '周四', '周五','周六','周天'], },
        yAxis: { type: 'value',
        min:20
         },

        series: [{
            data: props.higharr,
            type: 'line'
        },{
            data: props.lowarr,
            type: 'line'
        }]
    };
    chartInstance.setOption(option);
};
// console.log(user.higharr);
watch(() => props.higharr, () => {
    renderChart();
})



</script>
<template>
    <div ref="chartRef"  class="chart"></div>
</template>

<style scoped>
.chart {
    width: 900px;
    height: 180px;
}
 
</style>

