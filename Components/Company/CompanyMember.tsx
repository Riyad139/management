import Image from 'next/image'
export default function CompanyMember(props: { img: string }) {
   return (
      <div className="w-9 h-9 flex items-center justify-center  -ml-3 border-2 border-white bg-white rounded-full">
         <img
            className="rounded-full w-8 h-8 border-2 border-white object-cover"
            src={props.img}
            alt=""
         />
      </div>
   )
}
