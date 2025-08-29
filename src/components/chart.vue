
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref();
let chartInstance = null;
onMounted(() => {
    chartInstance = echarts.init(chartRef.value);
    renderChart();
    window.addEventListener('resize', handleResize);
});
const renderChart = () => {
    const option = {
        title: { text: '温度最值图' },
        xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五','周六','周天'] },
        yAxis: { type: 'value' },
        series: [{
            data: [30, 20, 25, 26, 27,28,29],

            type: 'line'
        },{
            data: [20, 24, 25, 26, 24,30,34],
            type: 'line'
        }]
    };
    chartInstance.setOption(option);
};
</script>
<template>
    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

