import { Itask } from '../../@types/Itask'
import { BsCheckCircleFill } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
export default function TaskBox(props: { task: Itask[] }) {
   return (
      <div>
         {props.task.map((ts, i) => (
            <div className=" py-3 pl-2 -pr-20 flex space-x-5 text-sm text-gray-600">
               <div className="flex mt-0.5 justify-center">
                  {ts.isDone && (
                     <BsCheckCircleFill
                        className="text-[1.30rem] sm:text-lg"
                        color={'green'}
                     />
                  )}
                  {!ts.isDone && (
                     <AiOutlineCheckCircle
                        className="text-[1.46rem] sm:text-lg"
                        color={'gray'}
                     />
                  )}
               </div>
               <div className="  sm:space-y-0 sm:flex w-full justify-between">
                  <p className="text-base sm:text-sm">{ts.name}</p>
                  <p className=" text-[12px] sm:text-sm">{ts.deadLine}</p>
               </div>
            </div>
         ))}
      </div>
   )
}
