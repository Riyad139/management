import { useState } from 'react'
import Collapsible from 'react-collapsible'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
import { Itask } from '../../@types/Itask'
import { IoIosArrowDown } from 'react-icons/io'

import api from '../../library/axiosClient'
import TaskBox from './TaskBox'
import classNames from 'classnames'

export default function ProjectBox(props: { project: Iproject }) {
   const [isOpen, setOpen] = useState(false)
   const [isOpenProject, setOpenProject] = useState(false)

   //will add dynamic later
   const taskFromProject = useQuery('Tasks', () =>
      api.get<{ completedTask: number; data: Itask[] }>('/tasks')
   )
   console.log(taskFromProject.data?.data)
   if (!taskFromProject.data?.data) return null

   return (
      <div>
         <div
            onClick={() => setOpen(!isOpen)}
            className=" border-b cursor-pointer text-gray-600 py-3 items-center flex"
         >
            <div className="flex items-center justify-center space-x-3 text-sm">
               <div className="p-1 flex justify-center items-center h-9 w-9 border rounded-full">
                  {taskFromProject.data?.data.data.length}
               </div>
            </div>
            <div className="sm:flex ml-4 justify-between w-full">
               <p className="font-semibold">{props.project.name}</p>
               <p className="text-sm ">{props.project.dueDate}</p>
            </div>
            <div onClick={() => setOpenProject(!isOpenProject)}>
               <IoIosArrowDown
                  className={classNames(
                     'mx-3 visible sm:hidden ',
                     isOpenProject || isOpen ? 'rotate-180' : ''
                  )}
                  size={20}
               />
            </div>
         </div>
         <Collapsible open={isOpen} trigger="">
            <div className="Projects delay-100 transition-all">
               <div className="border-b">
                  <TaskBox task={taskFromProject.data.data.data} />
               </div>
            </div>
         </Collapsible>
      </div>
   )
}
