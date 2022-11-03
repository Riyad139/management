import {
   BsFillPeopleFill,
   BsFillPersonFill,
   BsFolderFill,
   BsTagFill,
} from 'react-icons/bs'
export default function FilterOptions() {
   return (
      <div className=" flex bg-white items-center text-gray-600 py-3 px-5 mx-4 -mt-4 rounded-b-2xl space-x-4 text-sm">
         <p className="font-medium text-base">filter by : </p>
         <div className="flex items-center space-x-1">
            <BsFillPeopleFill size={20} />
            <p>Team</p>
         </div>
         <div className="flex items-center space-x-1">
            <BsFillPersonFill size={20} />
            <p>Client</p>
         </div>
         <div className="flex items-center space-x-1">
            <BsFolderFill size={20} />
            <p>Projects</p>
         </div>
         <div className="flex items-center space-x-1">
            <BsTagFill size={20} />
            <p>Tag</p>
         </div>
      </div>
   )
}
