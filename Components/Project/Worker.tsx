import Image from 'next/image'
import pic from '../../public/ProfileImage/vicky.jpg'
export default function Worker() {
   return (
      <div className=" w-9 h-9 border-2 bg-white border-white rounded-full -ml-3  ">
         <Image
            src={pic}
            className="w-8 h-8 border-2 border-white object-cover rounded-full"
            alt=""
         />
      </div>
   )
}
