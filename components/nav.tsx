"use client"

import Link from "next/link"
import { NavProps } from "@/types"

export const Nav =({ links }: NavProps) => {
  return (
    <div className="group flex flex-col gap-4 py-7 pl-5">
      <div className="flex flex-col gap-1 justify-center">
        {links.map((link, index) =>
            <Link
              key={index}
              href={link.href}
              className={
                `${link.isActive && "active relative bg-[#425C5A] text-black"}  
                 flex justify-start items-center gap-2 pl-4 pr-10 py-3 rounded-l-3xl w-full text-sm z-50`
              }
            >
              <link.icon className="text-[#C99C33] mr-2 h-5 w-5" />
              {link.title}
              {link.label && (
                <span className="text-background">
                  {link.label}
                </span>
              )}
            </Link>
        )}
      </div>
    </div>
  )
}