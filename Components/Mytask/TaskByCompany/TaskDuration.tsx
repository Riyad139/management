import { Itask } from '../../../@types/Itask'
import { GiStopwatch } from 'react-icons/gi'
import { CgPlayButton, CgPlayPause } from 'react-icons/cg'
import { useState } from 'react'
import classNames from 'classnames'
export default function TaskDuration(props: { task: Itask }) {
   const [isPaused, setPaused] = useState(false)
   const playController = () => {
      setPaused(!isPaused)
   }
   return (
      <div
         className={classNames(
            'flex border-l-4 border-b px-3 border-b-gray-100   py-2 text-sm justify-between',
            isPaused ? 'bg-orange-50 w-[100%]  border-orange-600' : ' border-white '
         )}
      >
         <div className="flex text-sm justify-center items-center space-x-5">
            <GiStopwatch size={16} color="gray" />
            <p>{props.task.name}</p>
         </div>
         <div onClick={playController} className="cursor-pointer">
            {!isPaused && (
               <div className="border-2 border-gray">
                  <CgPlayButton color="gray" size={21} />
               </div>
            )}
            {isPaused && (
               <div className=" bg-orange-500">
                  <CgPlayPause color="white" size={25} />
               </div>
            )}
         </div>
         {/* <AiOutlineCheckCircle size={24} color="gray" /> */}
      </div>
   )
}
