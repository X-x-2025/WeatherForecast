
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { useCounterStore } from '../stores/counter';
import { defineProps } from 'vue'

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

onMounted(() => {
    chartInstance = echarts.init(chartRef.value)
    renderChart();
});

const renderChart = () => {
    const option = {
        title: { text: '温度最值图' },
        xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五','周六','周天'] },
        yAxis: { type: 'value' },
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


</script>
<template>
    <div ref="chartRef"  class="chart"></div>
</template>

<style scoped>
.chart {
    
    /* height: 100%; */
}
 
</style>

