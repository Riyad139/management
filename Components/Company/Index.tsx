import Image from 'next/image'
import Container from '../Layout/Container'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { LinearProgress } from '@mui/material'
import CompanyMember from './CompanyMember'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ICompany } from '../../@types/ICompany'
import api from '../../library/axiosClient'
import { Iuser } from '../../@types/Iuser'
import { Iproject } from '../../@types/Iproject'

export default function Company(company: ICompany) {
   const [isFavourite, setFavourite] = useState(false)
   const memberIds = company.members.map(mem => mem.userId)
   const projectIds = company.projects
   const userRes = useQuery('users', () =>
      api.get<Iuser[]>('/users', { data: { userIds: memberIds } })
   )
   const projectRes = useQuery('projects', () =>
      api.get<Iproject[]>('/projects', { data: { projectId: projectIds } })
   )

   const favouriteHandler = () => {
      setFavourite(!isFavourite)
   }

   return (
      <Container>
         <div className="w-full xl:w-[19rem] 1xl:w-[21rem] shadow-sm py-7 pl-5 pr-1 rounded-2xl bg-white">
            {/* // top part */}
            <div className="flex justify-between items-center">
               <div className="flex space-x-3">
                  <div className="w-11 cursor-pointer flex justify-center items-center h-11 rounded-full">
                     <Image
                        src={company.logoUrl}
                        alt=""
                        width={42}
                        className="object-cover"
                        height={42}
                     />
                  </div>
                  <div className="cursor-pointer">
                     <p className="text-lg">{company.name}</p>
                     <p className="text-xs text-gray-600 font-medium">{company.domain}</p>
                  </div>
               </div>

               <div
                  onClick={favouriteHandler}
                  className="flex space-x-1 pr-3 items-center cursor-pointer justify-center"
               >
                  {!isFavourite && <AiOutlineStar size={25} />}
                  {isFavourite && <AiFillStar size={25} color={'#FFBF00'} />}
                  {/* <div className="w-8 flex items-center justify-center  h-8 rounded-full cursor-pointer hover:bg-slate-50">
              <BsThreeDotsVertical color={"gray"} size={22} />
            </div> */}
               </div>
            </div>
            {/* // top part ends here  */}
            {/* priority section start */}
            <div className=" text-sm justify-between flex mt-8 mb-5 pr-4">
               <div className="px-2 py-1 text-gray-400 border bg-slate-50 rounded-md">
                  <p className="uppercase font-semibold">in progress</p>
               </div>
               <div className="px-2 py-1 text-orange-500 border border-orange-500 rounded-md">
                  <p className="uppercase">{projectRes.data?.data[0].priority}</p>
               </div>
            </div>
            {/* priority ends here */}
            {/* task starts here */}
            <div className="pr-5 space-y-5">
               <p className="text-sm text-gray-600">
                  task done : {projectRes.data?.data[0].taskDone}/
                  {projectRes.data?.data[0].totalTask}
               </p>
               <div className="">
                  <LinearProgress className='!z-5' variant="determinate" value={50} />
               </div>
            </div>
            {/* task starts here */}
            {/* tags */}
            <div className="mt-4 flex text-xs space-x-3">
               <div className="px-3 border border-green-300 text-green-600 bg-green-50 rounded-md py-1 ">
                  <p className="uppercase ">{projectRes.data?.data[0].tags[0]}</p>
               </div>
               <div className="px-3 border border-blue-300 text-blue-600 bg-blue-50 py-1 rounded-md ">
                  <p className="uppercase ">{projectRes.data?.data[0].tags[1]}</p>
               </div>
            </div>
            {/* tags */}
            {/* members */}
            <div className="flex ml-2 mt-5">
               {userRes.data?.data.map((it, i) => (
                  <CompanyMember key={`company__` + i} img={it.profilePicture} />
               ))}
               <div className="w-9 h-9 p-1 -ml-3 flex justify-center items-center text-xs text-gray-500 border bg-white rounded-full">
                  5+
               </div>
            </div>

            {/* members */}
            <div className="mt-7 px-4 py-2 border rounded-md border-orange-300 bg-orange-50 text-orange-600 inline-block">
               <p className="uppercase text-xs ">
                  due date : {projectRes.data?.data[0].dueDate}
               </p>
            </div>
         </div>
      </Container>
   )
}
