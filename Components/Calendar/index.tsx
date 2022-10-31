import Card from '../Card'
import React from 'react'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Imeetings } from '../../@types/Imeetings'
import { useEffect, useState } from 'react'
import CalenderModal from './CalendarModal'
import classNames from 'classnames'

export default function Calender(props: { meetings: Imeetings[] }) {
   const initDays: Date[] = props.meetings.map(mt => new Date(mt.meetingDate))

   const [days, setDays] = useState(initDays)
   const [isClicked, setCliked] = useState<undefined | Date>()

   const handler = (date: Date[]) => {
      setCliked(date[date.length - 1])
   }

   return (
      <div className={'p-5 my-10 relative rounded-lg shadow-sm bg-white'}>
         {isClicked && (
            <CalenderModal setDay={setDays} setModal={setCliked} date={isClicked} />
         )}
         <div className={classNames('div ', isClicked ? 'blur-md' : '')}>
            <DayPicker mode="multiple" min={1} selected={days} onSelect={handler} />
         </div>
      </div>
   )
}
