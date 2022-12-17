import ChartBar from './ChartBar'
import ChartPie from './ChartPie'
import DatePicker from './DatePicker'
import FilterOptions from './FilterOptions'

export default function ChartSection() {
   return (
      <div className="w-full h-[500px]  ">
         <div className="hidden md:block">
            <ChartBar />
         </div>
         <div className="block md:hidden">
            <ChartPie />
         </div>
      </div>
   )
}
