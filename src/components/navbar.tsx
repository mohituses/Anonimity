'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { User } from "next-auth";
import { Button } from './ui/button';


const Navbar = () => {

  const {data: session} = useSession();
  const user: User = session?.user

  return (
    <nav className='p-4 md:p-6 shadow-md'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <a className='text-3xl font-bold mb-4 md:mb-0' href="#">Anonimity</a>
        {session ? (
          <>
            <span className="mr-4">
              Welcome, {user.username || user.email}
            </span>
            <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar