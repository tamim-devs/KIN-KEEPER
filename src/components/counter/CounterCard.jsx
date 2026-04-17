'use client'

import { useContext, useEffect, useState } from "react"
import { FriendContext } from "@/context/FriendsContext"

const CounterCard = () => {
  const { timeline } = useContext(FriendContext)
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

 
  const totalFriends = friends.length
  const onTrack = friends.filter(f => f.status === "ok").length
  const needAttention = friends.filter(f => f.status === "overdue").length

  // 👉
  const currentMonth = new Date().getMonth()

  const interactionsThisMonth = timeline.filter(item => {
    const itemMonth = new Date().getMonth() // simple version
    return itemMonth === currentMonth
  }).length

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    
      <div className="card bg-base-100 shadow p-5 text-center">
        <p className="text-3xl">{totalFriends}</p>
        <h2 className="text-lg font-bold">Total Friends</h2>
      </div>

      {/* ON TRACK */}
      <div className="card bg-base-100 shadow p-5 text-center">
        <p className="text-3xl ">{onTrack}</p>
        <h2 className="text-lg font-bold">On Track</h2>
      </div>

     
      <div className="card bg-base-100 shadow p-5 text-center">
        <p className="text-3xl">{needAttention}</p>
        <h2 className="text-lg font-bold">Need Attention</h2>
      </div>

    
      <div className="card bg-base-100 shadow p-5 text-center">
        <p className="text-3xl">{timeline.length}</p>
        <h2 className="text-lg font-bold">Interactions This Month</h2>
      </div>

    </div>
  )
}

export default CounterCard