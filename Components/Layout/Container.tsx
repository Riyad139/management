import { ReactNode } from 'react'

export default function Container(props: { children: ReactNode }) {
   return <div className=" my-10">{props.children}</div>
}
