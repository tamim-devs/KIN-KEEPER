'use client'

import { useContext } from "react"
import { FriendContext } from '@/context/FriendsContext';

export default function TimelinePage() {
  const { timeline } = useContext(FriendContext)

  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold mb-5'>Timeline</h1>

      {timeline.length === 0 ? (
        <p>No activity yet</p>
      ) : (
        <div className='space-y-4'>
          {timeline.map((item, index) => (
            <div key={index} className='p-4 bg-base-200 rounded-lg shadow'>
              <p className='font-bold'>{item.type}</p>
              <p>{item.name}</p>
              <p className='text-sm text-gray-500'>{item.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}