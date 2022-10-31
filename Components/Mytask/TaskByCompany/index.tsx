import { ICompany } from '../../../@types/ICompany'
import { Itask } from '../../../@types/Itask'

import TaskDuration from './TaskDuration'

export default function TaskByCompany(props: { company: ICompany[]; tasks: Itask[] }) {
   return (
      <div className="bg-white rounded-lg py-5">
         {props.company?.map((it, i) => (
            <div className="py-2">
               <div className="text-lg font-semibold px-5 ">
                  <p>{it.name}</p>
               </div>
               <div>
                  {props.tasks?.map((it, i) => i < 3 && <TaskDuration task={it} />)}
               </div>
            </div>
         ))}
      </div>
   )
}
