import { useQuery } from 'react-query'
import { Itask } from '../../@types/Itask'
import api from '../../library/axiosClient'
import Card from '../Card'
import TaskName from './TaskName'
export default function Mytask(props: { taskType: string; tasks: Itask[] }) {
   // todo  Add userId
   // const taskRes = useQuery('tasks', () => api.get<Itask[]>('/tasks'))

   return (
      <Card>
         <p className="text-lg font-medium">
            {props.taskType}{' '}
            <span className="text-sm font-normal text-gray-600">(05)</span>{' '}
         </p>
         <div className="mt-5">
            {props.tasks?.map((it, i) => (
               <TaskName key={'taskId_--_' + i} task={it} no={i + 1} />
            ))}
         </div>
      </Card>
   )
}
