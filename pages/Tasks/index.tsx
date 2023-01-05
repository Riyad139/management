import axios from 'axios'
import { useQuery } from 'react-query'
import { Itask } from '../../@types/Itask'
import Container from '../../Components/Layout/Container'
import SearchBar from '../../Components/SearchBar'
import TitleBar from '../../Components/TaskPage/TitleBar'
import { AiFillCaretDown } from 'react-icons/ai'
import TitleBarForSection from '../../Components/TaskPage/TitleBarForSection'
import Collapsible from 'react-collapsible'
import TaskBox from '../../Components/CompanyTask/TaskBox'
import TaskName from '../../Components/Mytask/TaskName'
import { useEffect, useMemo, useState } from 'react'
import api from '../../library/axiosClient'
import Task from '../../Components/TaskPage/Task'
import { AiOutlinePlus } from 'react-icons/ai'
import TaskModal from '../../Components/TaskPage/TaskModal'
import TaskAddModal from '../../Components/TaskPage/TaskAddModal'
import SideBarComponent from '../../Components/SideBar/SideBarComponent'

export default function Tasks() {
   const tasks = useQuery('Tasks', () => api.get<{ data: Itask[] }>('/tasks'))

   const [isOpenTodo, setOpenTodo] = useState(true)
   const [isOpenWorking, setOpenWorking] = useState(true)
   const [isOpenCompleted, setOpenCompleted] = useState(true)
   const [modal, setModal] = useState(false)

   const todoData = useMemo(() => {
      return tasks.data?.data.data.filter(it => it.board === 'todo')
   }, [tasks])
   const workingData = useMemo(() => {
      return tasks.data?.data.data.filter(it => it.board === 'working')
   }, [tasks])
   const completedData = useMemo(() => {
      return tasks.data?.data.data.filter(it => it.board === 'completed')
   }, [tasks])

   if (!todoData || !workingData || !completedData) return

   return (
      <div>
         {modal && (
            <TaskModal>
               <TaskAddModal Handler={setModal} />
            </TaskModal>
         )}
         <div className="flex lg:flex-row flex-col ">
            <SideBarComponent />

            <div className="lg:order-2 order-1 w-full">
               <SearchBar />

               <Container>
                  <TitleBar
                     name="Task name"
                     tags={['Task Tags']}
                     hours="Hours"
                     assign={{ img: '', name: 'Task assign to' }}
                     date="Due Date"
                  />
                  <div className="space-y-6">
                     <div className="todo">
                        <TitleBarForSection
                           Handler={setOpenTodo}
                           isOpen={isOpenTodo}
                           name="To Do"
                           total={todoData?.length}
                        />
                        <Collapsible open={isOpenTodo} trigger="">
                           <div>
                              {todoData?.map((it, i) => {
                                 if (it.board === 'todo') return <Task no={i} task={it} />
                              })}

                              <div
                                 onClick={() => setModal(true)}
                                 className="flex cursor-pointer mx-5 space-x-4 bg-white py-2 text-sm items-center"
                              >
                                 <AiOutlinePlus className="ml-14" />
                                 <p className="text-gray-600">Add New</p>
                              </div>
                           </div>
                        </Collapsible>
                     </div>
                     <div className="working">
                        <TitleBarForSection
                           Handler={setOpenWorking}
                           isOpen={isOpenWorking}
                           name="Working"
                           total={workingData?.length}
                        />
                        <Collapsible open={isOpenWorking} trigger="">
                           <div>
                              {workingData?.map((it, i) => {
                                 if (it.board === 'working')
                                    return <Task no={i} task={it} />
                              })}
                           </div>
                           <div className="flex space-x-4 mx-5 bg-white cursor-pointer py-2 text-sm items-center">
                              <AiOutlinePlus className="ml-14" />
                              <p className="text-gray-600">Add New</p>
                           </div>
                        </Collapsible>
                     </div>
                     <div className="completed">
                        <TitleBarForSection
                           Handler={setOpenCompleted}
                           isOpen={isOpenCompleted}
                           name="Completed"
                           total={completedData?.length}
                        />
                        <Collapsible open={isOpenCompleted} trigger="">
                           <div>
                              {completedData?.map((it, i) => {
                                 if (it.board === 'completed')
                                    return <Task no={i} task={it} />
                              })}
                           </div>
                        </Collapsible>
                     </div>
                  </div>
               </Container>
            </div>
         </div>
      </div>
   )
}
