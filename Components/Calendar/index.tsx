import Card from '../Card'
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from 'react-date-range'
import { Imeetings } from '../../@types/Imeetings'

export default function Calender(props: { meetings: Imeetings[] }) {
   const range = props.meetings.map(mt => {
      const obg = {
         startDate: new Date(mt.meetingDate),
         endDate: new Date(mt.meetingDate),
         key: 'selection',
      }
      return obg
   })
   if (!range) return null
   console.log(range)

   return (
      <div className="p-5 my-10 rounded-lg shadow-sm bg-white">
         <DateRange date ranges={range} />
      </div>
   )
}
