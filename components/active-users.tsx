import Image from "next/image"

import { ActiveUsersProps } from "@/types"

export const ActiveUsers = ({
  users,
  usersLength
}: ActiveUsersProps) => {
  const visibleUsers = users.slice(0, usersLength)
  const remainingUsers = users.slice(usersLength)

  return (
    <div className="px-10">
      <h3 className="text-[#C99C33] text-sm">Active users</h3>
      <div className="flex -space-x-3 mt-4">
        {visibleUsers.map((user) => (
          <div
            key={user.email}
            className="inline-block w-10 h-10 rounded-full border-[3px] border-[#425C5A] overflow-hidden"
          >
            <Image
              src={user.picture || '/pic.jpeg'}
              alt={user.fullName}
              width="100"
              height="100"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {remainingUsers.length > 0 && (
          <div className="w-10 h-10 rounded-full border-[3px] border-[#425C5A] overflow-hidden flex justify-center items-center bg-[#C99C33]">
            <span className="text-xs">+{remainingUsers.length}</span>
          </div>
        )}
      </div>
    </div>
  )
}
