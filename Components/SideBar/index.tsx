import { IoGridOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCalendarDay, BsFillGearFill, BsGear } from 'react-icons/bs'
import { IoIosTimer } from 'react-icons/io'
import { useState } from 'react'
import classNames from 'classnames'
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

export default function SideBar() {
   const router = useRouter()
   const value = router.pathname.split('/')[1]
   console.log({ value, path: router.pathname.split('/') })
   const routerHandler = (str: string) => {
      if (str === 'dash') Router.push('/')
      if (str === 'project') Router.push('/Projects')
      if (str === 'task') Router.push('/Tasks')
   }

   return (
      <div className="lg:min-h-[100vh]   1-ml-2 lg:ml-0 w-[100%] lg:w-auto flex fixed lg:relative top-[90%] sm:top-[89%]  lg:top-0 z-100 border  lg:shadow-none lg:border-none lg:block bg-white px-5  lg:px-0 py-0 lg:py-5 lg:rounded-3xl">
         <div className="w-full hidden  lg:flex justify-center mt-4 bg-white">
            <img className="w-9 " src="/Logo/SideLogo.svg" />
         </div>
         <div className="uppercase w-full py-3  flex lg:block text-gray-600 justify-between items-center gap-2 whitespace-nowrap text-xs sm:text-sm font-normal lg:my-14   ">
            <div
               onClick={() => routerHandler('dash')}
               className={classNames(
                  'flex w-[25%] lg:w-auto cursor-pointer flex-col    lg:border-none py-3 lg:py-5  pr-4 pl-7 lg:pr-[5rem] lg:flex-row gap-y-2 items-center gap-x-5 ',
                  value === '/' || value === ''
                     ? ' text-orange-600 lg:bg-orange-200 lg:text-gray-800 '
                     : 'border-white'
               )}
            >
               <IoGridOutline size={20} />
               <p className="">DashBoard</p>
            </div>
            <div
               onClick={() => routerHandler('project')}
               className={classNames(
                  'flex w-[25%] lg:w-auto cursor-pointer flex-col    lg:border-none py-3 lg:py-5  pr-4 pl-7 lg:pr-[5rem] lg:flex-row gap-y-2 items-center gap-x-5 ',
                  value === 'Projects'
                     ? ' text-orange-600 lg:bg-orange-200 lg:text-gray-800'
                     : 'border-white'
               )}
            >
               <MdWorkOutline size={21} />
               <p className="">Projects</p>
            </div>
            <div
               onClick={() => routerHandler('task')}
               className={classNames(
                  'flex w-[25%] lg:w-auto cursor-pointer flex-col    lg:border-none py-3 lg:py-5  pr-4 pl-7 lg:pr-[5rem] lg:flex-row gap-y-2 items-center gap-x-5 ',
                  value === 'Tasks'
                     ? ' text-orange-600 lg:bg-orange-200 lg:text-gray-800'
                     : 'border-white'
               )}
            >
               <GiHamburgerMenu size={20} />
               <p className="">Tasks</p>
            </div>
            <div
               onClick={() => routerHandler('calender')}
               className={classNames(
                  'flex w-[25%] lg:w-auto cursor-pointer flex-col    lg:border-none py-3 lg:py-5  pr-4 pl-7 lg:pr-[5rem] lg:flex-row gap-y-2 items-center gap-x-5 ',
                  value === 'calender'
                     ? ' text-orange-600 lg:bg-orange-200 lg:text-gray-800'
                     : 'border-white'
               )}
            >
               <BsCalendarDay size={20} />
               <p className="">Calender</p>
            </div>

            <div
               onClick={() => routerHandler('settings')}
               className={classNames(
                  'hidden w-[25%] lg:w-auto sm:flex cursor-pointer flex-col    lg:border-none py-3 lg:py-5  pr-4 pl-7 lg:pr-[5rem] lg:flex-row gap-y-2 items-center gap-x-5 ',
                  value === 'settings'
                     ? ' text-orange-600 lg:bg-orange-200 lg:text-gray-800'
                     : 'border-white'
               )}
            >
               <BsGear size={22} />
               <p className="">Settings</p>
            </div>
         </div>
      </div>
   )
}
