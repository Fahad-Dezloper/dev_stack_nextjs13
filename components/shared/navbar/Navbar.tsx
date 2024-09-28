"use client"
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Theme from './Theme'
import MobileNav from './MobileNav'
import GlobarSearch from '../search/GlobarSearch'

const Navbar = () => {
  return (
      <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
          <Link href="/" className='flex items-center gap-1'>
              <Image
                src="/assets/images/logo-min-2.svg"
                width={30}
                height={30}
                alt='DevFlow'  
              />

              <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>Dev 
                  <span className='text-primary-500'> Stack</span>
              </p>
              </Link>
    
              <GlobarSearch />          
    
              <div className="flex-between gap-5">
                  <Theme />

                <SignedIn>  
                      <UserButton
                      appearance={{
                          elements: {
                              avatarBox: 'h-10 w-10'
                              },
                              variables: {
                              colorPrimary: '#ff7000'
                          }
                            }}
                      />
                </SignedIn>

        {/* mobileNav */}
        <MobileNav />
              </div>
    </nav>
  )
}

export default Navbar