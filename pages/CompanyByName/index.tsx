import SearchBar from '../../Components/SearchBar'
import api from '../../library/axiosClient'
import { useQuery } from 'react-query'
import ChartSection from '../../Components/Chart'
import CompanyTaskSection from '../../Components/CompanyTask'

export default function CompanyByName() {
   const companies = useQuery('getcompanies', () => api.get('/companies'))
   return (
      <div>
         <SearchBar />
         <div className="mb-40">
            <ChartSection />
         </div>
         <CompanyTaskSection />
      </div>
   )
}
