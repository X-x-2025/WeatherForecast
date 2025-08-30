<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, PointElement,
  CategoryScale, LinearScale
)

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu'],
  datasets: [
    {
      data: [34, 33, 33, 34],
      borderColor: 'orange',
      backgroundColor: 'orange',
      fill: false,
      tension: 0.4   // 曲线平滑
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // 不维持纵横比，允许完全自适应容器
  plugins: {
    legend: { display: false },  // 不显示图例
    tooltip: { enabled: false }  // 不显示提示
  },
  scales: {
    x: { display: false },  // 隐藏X轴
    y: { display: false }   // 隐藏Y轴
  },
  elements: {
    point: {
      radius: 4,  // 数据点大小
      backgroundColor: 'orange'
    },
    line: {
      borderWidth: 2
    }
  }
}
</script>

<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
.chart-container {
  height: 100px;
  width: 100%;
  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
}
</style>