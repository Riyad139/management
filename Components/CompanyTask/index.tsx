import { Combobox } from 'evergreen-ui'
import { useMemo, useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { BsArrowDown } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
import api from '../../library/axiosClient'
import ProjectBox from './ProjectBox'
import classNames from 'classnames'
import Collapsible from 'react-collapsible'
import { compareAsc } from 'date-fns'

export default function CompanyTaskSection() {
   const [isOpen, setOpen] = useState(false)
   const [sortedBy, setSortedBy] = useState('duration')
   const [filterdby, setFirlterdby] = useState('')
   const [filterdbyTime, setFirlterdbyTime] = useState('')

   const projects = useQuery('projects', () => api.get<Iproject[]>('/projects'))
   const newData = useMemo(() => {
      const data = projects.data?.data.sort(function (a, b) {
         return (
            compareAsc(new Date(a.dueDate), new Date(b.dueDate)) *
            (sortedBy == 'duration' ? 1 : -1)
         )
      })
      console.log(data)
      return data
   }, [projects.data, sortedBy])

   const filterdData = useMemo(() => {
      if (!newData) return
      if (filterdby == '' || filterdby == 'All') return newData
      const data = newData.filter(it => it.tags.indexOf(filterdby) != -1)
      return data
   }, [projects, filterdby])

   const filterdDataByTime = useMemo(() => {
      if (!filterdData) return
      if (filterdbyTime == '' || filterdbyTime == 'All') return filterdData
      const data = filterdData?.filter(it => it.dueDate == filterdbyTime)
      return data
   }, [projects, filterdbyTime])

   const tags = useMemo(() => {
      if (!projects.data?.data) return
      let data = []
      for (const Data of projects.data?.data) {
         for (const val of Data.tags) {
            if (data.indexOf(val) == -1) data.push(val)
         }
      }
      return data
   }, [projects])
   const dueTime = useMemo(() => {
      if (!projects.data?.data) return
      let data = []
      for (const Date of projects.data.data) {
         if (data.indexOf(Date.dueDate) == -1) data.push(Date.dueDate)
      }
      return data
   }, [projects])

   if (!projects.data?.data || !newData || !tags || !dueTime) return null

   const ToggleHandler = () => {
      setOpen(!isOpen)
   }
   const SortByDateHandler = () => {
      setSortedBy(it => (it === 'duration' ? '-duration' : 'duration'))
   }

   return (
      <div className="mx-5 bg-white py-5 px-4 my-3">
         <div className="flex  space-x-3">
            <div className="w-28 md:w-56">
               <Combobox
                  openOnFocus
                  width="100%"
                  height={40}
                  items={['All', ...tags]}
                  onChange={selected => setFirlterdby(selected)}
                  placeholder="Project"
               />
            </div>
            <div className="w-28 md:w-56">
               <Combobox
                  openOnFocus
                  width="100%"
                  height={40}
                  items={['All', ...dueTime]}
                  onChange={selected => setFirlterdbyTime(selected)}
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
                  {' '}
                  <div className="w-9 p-1 h-9 flex justify-center items-center border rounded-full">
                     <BiRightArrow
                        size={18}
                        className={classNames(
                           'duration-300',
                           isOpen ? 'rotate-90' : 'rotate-0'
                        )}
                     />
                  </div>
                  <p className="upper">Title</p>
               </div>
            </div>
            <div>
               <div className="flex space-x-5 ">
                  <div
                     onClick={SortByDateHandler}
                     className="sm:flex hidden sm:visible space-x-1 cursor-pointer justify-center  items-center"
                  >
                     <BsArrowDown
                        size={14}
                        className={classNames(
                           'duration-300',
                           sortedBy == '-duration' ? 'rotate-180' : 'rotate-0'
                        )}
                     />
                     <p className="upper">Duration</p>
                  </div>
               </div>
            </div>
         </div>

         <Collapsible open={isOpen} trigger="">
            <div className="Projects delay-100 transition-all">
               {filterdDataByTime?.map(pr => (
                  <div>
                     <ProjectBox project={pr} />
                  </div>
               ))}
            </div>
         </Collapsible>
      </div>
   )
}
