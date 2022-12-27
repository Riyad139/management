import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { CgPlayButton, CgPlayPause } from 'react-icons/cg'
import { GiStopwatch } from 'react-icons/gi'
import { Itask } from '../../@types/Itask'

export default function Task(props: { task: Itask; no: number }) {
   const [isTick, setTick] = useState(props.task.isDone)
   const tickHandler = () => setTick(!isTick)
   const [isPaused, setPaused] = useState(false)

   const playController = () => {
      setPaused(!isPaused)
   }

   return (
      <div className="flex">
         <div className="flex w-[50%] py-2 bg-white border text-sm ">
            <div className="flex items-center space-x-3">
               <p className="ml-4 text-xs text-gray-500">
                  ({props.no + 1 < 10 ? '0' + (props.no + 1) : props.no + 1})
               </p>
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
         <div className="w-[10%] bg-white  flex p-1 items-center border">
            <div className="px-1 py-0.5 ml-2 border-2 flex items-center">
               <GiStopwatch size={16} color="gray" />
               <p className="ml-2 text-xs">2:40</p>
               <div onClick={playController} className=" ml-2 cursor-pointer">
                  {!isPaused && (
                     <div className="border-2 border-gray">
                        <CgPlayButton color="gray" size={18} />
                     </div>
                  )}
                  {isPaused && (
                     <div className=" bg-orange-500">
                        <CgPlayPause color="white" size={22} />
                     </div>
                  )}
               </div>
            </div>
         </div>

         <div className="w-[20%] bg-white  flex p-1 items-center border">
            <div className="flex ml-2 items-center space-x-3">
               <img
                  className="w-7 h-7 object-cover rounded-full"
                  src={'/ProfileImage/vicky.jpg'}
                  alt=""
               />
               <p className="text-sm text-gray-600 ">John Doe</p>
            </div>
         </div>
         <div className="w-[10%] bg-white  flex p-1 items-center border">
            <p className="ml-2 text-sm text-gray-600">6 June , 2023</p>
         </div>
      </div>
   )
}
