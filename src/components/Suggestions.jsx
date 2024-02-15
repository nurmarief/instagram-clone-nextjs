'use client'

import minifaker from 'minifaker'
import 'minifaker/locales/en'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    /* Generate 5 random users */
    const users = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      /* Take one random image from 1 to 70 */
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      jobTitle: minifaker.jobTitle(),
      id: i,
    }))
    setSuggestions(users)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='mb-5 flex justify-between text-sm'>
        <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>
      {suggestions.map(suggestion =>(
        /* Individual user */
        <div className='mt-3 flex items-center justify-between'>
          <div className='border rounded-full p-[2px] w-10 h-10 relative overflow-hidden'>
            <Image src={suggestion.img} alt={suggestion.username} fill={true} className='object-contain' />
          </div>
          <div className='ml-4 flex-1'>
              <p className='font-semibold text-sm'>{suggestion.username}</p>
              <p className='w-[230px] text-sm text-gray-400 truncate'>{suggestion.jobTitle}</p>
          </div>
          <button className='font-semibold text-blue-400 text-sm'>Follow</button>
        </div>
      ))}
    </div>
  )
}