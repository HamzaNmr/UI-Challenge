import Image from "next/image"

import { UserInfoProps } from "@/types"


export const UserProfile = ({
  email,
  fullName,
  picture,
}: UserInfoProps) => {
  return (
    <div className="bg-[#3D5654] rounded-tr-[30px] min-w-max">
       <div className="p-10 px-14 flex flex-col justify-center items-center">
       <div className="rounded-full w-14 h-14 overflow-hidden">
         <Image 
           src={picture || '/pic.jpg'} 
           width="100" 
           height="100" 
           alt={fullName}
           className="object-cover w-full h-full"
         />
        </div>
        <div className="flex flex-col space-y-3 mt-3 text-center">
          <p className="text-[1.1rem] leading-none uppercase">{fullName}</p>
          <p className="text-[0.7rem] font-light leading-none">{email}</p>
        </div>
       </div>
    </div>
  )
}
