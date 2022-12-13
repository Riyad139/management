import { useState } from 'react'
import Collapsible from 'react-collapsible'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
import { Itask } from '../../@types/Itask'
import api from '../../library/axiosClient'
import TaskBox from './TaskBox'

export default function ProjectBox(props: { project: Iproject }) {
   const [isOpen, setOpen] = useState(false)
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
            className="border-b cursor-pointer text-gray-600 py-2 items-center justify-between flex"
         >
            <div className="flex items-center justify-center space-x-3 text-sm">
               <div className="p-1 flex justify-center items-center h-9 w-9 border rounded-full">
                  {taskFromProject.data?.data.data.length}
               </div>
               <p>{props.project.name}</p>
            </div>
            <div className="flex space-x-16">
               <p>{props.project.dueDate}</p>
               <p>
                  {Math.ceil(
                     taskFromProject.data?.data.completedTask /
                        (taskFromProject.data?.data.data.length - 1)
                  )}
                  %
               </p>
            </div>
         </div>
         <Collapsible open={isOpen} trigger="">
            <div className="Projects delay-100 transition-all">
               <div>
                  <TaskBox task={taskFromProject.data.data.data} />
               </div>
            </div>
         </Collapsible>
      </div>
   )
}
