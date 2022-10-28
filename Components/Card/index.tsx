import { ReactNode } from 'react'

export default function Card(props: { children: ReactNode }) {
   return (
      <div className="w-[350px] my-10 shadow-sm py-7 pl-5 px-3 rounded-2xl bg-white">
         {props.children}
      </div>
   )
}
