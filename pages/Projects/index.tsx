import SearchBar from '../../Components/SearchBar'
import Project from '../../Components/Project'
import Container from '../../Components/Layout/Container'
import api from '../../library/axiosClient'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
import { useState } from 'react'
import { Combobox } from 'evergreen-ui'
import classNames from 'classnames'
import SideBarComponent from '../../Components/SideBar/SideBarComponent'
const dummyData = [1, 2, 3]
export default function Projects() {
   const project = useQuery('projects', () => api.get<Iproject[]>('/projects'))
   const [selectedComp, setSelectedComp] = useState('')
   const [selectedComp1, setSelectedComp1] = useState('working')
   const [selectedComp2, setSelectedComp2] = useState('In progress')

   if (!project.data?.data) return ''

   return (
      <div className="flex flex-col lg:flex-row">
         <SideBarComponent />
         <div className="w-full lg:order-2  h-[100vh] overflow-y-hidden">
            <SearchBar />

            <Container>
               <div className={'flex order-2 space-x-0 px-4 md:space-x-2 lg:space-x-6 '}>
                  <div
                     className={classNames(
                        '',
                        selectedComp === 'working' || selectedComp === ''
                           ? 'block'
                           : 'hidden md:block'
                     )}
                  >
                     <div className="w-32  pt-0 pb-4 block xl:hidden xl:py-0  ">
                        <Combobox
                           openOnFocus
                           width="100%"
                           height={40}
                           items={['working', 'In progress', 'completed']}
                           onChange={selected => setSelectedComp1(selected)}
                           placeholder={selectedComp1}
                        />
                     </div>
                     <p className="font-semibold hidden xl:block mb-5">Working </p>
                     <p className="font-semibold xl:hidden mb-5">{selectedComp1} </p>
                     <div className=" overflow-y-auto max-h-[74vh]  sm:max-h-[72vh] xl:max-h-[82vh]">
                        <div className=" flex space-y-6 xl:hidden flex-col  h-auto ">
                           {project.data.data.map(pr => {
                              if (pr.projectStatus === selectedComp1)
                                 return <Project project={pr} />
                           })}
                        </div>
                        <div className=" hidden space-y-6 flex-col  xl:flex  h-auto ">
                           {project.data.data.map(pr => {
                              if (pr.projectStatus === 'working')
                                 return <Project project={pr} />
                           })}
                        </div>
                     </div>
                  </div>
                  <div
                     className={classNames(
                        '',
                        selectedComp === 'In progress' ? 'block ' : 'hidden xl:block',
                        selectedComp === 'working' || selectedComp === ''
                           ? 'hidden md:block'
                           : ''
                     )}
                  >
                     <div className="w-32 pb-4 hidden md:block xl:hidden">
                        <Combobox
                           openOnFocus
                           width="100%"
                           height={40}
                           items={['working', 'In progress', 'completed']}
                           onChange={selected => setSelectedComp2(selected)}
                           placeholder={selectedComp2}
                        />
                     </div>
                     <p className="font-semibold hidden xl:block mb-5">In progess </p>

                     <p className="font-semibold block xl:hidden mb-5">
                        {selectedComp2 + ' . . .'}{' '}
                     </p>
                     <div className=" overflow-y-auto max-h-[74vh]  sm:max-h-[72vh] xl:max-h-[82vh]">
                        <div className=" flex space-y-6 flex-col xl:hidden  h-auto ">
                           {project.data.data.map(pr => {
                              if (pr.projectStatus === selectedComp2)
                                 return <Project project={pr} />
                           })}
                        </div>
                        <div className=" hidden space-y-6 flex-col  xl:flex  h-auto ">
                           {project.data.data.map(pr => {
                              if (pr.projectStatus === 'In progress')
                                 return <Project project={pr} />
                           })}
                        </div>
                     </div>
                  </div>
                  <div
                     className={classNames(
                        '',
                        selectedComp === 'Completed' ? 'block' : 'hidden xl:block'
                     )}
                  >
                     <p className="font-semibold mb-5 ">Completed</p>
                     <div className=" overflow-y-auto   max-h-[82vh]">
                        <div className=" flex space-y-6 flex-col  h-auto ">
                           {project.data.data.map(pr => {
                              if (pr.projectStatus === 'completed')
                                 return <Project project={pr} />
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   )
}
