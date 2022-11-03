import ChartBar from './ChartBar'
import DatePicker from './DatePicker'
import FilterOptions from './FilterOptions'

export default function ChartSection() {
   return (
      <div className="w-full h-[500px] bg-[#f7f6f4] ">
         <FilterOptions />
         <ChartBar />
      </div>
   )
}
