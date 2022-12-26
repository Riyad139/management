import classNames from 'classnames'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
export default function TitleBarForSection(props: {
   name: string
   Handler: Dispatch<SetStateAction<boolean>>
}) {
   const [isOpen, setOpen] = useState(false)

   const localHandler = () => {
      setOpen(!isOpen)
      props.Handler(isOpen)
   }

   return (
      <div
         onClick={localHandler}
         className="w-full flex space-x-4 cursor-pointer text-gray-700 font-semibold items-center py-2 rounded-md  bg-white"
      >
         <AiFillCaretDown
            className={classNames('ml-4', isOpen ? 'rotate-0' : '-rotate-90')}
            size={22}
         />
         <div className="">
            <p className="">{props.name}</p>
         </div>
      </div>
   )
}
