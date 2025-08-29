
<script setup>
import { ref, defineProps } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
    title: {
        type: String,
        default: '数据图表'
    }
});

const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Demo 数据',
            backgroundColor: '#42A5F5',
            data: [40, 20, 12, 39, 10, 40, 39]
        }
    ]
});

const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: '每月用户数据'
        }
    }
});
</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <BarChart :chart-data="chartData" :options="chartOptions" />
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 1rem;
}
</style>
