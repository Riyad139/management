import SearchBar from '../../Components/SearchBar'
import Project from '../../Components/Project'
import Container from '../../Components/Layout/Container'
import api from '../../library/axiosClient'
import { useQuery } from 'react-query'
import { Iproject } from '../../@types/Iproject'
const dummyData = [1, 2, 3]
export default function Projects() {
   const project = useQuery('projects', () => api.get<Iproject[]>('/projects'))

   if (!project.data?.data) return ''

   return (
      <div className="w-full h-[100vh] overflow-y-hidden">
         <SearchBar />
         <Container>
            <div className="flex space-x-10">
               <div className="space-y-6">
                  <p className="font-semibold">Working . . .</p>
                  <div className=" overflow-y-auto   max-h-[82vh]">
                     <div className=" flex space-y-6 flex-col  h-auto ">
                        {project.data.data.map(pr => {
                           if (pr.projectStatus === 'working')
                              return <Project project={pr} />
                        })}
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <p className="font-semibold">In Progress . . .</p>
                  <div className=" overflow-y-auto   max-h-[82vh]">
                     <div className=" flex space-y-6 flex-col  h-auto ">
                        {project.data.data.map(pr => {
                           if (pr.projectStatus === 'In progress')
                              return <Project project={pr} />
                        })}
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <p className="font-semibold">Completed</p>
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
   )
}
