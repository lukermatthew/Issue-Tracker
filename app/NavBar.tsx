import Link from 'next/link'
import React from 'react'
import { AiOutlineIssuesClose } from "react-icons/ai";

const NavBar = () => {

  const links = [
    { label: "Dashboard", href: "/"},
    { label: "Issues", href: "/issues"}
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiOutlineIssuesClose /></Link>
        <ul className='flex space-x-6'>
          {links.map(link => (
            <li>
              <Link className="text-zinc-500 hover:text-zinc-800" key={link.href} href={link.href}>{link.label}</Link>
            </li>
          ))}
           
           
        </ul>
    </nav>
  )
}

export default NavBar