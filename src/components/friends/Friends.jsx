'use client'

import FriendsCard from '@/components/friendcard/FriendsCard';
import React, { useEffect, useState } from 'react'

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('/friends.json')
            .then(response => response.json())
            .then(data => setFriends(data))
            .catch(error => console.error('Error fetching friends:', error));
    }, []);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
    {friends.map(friend => (
        <FriendsCard key={friend.id} friend={friend} />
    ))}
    
    </div>
  )
}

export default Friends