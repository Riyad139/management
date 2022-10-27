import type { NextPage } from 'next'
import Company from '../Components/Company/Index'
import SearchBar from '../Components/SearchBar'
import api from '../library/axiosClient'
import { useQuery } from 'react-query'

const Home: NextPage = () => {
   const companies = useQuery('getcompanies', () => api.get('/companies'))
   console.log(companies)

   return (
      <div className="p-2">
         <SearchBar />

         {/* @TODO typing response */}
         {companies.data?.data.map((company: any) => (
            <Company {...company} />
         ))}
      </div>
   )
}

export default Home
