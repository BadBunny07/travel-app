import Link from "next/Link"
import Image from "next/image"
import {NAV_LINKS} from "@/constants"
import Button from "./Button"
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-2 border-green-800 flexBetween max-container
    padding-container relative z-30 py-5">
    <Link href="/">
      <Image src="/hilink-logo.svg" alt="logo" width={84} height={35} />
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-green-50 flexCenter cursor-pointer pb-1.5 transition-all
          hover:font-bold">
            {link.label}
          </Link>
        ))}
    </ul>
    <div className="lg:flexCenter hidden">
      <button className="flex flex-row gap-2 bg-green-90 hover:bg-black cursor-pointer rounded-full text-white text-xl ml-5 font-bold px-6 py-4 hover:text-green-50 transition duration-600">
        <FaRegUser size={25}/>
        Login
      </button>
    </div>
    <Image
    src="menu.svg"
    alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"
    />
    </nav>
  )
}

export default Navbar;