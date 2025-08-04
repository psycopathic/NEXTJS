
import logo from "../../../public/westwood-media.png"
import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return (
        <>
         <nav className="fixed w-full h-24 shadow-xl bg-white">
           <div className="flex justify-content items-center h-full w-full px-4 2xl:px-16">
            <Link href="/">
              <Image 
              src={logo} 
              alt="Logo"
              width="205" 
              height="75" 
              className="cursor-pointer" 
              priority/>
            </Link>
            <div className=" ml-auto">
                <ul className="hidden sm:flex">
                    <Link href="/about">
                        <li className="ml-10 cursor-pointer hover:border-b text-xl">About</li>
                    </Link>
                    <Link href="/contact">
                        <li className="ml-10 cursor-pointer hover:border-b text-xl">contact</li>
                    </Link>
                    <Link href="/phone">
                        <li className="ml-10 cursor-pointer hover:border-b text-xl">phone</li>
                    </Link>
                    <Link href="/address">
                        <li className="ml-10 cursor-pointer hover:border-b text-xl">address</li>
                    </Link>
                </ul>
            </div>
           </div>
         </nav>
        </>
    )
}