'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


const MyLink = ({href,children }) => {
    const pathName = usePathname()
  return (
   <Link className={` ${
     pathName === href ? "bg-green-900  text-white text-2xl" : "hover:bg-gray-200 text-2xl f"
   }`} href={href}>
     {children }
   </Link>
  )
}

export default MyLink