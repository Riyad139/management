import type { NextPage } from 'next'
import Company from '../Components/Company/Index'
import SearchBar from '../Components/SearchBar'
import api from '../library/axiosClient'
import { useQuery } from 'react-query'
import Mytask from '../Components/Mytask'
import { Itask } from '../@types/Itask'
import TaskByCompany from '../Components/Mytask/TaskByCompany'
import Calender from '../Components/Calendar'
import { Imeetings } from '../@types/Imeetings'
import { useEffect } from 'react'
import SideBar from '../Components/SideBar'
import SideBarComponent from '../Components/SideBar/SideBarComponent'

const Home: NextPage = () => {
   const companies = useQuery('getcompanies', () => api.get('/companies'))
   const taskRes = useQuery('tasks', () => api.get<{ data: Itask[] }>('/tasks'))
   const meetings = useQuery('meetings', () => api.get<Imeetings[]>('/meetings'))

   if (!taskRes.data?.data.data || !meetings.data?.data) return <div>Error</div>

   return (
      <div className=" flex flex-col lg:flex-row">
         <SideBarComponent />
         <div className="w-full order-1 lg:order-2">
            <SearchBar />

            {/* @TODO typing response */}
            <div className="flex gap-x-5  md:gap-x-7 px-4  sm:mx-0 flex-wrap">
               <div className="w-full sm:w-[48%] xl:w-auto">
                  {companies.data?.data.map((company: any) => (
                     <Company {...company} />
                  ))}
               </div>
               <div className="w-full sm:w-[48%] xl:w-auto">
                  <Mytask taskType="My Task" tasks={taskRes.data.data.data} />
                  <TaskByCompany
                     company={companies.data?.data}
                     tasks={taskRes.data?.data.data}
                  />
               </div>
               <div>
                  <Calender meetings={meetings.data?.data} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
