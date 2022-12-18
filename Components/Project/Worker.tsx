import Image from 'next/image'
import pic from '../../public/ProfileImage/vicky.jpg'
export default function Worker() {
   return (
      <div className="flex w-9 h-9 -ml-2">
         <Image
            src={pic}
            className="w-9 h-9 border     object-cover rounded-full"
            alt=""
         />
      </div>
   )
}
