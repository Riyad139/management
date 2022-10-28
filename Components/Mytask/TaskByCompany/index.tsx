import { ICompany } from '../../../@types/ICompany'
import { Itask } from '../../../@types/Itask'
import Card from '../../Card'
import { GiSandsOfTime } from 'react-icons/gi'
import TaskDuration from './TaskDuration'

export default function TaskByCompany(props: { company: ICompany[]; tasks: Itask[] }) {
   return (
      <Card>
         {props.company?.map((it, i) => (
            <div className="py-2">
               <div>
                  <p>{it.name}</p>
               </div>
               <div>
                  {props.tasks?.map((it, i) => i < 3 && <TaskDuration task={it} />)}
               </div>
            </div>
         ))}
      </Card>
   )
}
