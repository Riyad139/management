import Image from 'next/image'
import { Button } from 'evergreen-ui'
import { Iuser } from '../../@types/Iuser'

export default function InvitedMember(props: { user: Iuser; isInvite: boolean }) {
   // fetch user by company later

   return (
      <div className="flex py-1 justify-between">
         <div className="flex space-x-5">
            <div className="w-6 h-6 rounded-full">
               <Image
                  className="w-6 h-6 object-cover rounded-full"
                  height={24}
                  width={24}
                  alt=""
                  src={props.user.profilePicture}
               />
            </div>
            <p>{props.user.name}</p>
         </div>
         {props.isInvite && (
            <Button className="text-sm" size={'small'} appearance="primary">
               {' '}
               Invite
            </Button>
         )}
      </div>
   )
}
