import SearchBar from '../../Components/SearchBar'
import Project from '../../Components/Project'
import Container from '../../Components/Layout/Container'
const dummyData = [1, 2, 3]
export default function Projects() {
   return (
      <div className="w-full h-[100vh] overflow-y-hidden">
         <SearchBar />
         <Container>
            <div className="flex space-x-10">
               <div className="space-y-6">
                  <p className="font-semibold">Working . . .</p>
                  <div className=" overflow-y-auto   max-h-[82vh]">
                     <div className=" flex space-y-6 flex-col  h-auto ">
                        {dummyData.map(it => (
                           <Project />
                        ))}
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <p className="font-semibold">In Progress . . .</p>
                  <div className=" overflow-y-auto   max-h-[82vh]">
                     <div className=" flex space-y-6 flex-col  h-auto ">
                        {dummyData.map(it => (
                           <Project />
                        ))}
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <p className="font-semibold">Completed</p>
                  <div className=" overflow-y-auto   max-h-[82vh]">
                     <div className=" flex space-y-6 flex-col  h-auto ">
                        {dummyData.map(it => (
                           <Project />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}
