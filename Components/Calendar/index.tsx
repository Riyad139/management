import Card from '../Card'
import React from 'react'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Imeetings } from '../../@types/Imeetings'
import { useEffect, useState } from 'react'

export default function Calender(props: { meetings: Imeetings[] }) {
   const initDays: Date[] = props.meetings.map(mt => new Date(mt.meetingDate))

   const [days, setdays] = useState(initDays)

   // if (subRange != null) range.push(subRange)

   return (
      <div className="p-5 my-10 rounded-lg shadow-sm bg-white">
         <DayPicker mode="multiple" min={1} selected={days} onSelect={setdays} />
      </div>
   )
}
