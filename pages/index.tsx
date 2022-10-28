import type { NextPage } from 'next'
import Company from '../Components/Company/Index'
import SearchBar from '../Components/SearchBar'
import api from '../library/axiosClient'
import { useQuery } from 'react-query'
import Mytask from '../Components/Mytask'
import { Itask } from '../@types/Itask'
import TaskByCompany from '../Components/Mytask/TaskByCompany'

const Home: NextPage = () => {
   const companies = useQuery('getcompanies', () => api.get('/companies'))
   const taskRes = useQuery('tasks', () => api.get<Itask[]>('/tasks'))
   
   if (!taskRes.data?.data) return null

   return (
      <div className="p-2">
         <SearchBar />

         {/* @TODO typing response */}
         <div className="flex space-x-5">
            <div>
               {companies.data?.data.map((company: any) => (
                  <Company {...company} />
               ))}
            </div>
            <div>
               <Mytask taskType="My Task" tasks={taskRes.data.data} />
               <TaskByCompany company={companies.data?.data} tasks={taskRes.data?.data} />
            </div>
         </div>
      </div>
   )
}

export default Home
