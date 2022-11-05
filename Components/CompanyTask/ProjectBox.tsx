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
   const taskFromProject = useQuery('Tasks', () => api.get<Itask[]>('/tasks'))
   if (!taskFromProject.data?.data) return null

   const handler = () => {
      setOpen(!isOpen)
   }

   return (
      <div>
         <div
            onClick={() => setOpen(!isOpen)}
            className="border-b cursor-pointer text-gray-600 py-2 items-center justify-between flex"
         >
            <div className="flex items-center space-x-3 text-sm">
               <div className="p-2 border rounded-full">
                  {taskFromProject.data?.data.length}
               </div>
               <p>{props.project.name}</p>
            </div>
            <div className="flex space-x-16">
               <p>{props.project.dueDate}</p>
               <p>
                  {Math.ceil(
                     taskFromProject.data?.data[0].completedTask /
                        (taskFromProject.data?.data.length - 1)
                  )}
                  %
               </p>
            </div>
         </div>
         <Collapsible open={isOpen} trigger="">
            <div className="Projects delay-100 transition-all">
               <div>
                  <TaskBox task={taskFromProject.data.data} />
               </div>
            </div>
         </Collapsible>
      </div>
   )
}
