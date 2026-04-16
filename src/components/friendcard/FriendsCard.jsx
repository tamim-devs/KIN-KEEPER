import Link from 'next/link'
import React from 'react'

const FriendsCard = ({friend}) => {
 
  return (
    <Link href={`/friend/${friend.id}`}>
    <div className='py-2 ml-2'>
    <div className=" flex items-center justify-center flex-col bg-base-100 w-96 shadow-sm py-10">
  <figure className='rounded-full'>
    <img className='rounded-full w-32 h-32 object-cover'
      src={friend.picture}
      alt={friend.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{friend.name}</h2>
    <p className='text-center'>{friend.days_since_contact} ago</p>
   
  </div>
  <div className="flex flex-col items-center gap-2">
  {friend.tags?.map((tag, index) => (
    <span key={index} className={`badge ${
        index % 2 === 0 ? ' bg-green-300 text-md font-bold text-green-700' : 'badge-error text-md text-white font-bold'
      }`}>
      {tag}
    </span>
  ))}
</div>
</div>
    </div>
    </Link>
  )
}

export default FriendsCard