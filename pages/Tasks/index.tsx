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
import { useEffect, useState } from 'react'
import api from '../../library/axiosClient'
import Task from '../../Components/TaskPage/Task'

export default function Tasks() {
   const tasks = useQuery('Tasks', () => api.get<{ data: Itask[] }>('/tasks'))

   //if (!tasks.data?.data) return ''
   const [isOpenTodo, setOpenTodo] = useState(false)

   return (
      <div>
         <SearchBar />
         <Container>
            <TitleBar
               name="Task name"
               tags={['Task Tags']}
               hours="Hours"
               assign={{ img: '', name: 'Task assign to' }}
               date="Due Date"
            />
            <div className="todo">
               <TitleBarForSection Handler={setOpenTodo} name="To Do" />
               <Collapsible open={true} trigger="">
                  <div>
                     {tasks.data?.data.data.map((it, i) => {
                        if (it.board === 'todo') return <Task task={it} />
                     })}
                  </div>
               </Collapsible>
            </div>
         </Container>
      </div>
   )
}
