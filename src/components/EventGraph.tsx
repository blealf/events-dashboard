/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { Chart, ChartItem, registerables } from 'chart.js';
import { useTheme } from '../Context/ThemeProvider';

const EventGraph = () => {
  const [redraw, setRedraw] = useState(false)

  const { darkMode } = useTheme()

  const chartData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '',
      data: [680, 960, 790, 420, 1000, 580, 845, 370, 840, 650, 990, 600],
      backgroundColor: '#8576FF',
      borderWidth: 0
    }]
  }), [])

  const chartOptions = useMemo(() => ({
    responsive: true,
    // don't show label
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        offset: true,
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#fff' : '#64748B'
        },
        grid: {
          display: darkMode, 
          color: '#E2E8F0',
          drawTicks: false,
          tickLength: 0,
          tickBorderDashOffset: true,
          
        },
        border: {
          draw: false,
          dash: [5, 5]
        },
        barPercentage: 0.9,  // Adjust the space between bars
        categoryPercentage: 0.8 
      },
      y: {
        beginAtZero: true,
        suggestedMin: 200,
        suggestedMax: 1000,
        ticks: {
          color: darkMode ? '#fff' : '#64748B',
          dashOffset: 10
        },
        grid: {
          display: darkMode, 
          color: '#E2E8F0',
          drawTicks: false,
          tickLength: 0,
          tickBorderDashOffset: true,
        },
        border: {
          dash: [5, 5]
        },
      }
    }
  }), [darkMode])

  useEffect(() => {
    const ctx = document.getElementById('myChart') as ChartItem
    Chart.register(...registerables)
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      // @ts-expect-error type
      options: chartOptions,
    });
    myChart.update()
    return () => {
      Chart.unregister(...registerables)
      myChart.destroy()
    }
    setRedraw(false)
  }, [redraw, chartData, chartOptions])

  useEffect(() => {
    let timeout: any = null;
    const handleResize = () => {
      if(timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        setRedraw(true)
      }, 1000)

    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="">
      <h2 className="mb-[6px] text-lg leading-[16px] font-[500] text-text-light dark:text-text-dark"
      >Events Registrations per month</h2>
      <div className="">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  )
}

export default EventGraph