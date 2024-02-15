import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className='z-30 bg-white sticky top-0 shadow-sm'>
      <div className='mx-2 xl:mx-auto py-4 max-w-6xl flex gap-1 items-center justify-between'>
        {/* Left side */}
        <div>
          {/* Logos */}
          {/* Logo for lg and larger screen */}
          <Link href='/' className='hidden lg:inline-block w-24 h-10 relative'>
            <Image
              src='./instagram_logo_text.svg'
              alt='Instagram logo'
              fill={true}
              className='object-contain'
            />
          </Link>
          {/* Logo for xs to md screen */}
          <Link href='/' className='hidden sm:inline-block lg:hidden w-10 h-10 relative'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
              alt='Instagram logo'
              fill={true}
              className='object-contain'
            />
          </Link>
        </div>

        {/* Middle */}
        <div>
          {/* Search bar */}
          <div className='relative'>
            <MagnifyingGlassIcon className='h-5 absolute top-2 left-2 text-gray-500' />
            <input type='text' placeholder='Search' className='rounded-md border-gray-500 focus:border-black focus:ring-black pl-10 bg-gray-50 text-sm'/>
          </div>
        </div>

        {/* Right Side */}
        {/* Icons and user picture */}
        <div className='flex items-center space-x-4'>
          {/* Show HomeIcon in md and larger screen */}
          <HomeIcon className='hidden md:inline-block  h-6 hover:scale-125 cursor-pointer transition-tranform duration-200 ease-out'/>
          <PlusCircleIcon className='h-6 hover:scale-125 cursor-pointer transition-tranform duration-200 ease-out'/>
          <div className='rounded-full w-10 h-10 relative cursor-pointer'>
            <Image src='https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png' alt='user-image' fill={true} className='object-contain'/>
          </div>
        </div>
      </div>
    </header>
  )
}
