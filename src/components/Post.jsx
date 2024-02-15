import React from 'react'
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <section className='my-7 border rounded-md bg-white'>
      {/* User Info */}
      <div className='p-5 flex items-center'>
          <div className='mr-3 rounded-full border p-1 w-12 h-12 relative overflow-hidden'>
            <Image src={userImg} alt={username} fill={true} className='object-cover'/>
          </div>
          <p className='flex-1 font-bold'>{username}</p>
          <EllipsisHorizontalIcon className='h-5'/>
      </div>

      {/* Image */}
      <div className='h-[40rem] relative'>
        <Image src={img} alt='' fill={true} className='object-cover'  />
      </div>

      {/* Buttons */}
      <div className=' p-4 flex justify-between'>
          <div className='flex space-x-4'>
            <HeartIcon className='btn'/>
            <ChatBubbleOvalLeftEllipsisIcon className='btn'/>
          </div>
          <BookmarkIcon className='btn'/>
      </div>

      {/* Image Caption */}
      <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

      {/* Input comment */}
      <form className='p-4 flex items-center'>
        <FaceSmileIcon className='h-7'/>
        <input className='border-none flex-1 focus:ring-0'  type='text' placeholder='Enter your comment...'/>
        <button className='text-blue-400 font-bold'>Post</button>
      </form>
    </section>
  );
}