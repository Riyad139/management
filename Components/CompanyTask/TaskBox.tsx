import { Itask } from '../../@types/Itask'
import { AiFillFile } from 'react-icons/ai'
export default function TaskBox(props: { task: Itask[] }) {
   return (
      <div>
         {props.task.map(
            (ts, i) =>
               i != 0 && (
                  <div className="border-b py-2 pl-3 pr-20 flex text-sm text-gray-600 justify-between">
                     <div className="flex justify-center space-x-5">
                        <AiFillFile size={14} />
                        <p>{ts.name}</p>
                     </div>
                     <div>
                        <p>{ts.deadLine}</p>
                     </div>
                  </div>
               )
         )}
      </div>
   )
}
