import { Button } from 'evergreen-ui'
import { GiStopwatch } from 'react-icons/gi'
import { useQuery } from 'react-query'
import { Iuser } from '../../@types/Iuser'
import api from '../../library/axiosClient'
import InvitedMember from './InvitedMember'
export default function MeetingDetails(props: {
   date: Date
   setSelectedDateHandler: any
}) {
   const users = useQuery('users', () => api.get<Iuser[]>('/users'))
   const addHandler = () => {
      props.setSelectedDateHandler(undefined)
   }
   return (
      <div className="w-full space-y-4 rounded-md -ml-5 -mt-5 py-5 px-4  shadow-sm absolute bg-white z-10">
         <div>
            <p className="font-semibold">Meetings</p>
            <div className="space-y-2 text-gray-600 text-sm py-3">
               {/* will add dynamic later */}
               <div className="flex py-1 justify-between border-b">
                  <p>meetings for next projects</p>
                  <GiStopwatch size={14} />
               </div>
               <div className="flex py-1 justify-between border-b">
                  <p>meetings for next UI/UX</p>
                  <GiStopwatch size={14} />
               </div>
               <div className="flex py-1 justify-between border-b">
                  <p>meetings for All problems</p>
                  <GiStopwatch size={14} />
               </div>
               {/* will add dynamic later */}
            </div>
            <div className="text-sm space-y-3">
               <p className="font-semibold text-base">Invited Members :</p>
               <div>
                  {users.data?.data.map(
                     (us, i) => i < 4 && <InvitedMember isInvite={false} user={us} />
                  )}
               </div>
            </div>
         </div>
         <div>
            <Button
               onClick={addHandler}
               marginRight={16}
               appearance="primary"
               intent="none"
            >
               Okay
            </Button>
         </div>
      </div>
   )
}
