<template>
    <Bubble :data="chartData" :options="chartOptions" class="q-mb-md" />
</template>

<script setup>
import { ref } from 'vue'
import { Bubble } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale)

const chartData = ref({
    datasets: [
        {
            label: 'Bubble Dataset',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
                { x: 25, y: 50, r: 20 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'test Dataset',
            data: [
                { x: 80, y: 48, r: 15 },
                { x: 10, y: 15, r: 17 },
                { x: 25, y: 60, r: 26 },
            ],
            backgroundColor: '#FFDCA9',
            borderColor: '#FFDCA9',
            borderWidth: 1,
        }
    ]
})

const chartOptions = ref({
    responsive: true,
})
</script>

<style lang="scss" scoped>
.chart-container {
    position: relative;
    margin: auto;
    height: 40vh;
    width: 80vw;
}
</style>
