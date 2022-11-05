import Chart from 'chart.js/auto'
import { useEffect } from 'react'

export default function ChartBar() {
   useEffect(() => {
      var config = {
         type: 'bar',
         data: {
            labels: [
               `Tue`,
               'Wed',
               'Thu',
               'Fri',
               'Sat',
               'Sun',
               'Mon',
               `Tue`,
               'Wed',
               'Thu',
               'Fri',
               'Sat',
               'Sun',
               'Mon',
               `Tue`,
               // 'Wed',
               // 'Thu',
               // 'Fri',
               // 'Sat',
               // 'Sun',
               // 'Mon',
            ],
            datasets: [
               {
                  label: new Date().getFullYear(),
                  backgroundColor: 'rgba(255, 159, 64, 0.5)',
                  borderColor: 'rgba(255, 159, 64, 1)',
                  borderWidth: 1.5,
                  data: [
                     65, 78, 66, 44, 56, 67, 75, 65, 78, 66, 44, 56, 67, 75, 65, 78, 66,
                     44, 56, 67, 75,
                  ],
                  fill: false,
               },
               {
                  label: new Date().getFullYear() - 1,
                  fill: false,
                  backgroundColor: 'rgba(255, 159, 64, 0.1)',
                  borderColor: 'rgba(255, 159, 64, 0.3)',
                  borderWidth: 1.5,
                  data: [
                     45, 80, 60, 48, 66, 60, 55, 75, 70, 76, 34, 46, 77, 65, 60, 73, 60,
                     44, 56, 67, 75,
                  ],
               },
            ],
         },
         options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
               display: false,
               text: 'Sales Charts',
               fontColor: 'white',
            },
            legend: {
               labels: {
                  fontColor: 'white',
               },
               align: 'end',
               position: 'bottom',
            },
            tooltips: {
               mode: 'index',
               intersect: false,
            },
            hover: {
               mode: 'nearest',
               intersect: true,
            },
            scales: {
               xAxes: [
                  {
                     ticks: {
                        fontColor: 'rgba(255,255,255,.7)',
                     },
                     display: true,
                     scaleLabel: {
                        display: false,
                        labelString: 'Month',
                        fontColor: 'white',
                     },
                     gridLines: {
                        display: false,
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: 'rgba(72, 122, 180, .7);',
                        zeroLineColor: 'rgba(0, 0, 0, 0)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                     },
                  },
               ],
               yAxes: [
                  {
                     ticks: {
                        fontColor: 'rgba(255,255,255,.7)',
                     },
                     display: true,
                     scaleLabel: {
                        display: false,
                        labelString: 'Value',
                        fontColor: 'white',
                     },
                     gridLines: {
                        borderDash: [3],
                        borderDashOffset: [3],
                        drawBorder: false,
                        color: 'rgba(255, 255, 255, 0.15)',
                        zeroLineColor: 'rgba(33, 37, 41, 0)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                     },
                  },
               ],
            },
         },
      }
      var ctx = document.getElementById('line-chart')?.getContext('2d')
      let myLineChart = new Chart(ctx, config)
      window.myLine = myLineChart
      return function cleanup() {
         myLineChart.destroy()
      }
   }, [])
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
                  <canvas className="w-full  h-[500px]" id="line-chart"></canvas>
               </div>
            </div>
         </div>
      </>
   )
}
