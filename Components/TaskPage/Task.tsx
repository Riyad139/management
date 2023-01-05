import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { CgPlayButton, CgPlayPause } from 'react-icons/cg'
import { GiStopwatch } from 'react-icons/gi'
import { Itask } from '../../@types/Itask'
import { IoIosArrowDown } from 'react-icons/io'
import Collapsible from 'react-collapsible'
import { Button, SelectMenu } from 'evergreen-ui'

export default function Task(props: { task: Itask; no: number }) {
   const [isTick, setTick] = useState(props.task.isDone)
   const tickHandler = () => setTick(!isTick)
   const [isPaused, setPaused] = useState(false)
   const [isOpen, setOpen] = useState(false)

   const playController = () => {
      setPaused(!isPaused)
   }

   return (
      <div className="mx-5">
         <div className=" grid grid-cols-12">
            <div className="flex w-full col-start-1 col-end-13 md:col-end-7 lg:col-end-5  py-2 bg-white border text-sm ">
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
               </div>
               <div className="flex ml-2 items-center w-full  justify-between ">
                  <div className="">
                     <p
                        onClick={() => setOpen(!isOpen)}
                        className={classNames(
                           'text-gray-600 cursor-pointer ',
                           isTick ? 'line-through  ' : ''
                        )}
                     >
                        {props.task.name}
                        <p className="text-xs text-gray-500 block md:hidden">
                           23 June,2023
                        </p>
                     </p>
                  </div>
                  <div className=" flex justify-center  items-center  border  mr-2  md:hidden">
                     <p className="ml-2 text-xs">2:40</p>
                     <div onClick={playController} className=" ml-2  cursor-pointer">
                        {!isPaused && (
                           <div className=" border-l ">
                              <CgPlayButton color="gray" size={30} />
                           </div>
                        )}
                        {isPaused && (
                           <div className=" bg-orange-500 border-l border-white">
                              <CgPlayPause color="white" size={30} />
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-start-5 col-end-7 hidden lg:flex border items-center    bg-white">
               <div className="flex text-xs  items-center ml-2 flex-wrap gap-2 py-2   ">
                  <p className="p-1 uppercase  bg-orange-100 text-orange-400 ">Android</p>
                  <p className="p-1 uppercase  bg-green-100 text-green-400 ">IOS</p>
                  <p className="p-1 px-2   text-gray-500 border-2">2+</p>
               </div>
            </div>
            <div className="col-start-7 col-end-9 bg-white hidden md:flex p-1 items-center border">
               <div className="px-1 py-0.5 ml-2 border-2 flex items-center">
                  <GiStopwatch size={16} color="gray" />
                  <p className="ml-2 text-xs">2:40</p>
                  <div onClick={playController} className=" ml-2  cursor-pointer">
                     {!isPaused && (
                        <div className=" border-l ">
                           <CgPlayButton color="gray" size={30} />
                        </div>
                     )}
                     {isPaused && (
                        <div className=" bg-orange-500 border-l border-white">
                           <CgPlayPause color="white" size={30} />
                        </div>
                     )}
                  </div>
               </div>
            </div>

            <div className="col-start-9 col-end-11 bg-white  hidden md:flex p-1 items-center border">
               <div className="flex  ml-2 items-center space-x-3">
                  <img
                     className="w-7 h-7 shrink-0   object-cover rounded-full"
                     src={'/ProfileImage/vicky.jpg'}
                     alt=""
                  />

                  <p className="text-sm  line-clamp-1  text-gray-600 ">John Doe</p>
               </div>
            </div>
            <div className="col-start-11 col-end-13 bg-white  hidden md:flex p-1 items-center border">
               <p className="ml-2 text-sm text-gray-600">6 June , 2023</p>
            </div>
         </div>
         <Collapsible open={isOpen} trigger="">
            <div className="bg-white w-full px-5 py-4">
               <div className="flex  gap-2 items-center rounded-full">
                  <p className="text-sm text-gray-500">Assigned to:</p>
                  <img
                     className="w-6 object-cover h-6 rounded-full"
                     src={'/ProfileImage/vicky.jpg'}
                  />
                  <p className="text-sm ">Robin Hood</p>
                  <SelectMenu
                     title="Select user"
                     options={[
                        {
                           label: 'Apple',
                           value: 'Apple',
                           icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Malus-Boskoop_organic.jpg',
                        },
                        {
                           label: 'Banana',
                           value: 'Banana',
                           icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg',
                        },
                     ]}
                  >
                     <Button className="border-none">
                        <IoIosArrowDown size={14} className="" />
                     </Button>
                  </SelectMenu>
               </div>
               <div className="">
                  <p className="text-sm  text-gray-600 pt-2">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas
                     recusandae commodi? Quae beatae accusamus laudantium vitae doloribus
                     enim unde quas tenetur
                  </p>
               </div>
            </div>
         </Collapsible>
      </div>
   )
}
