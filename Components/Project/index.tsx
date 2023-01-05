import Image from 'next/image'
import pic from '../../public/DummyProjectPic/project-1.jpg'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import Worker from './Worker'
import { Iproject } from '../../@types/Iproject'

const dummyData = [1, 2, 3]

export default function Project(props: { project: Iproject }) {
   return (
      <div className=" px-5 mr-7 lg:mr-5 2xl:mr-7 space-y-5  py-6 rounded-xl w-[22rem] lg:w-[18rem] 2xl:w-[22rem] text-gray-700 bg-white">
         <div className="img ">
            <img
               src={props.project.coverImage}
               alt=""
               className="rounded-xl aspect-[16/9]"
            />
         </div>
         <div className="space-y-3">
            <p className="text-gray-800 font-bold">{props.project.name}</p>
            <p className="text-sm">
               This project needs some time to work so that this project can be done in
               time
            </p>
            <div className="tags mt-3 space-x-2 text-xs uppercase flex">
               <p className="px-3 py-2 bg-orange-100 text-orange-500 rounded-md ">
                  IOS APP
               </p>
               <p className="px-3 py-2 bg-green-100 text-green-500 rounded-md ">
                  android
               </p>
            </div>
         </div>
         <div className="flex items-center justify-between">
            <div className="text-gray-600 space-x-1  flex ">
               <p>3</p>
               <IoChatbubbleEllipsesOutline size={22} />
            </div>
            <div className="flex">
               {dummyData.map(it => (
                  <Worker />
               ))}
            </div>
         </div>
      </div>
   )
}
