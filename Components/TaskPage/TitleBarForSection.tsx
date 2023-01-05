import classNames from 'classnames'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
export default function TitleBarForSection(props: {
   name: string
   Handler: Dispatch<SetStateAction<boolean>>
   isOpen: boolean
   total: number
}) {
   return (
      <div
         onClick={() => props.Handler(!props.isOpen)}
         className=" mx-5 flex space-x-4 cursor-pointer text-gray-700 font-semibold items-center py-2 rounded-md  bg-white"
      >
         <AiFillCaretDown
            className={classNames('ml-4', props.isOpen ? 'rotate-0' : '-rotate-90')}
            size={22}
         />
         <div className="flex space-x-2 items-center">
            <p className="">{props.name}</p>
            <p className="text-sm font-normal">
               ( {props.total < 10 ? '0' + props.total : props.total})
            </p>
         </div>
      </div>
   )
}
