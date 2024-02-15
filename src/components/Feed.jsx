import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <main className='mx-auto md:max-w-6xl grid grid-cols-1 md:grid-cols-3'>
        <section className='md:col-span-2'>
            <Stories/>
            <Posts />
        </section>

        <section className='hidden md:inline-grid md:col-span-1'>
          <div className='fixed w-[380px]'>
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
    </main>
  )
}
