'use client'
import FriendsCard from '@/components/friendcard/FriendsCard';
import FriendsHooks from '@/hooks/FriendsHooks';


const Friends = () => {
    
 const { friends, loading } = FriendsHooks()

     if (loading) {
        return <p className="text-center">Loading...</p>
    }
   
  return (
    <>
    {loading ? (
        <p className="text-center">Loading...</p>
    ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {friends.map(friend => (
            <FriendsCard key={friend.id} friend={friend} />
        ))}
        </div>
    )}    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {friends.map(friend => (
            <FriendsCard key={friend.id} friend={friend} />
        ))
        }
    </div>
    </>
  )
}

export default Friends