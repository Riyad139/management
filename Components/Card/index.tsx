import { ReactNode } from 'react'

export default function Card(props: { children: ReactNode }) {
   return (
      <div className="w-full xl:w-[19rem] 1xl:w-[21rem] my-10 shadow-sm py-7 pl-5 px-3 rounded-2xl bg-white">
         {props.children}
      </div>
   )
}
