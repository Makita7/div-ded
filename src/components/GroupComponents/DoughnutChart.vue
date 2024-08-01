<script setup>
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Eating Out', 'Transportation', 'Entertainment'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: ['#79883F', '#CCD6A6', '#E87429'],
      data: [300, 50, 100],
      borderWidth: 8,
      hoverBorderColor: 'white',
      hoverBorderWidth: 4,
    }
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})
</script>

<template>
  <Doughnut :data="chartData" :options="chartOptions" borderWidth="50px" />
</template>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  height: 40vh;
  width: 80vw;
}
</style>
