import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Itask } from '../../@types/Itask'

export default function TaskName(props: { task: Itask; no: number }) {
   const [isTick, setTick] = useState(props.task.isDone)
   const tickHandler = () => setTick(!isTick)
   if ((props.task.isDone && isTick) || isTick) {
      return (
         <div className="flex py-2 border-b text-sm justify-between">
            <div className="flex space-x-7">
               <p>0{props.no}</p>
               <p className="  line-through  text-gray-600">{props.task.name}</p>
            </div>
            <BsCheckCircleFill
               onClick={tickHandler}
               size={24}
               color="green"
               className="bg-green cursor-pointer"
            />
         </div>
      )
   }

   return (
      <div className="flex border-b py-2 text-sm justify-between">
         <div className="flex space-x-7">
            <p>0{props.no}</p>
            <p>{props.task.name}</p>
         </div>
         <AiOutlineCheckCircle
            onClick={tickHandler}
            size={24}
            color="gray"
            className="cursor-pointer"
         />
      </div>
   )
}
