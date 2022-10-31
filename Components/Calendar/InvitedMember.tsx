import Image from 'next/image'
import { Button } from 'evergreen-ui'
import { Iuser } from '../../@types/Iuser'

export default function InvitedMember(props: { user: Iuser }) {
   // fetch user by company later

   return (
      <div className="flex py-1 justify-between">
         <div className="flex space-x-5">
            <div className="w-9 h-9 rounded-full">
               <Image
                  className="w-9 h-9 object-cover rounded-full"
                  height={32}
                  width={32}
                  alt=""
                  src={props.user.profilePicture}
               />
            </div>
            <p>{props.user.name}</p>
         </div>
         <Button appearance="primary"> Invite</Button>
      </div>
   )
}
