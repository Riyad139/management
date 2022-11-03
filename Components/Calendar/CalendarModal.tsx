import { TextInput, Button } from 'evergreen-ui'
import { useQuery } from 'react-query'
import { Iuser } from '../../@types/Iuser'
import api from '../../library/axiosClient'
import InvitedMember from './InvitedMember'

export default function CalenderModal(props: { setModal: any; setDay: any; date: Date }) {
   const addHandler = () => {
      props.setDay(day => day.concat(props.date))
      props.setModal(undefined)
   }
   const cancelHandler = () => {
      props.setModal(undefined)
   }
   const users = useQuery('users', () => api.get<Iuser[]>('/users'))

   return (
      <div className="w-full rounded-lg space-y-4 -ml-5 -mt-5 py-5 px-4  shadow-sm absolute bg-white z-10">
         <p className="text-lg text-gray-800 font-semibold">Create meeting</p>
         <div className="space-y-4">
            <div>
               <TextInput name="text-input-name" placeholder="Meeting title" />
            </div>
            <div className="space-x-4">
               <TextInput name="text-input-name" placeholder="Meeting description" />
            </div>
         </div>
         <div>
            <p>Invite members</p>
            <div className="py-3">
               {users.data?.data.map(
                  (us, i) => i < 4 && <InvitedMember isInvite={true} user={us} />
               )}
            </div>
         </div>
         <div>
            <Button
               onClick={addHandler}
               marginRight={16}
               appearance="primary"
               intent="none"
            >
               Add
            </Button>
            <Button
               onClick={cancelHandler}
               marginRight={16}
               className="bg-black text-white"
               intent="none"
            >
               cancel
            </Button>
         </div>
      </div>
   )
}
