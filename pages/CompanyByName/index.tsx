import SearchBar from '../../Components/SearchBar'
import api from '../../library/axiosClient'
import { useQuery } from 'react-query'

export default function CompanyByName() {
   const companies = useQuery('getcompanies', () => api.get('/companies'))
   return (
      <div>
         <SearchBar />
      </div>
   )
}
