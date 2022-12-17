import { red } from '@mui/material/colors'
import Chart from 'chart.js/auto'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Itask } from '../../@types/Itask'
import api from '../../library/axiosClient'

export default function ChartPie() {
   const tasks = useQuery('tasks', () => api.get<{ data: Itask[] }>('/tasks'))

   useEffect(() => {
      if (!tasks.data?.data.data) return
      let HasMp = new Map()

      for (let i = 1; i < Math.min(tasks.data.data.data.length, 4); i++) {
         for (const date of tasks.data.data.data[i].workedTime) {
            const sd = new Date(date.startTime)
            const key = new Date(date.startTime.split(' ')[0]).getTime()
            const ed = new Date(date.endTime)

            if (HasMp.has(key)) {
               const temp = HasMp.get(key)
               HasMp.set(key, temp + (new Date(ed) - new Date(sd)) / 60000)
            } else HasMp.set(key, (new Date(ed) - new Date(sd)) / 60000)
         }
      }
      console.log(HasMp)
      const it = HasMp.values()
      let data = []
      data.push(it.next().value)
      let i = 0
      while (i < HasMp.size) {
         data.push(it.next().value)
         i++
      }
      console.log(data.length)

      var config = {
         type: 'doughnut',
         data: {
            //labels: [`5%`, 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

            datasets: [
               {
                  backgroundColor: [
                     '#FF597B',
                     '#810CA8',
                     '#0014FF',
                     '#6D67E4',
                     '#F0FF42',
                     '#000000',
                     '#472D2D',
                     '#371B58',
                     '#16003B',
                     '#1E5128',
                     '#FF4C29',
                  ],
                  borderColor: 'rgb(255, 255, 255)',
                  borderWidth: 1.5,
                  data: [...data],
                  fill: false,
               },
            ],
         },
         options: {},
      }

      var ctx = document.getElementById('line-chart1')?.getContext('2d')
      let myLineChart = new Chart(ctx, config)
      window.myLine = myLineChart
      return function cleanup() {
         myLineChart.destroy()
      }
   }, [tasks])
   return (
      <>
         <div className=" flex flex-col   mb-6  rounded">
            <div className="rounded-t px-4 py-3 bg-transparent">
               <div className=" w-full">
                  <h6 className=" text-[#7780a1] mb-1 text-xs font-semibold">
                     company revenue
                  </h6>
               </div>
            </div>
            <div className="p-2">
               {/* Chart */}
               <div className="">
                  <canvas className="w-full  h-[500px]" id="line-chart1"></canvas>
               </div>
            </div>
         </div>
      </>
   )
}
