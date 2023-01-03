import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Imeetings } from '../../@types/Imeetings'
import { useState } from 'react'
import CalenderModal from './CalendarModal'
import classNames from 'classnames'
import * as diff from 'fast-array-diff'
import MeetingDetails from './MeetingsDetails'

export default function Calender(props: { meetings: Imeetings[] }) {
   const initDays: Date[] = props.meetings.map(mt => new Date(mt.meetingDate))

   const [days, setDays] = useState(initDays)

   const [isClicked, setCliked] = useState<undefined | Date>()

   const [isSelectedDate, setSlectedDate] = useState<undefined | Date>()

   const handler = (date: Date[]) => {
      console.log(date.length)
      console.log(date)
      if (date.length < days.length) {
         const selectedDate = diff.diff(days, date).removed[0]
         console.log(selectedDate)
         setSlectedDate(selectedDate)
      } else setCliked(date[date.length - 1])
   }

   return (
      <div className={'py-6 1xl:px-5 px-0 my-10 relative rounded-lg shadow-sm bg-white'}>
         {isClicked && (
            <CalenderModal setDay={setDays} setModal={setCliked} date={isClicked} />
         )}
         {isSelectedDate && (
            <MeetingDetails
               setSelectedDateHandler={setSlectedDate}
               date={isSelectedDate}
            />
         )}
         <div className={classNames('div ', isClicked ? 'blur-md' : '')}>
            <DayPicker mode="multiple" min={1} selected={days} onSelect={handler} />
         </div>
      </div>
   )
}
