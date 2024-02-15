'use client'

import 'minifaker/locales/en';
import minifaker from 'minifaker';
import { useEffect, useState } from 'react';
import Story from './Story';

export default function Stories() {
  const [storyUsers, setSoryUsers] = useState([]);

  useEffect(() => {
    /* Generate 20 random users */
    const users = minifaker.array(20, index => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      /* Take random picture from 1 to 70 */
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: index,
    }))

    setSoryUsers(users);
  }, [])

  return (
    <div className='border border-gray-200 mt-8 p-6 flex space-x-2 bg-white   overflow-x-scroll rounded-sm scrollbar-none'>
      {storyUsers.map(user => (
        <Story key={user.id} username={user.username} imgSrc={user.img} />
      ))}
    </div>
  );
}