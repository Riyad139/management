import { Combobox } from 'evergreen-ui'
import { useState } from 'react'
import { BiRightArrow, BiDownArrow } from 'react-icons/bi'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
import api from '../../library/axiosClient'
import ProjectBox from './ProjectBox'
import classNames from 'classnames'
import Collapsible from 'react-collapsible'
export default function CompanyTaskSection() {
   const projects = useQuery('projects', () => api.get<Iproject[]>('/projects'))
   const [isOpen, setOpen] = useState(false)

   const ToggleHandler = () => {
      setOpen(!isOpen)
   }

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
               <div
                  id="id1"
                  onClick={ToggleHandler}
                  className="flex space-x-5 cursor-pointer items-center"
               >
                  <BiRightArrow
                     size={18}
                     className={classNames(
                        'duration-300',
                        isOpen ? 'rotate-90' : 'rotate-0'
                     )}
                  />

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

         <Collapsible open={isOpen} trigger="">
            <div className="Projects delay-100 transition-all">
               {projects.data?.data.map(pr => (
                  <div>
                     <ProjectBox project={pr} />
                  </div>
               ))}
            </div>
         </Collapsible>
      </div>
   )
}
