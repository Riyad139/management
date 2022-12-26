import classNames from 'classnames'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Itask } from '../../@types/Itask'

export default function Task(props: { task: Itask }) {
   const [isTick, setTick] = useState(props.task.isDone)
   const tickHandler = () => setTick(!isTick)
   return (
      <div className="flex">
         <div className="flex w-[50%] py-2 bg-white border text-sm ">
            <div className="flex items-center space-x-3">
               <p className="ml-4 text-xs text-gray-500">(0{1})</p>
               {isTick && (
                  <BsCheckCircleFill
                     onClick={tickHandler}
                     size={24}
                     color="green"
                     className="bg-green cursor-pointer"
                  />
               )}
               {!isTick && (
                  <AiOutlineCheckCircle
                     onClick={tickHandler}
                     size={24}
                     color="gray"
                     className="cursor-pointer"
                  />
               )}
               <p className={classNames('text-gray-600', isTick ? 'line-through  ' : '')}>
                  {props.task.name}
               </p>
            </div>
         </div>
         <div className="w-[10%] border items-center flex  bg-white">
            <div className="flex text-xs space-x-2 items-center ml-2 justify-center ">
               <p className="p-1 uppercase  bg-orange-100 text-orange-400 ">Android</p>
               <p className="p-1 uppercase  bg-green-100 text-green-400 ">IOS</p>
               <p className="p-1 px-2 text-gray-500 border-2">2+</p>
            </div>
         </div>
      </div>
   )
}
