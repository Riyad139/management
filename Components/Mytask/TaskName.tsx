import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Itask } from '../../@types/Itask'

export default function TaskName(props: { task: Itask; no: number }) {
   if (props.task.isDone) {
      return (
         <div className="flex py-2 border-b text-sm justify-between">
            <div className="flex space-x-7">
               <p>0{props.no}</p>
               <p className="line-through text-gray-600">{props.task.name}</p>
            </div>
            <BsCheckCircleFill size={22} color="green" className="bg-green" />
         </div>
      )
   }

   return (
      <div className="flex border-b py-2 text-sm justify-between">
         <div className="flex space-x-7">
            <p>0{props.no}</p>
            <p>{props.task.name}</p>
         </div>
         <AiOutlineCheckCircle size={24} color="gray" />
      </div>
   )
}
