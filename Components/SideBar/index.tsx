import { IoGridOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCalendarDay, BsFillGearFill, BsGear } from 'react-icons/bs'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlinePieChart } from 'react-icons/ai'

export default function SideBar() {
   return (
      <div className="lg:h-full  -ml-2 lg:ml-0 w-[100%] lg:w-auto flex fixed lg:relative top-[89%] sm:top-[86%]  lg:top-0 z-100 border shadow-sm lg:shadow-none lg:border-none lg:block bg-white px-2  lg:px-5  py-0 lg:py-5 lg:rounded-3xl">
         <div className="w-full hidden  lg:flex justify-center mt-4 bg-white">
            <img className="w-9 " src="/Logo/SideLogo.svg" />
         </div>
         <div className="uppercase w-full flex lg:block text-gray-600 justify-between items-center gap-2 whitespace-nowrap text-xs sm:text-sm font-medium lg:my-14 pl-2 pr-2 lg:pr-10">
            <div className="flex flex-col gap-y-2 lg:gap-y-0  lg:flex-row items-center gap-x-5 my-4">
               <IoGridOutline size={20} />
               <p className="hidden sm:block">DashBoard</p>
            </div>
            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center gap-x-5 my-9">
               <MdWorkOutline size={21} />
               <p className="hidden sm:block">Projects</p>
            </div>
            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center gap-x-5 my-9">
               <GiHamburgerMenu size={20} />
               <p className="hidden sm:block">Tasks</p>
            </div>
            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center gap-x-5 my-9">
               <BsCalendarDay size={20} />
               <p className="hidden sm:block">Calender</p>
            </div>

            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center gap-x-5 my-9">
               <BsGear size={22} />
               <p className="hidden sm:block">Settings</p>
            </div>
         </div>
      </div>
   )
}
