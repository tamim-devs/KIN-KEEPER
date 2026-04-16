import Image from "next/image";
import Logo from "@/assets/logo.png"
import Link from "next/link";
import MyLink from "@/components/navbar/MyLink";
import { FaChartLine, FaHome } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

const Navbar = () => {
  const menu = [
    {name: "Home",
      link: "/",
      icon: <FaHome />
    },{
      name: "Timeline",
      link: "/timeline",
      icon:<IoTimeSharp />
    },{
      name: "Stats",
      link: "/stats",
      icon: <FaChartLine />
    }
  ]
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <Image src={Logo} alt="logo" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-3">
      {menu.map((item, index)=>
      <li  key={index}>
        <MyLink href={item.link}>
        <span className="flex items-center gap-2">
          {item.icon}
          {item.name}
        </span>
      </MyLink>
      </li>)
      }
      
    </ul>
  </div>
</div>

    </div>
  )
}

export default Navbar