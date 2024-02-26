"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

import { users } from "@/data/users"
import { userInfo } from "@/data/user"

import { 
  MdFlight,
  MdOutlineDashboard,
  MdOutlineSettings,
} from "react-icons/md"
import { TfiWallet } from "react-icons/tfi"
import { TbReportSearch } from "react-icons/tb"
import { FiPieChart } from "react-icons/fi"
import { TiThMenu } from "react-icons/ti"
import { IoCloseOutline } from "react-icons/io5"

import { Nav } from "@/components/nav"
import { UserProfile } from "@/components/user-profile"
import { ActiveUsers } from "@/components//active-users"
import { Button } from "./ui/button"

export const Sidebar = () => {

  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState)
  }

  return (
    <div>
       <Button size="sm" 
         className="fixed top-6 right-7 xl:hidden lg:hidden z-50 bg-[#425C5A] hover:bg-[#425C5A]/90"
         onClick={toggleSidebar}
       >
          {isCollapsed ? <TiThMenu className="h-4 w-4" /> : <IoCloseOutline className="h-4 w-4" />}
        </Button>
        <aside 
         data-collapsed={isCollapsed}
         className="lg:block fixed lg:static  
         data-[collapsed=true]:hidden lg:data-[collapsed=true]:block
         h-full lg:h-screen w-full xl:w-max lg:w-max overflow-y-auto z-40"
        >
         <nav className="h-full flex flex-col border-r shadow-sm bg-[#425C5A] rounded-r-[30px] text-white">
          <div>
            <UserProfile
             email={userInfo?.email}
             fullName={userInfo?.fullName}
             picture={userInfo?.picture}
            />
            <Nav  
             links={[
               {
                 title: "Dashboard",
                 href: "/",
                 icon: MdOutlineDashboard,
                 isActive: (pathname === "/" ? true : false),
               },
               {
                 title: "Flights",
                 href: "/flights",
                 icon: MdFlight,
                 isActive: (pathname === "/flights" ? true : false),
               },
               {
                 title: "Wallet",
                 href: "/wallet",
                 icon: TfiWallet,
                 isActive: (pathname === "/wallet" ? true : false),
               },
               {
                 title: "Reports",
                 href: "/reports",
                 icon: TbReportSearch,
                 isActive: (pathname === "/reports" ? true : false),
               },
               {
                 title: "Statistics",
                 href: "/statistics",
                 icon: FiPieChart,
                 isActive: (pathname === "/statistics" ? true : false),
               },
               {
                 title: "Settings",
                 href: "/settings",
                 icon: MdOutlineSettings,
                 isActive: (pathname === "/settings" ? true : false),
               },
               
             ]}
            />
            <ActiveUsers
             usersLength={4}
             users={users}
            />
          </div>
         </nav>
        </aside>
    </div>
  )
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.")
}

