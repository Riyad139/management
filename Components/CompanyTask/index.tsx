import { Combobox } from 'evergreen-ui'
import { BiRightArrow } from 'react-icons/bi'
export default function CompanyTaskSection() {
   return (
      <div className="mx-5 bg-white py-5 px-4 my-3">
         <div className="flex space-x-3">
            <div>
               <Combobox
                  openOnFocus
                  width={200}
                  height={40}
                  items={['UI/UX', 'IOS Development', 'Design', 'Dashboard']}
                  onChange={selected => console.log(selected)}
                  placeholder="Project"
               />
            </div>
            <div>
               <Combobox
                  openOnFocus
                  width={200}
                  height={40}
                  items={['19 Jun 2023', '22 Dec 2022', '29 Jan 2023', '30 Jan 2023']}
                  onChange={selected => console.log(selected)}
                  placeholder="Time"
               />
            </div>
         </div>
         <div className="py-3 flex border-b justify-between text-sm text-gray-600">
            <div>
               <div className="flex space-x-2 items-center">
                  <BiRightArrow size={18} rotate={180} />
                  <p className="upper">Title</p>
               </div>
            </div>
            <div>
               <div className="flex space-x-5">
                  <div className="flex space-x-2 items-center">
                     <p className="upper">Duration</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                     <p className="upper">Percentage</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="tasks"></div>
      </div>
   )
}
