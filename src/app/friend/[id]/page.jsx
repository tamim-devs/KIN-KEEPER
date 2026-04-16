'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const params = useParams()
  const [friend, setFriend] = useState(null)

  useEffect(() => {
    const loadFriend = async () => {
      const res = await fetch('/friends.json')
      const data = await res.json()

      const found = data.find(f => f.id == params.id)
      setFriend(found)
    }

    loadFriend()
  }, [params.id])

  if (!friend) {
    return <p className="p-6">Loading...</p>
  }

  return (
    <div className="p-6 bg-base-200 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="card bg-base-100 shadow-xl p-6 items-center text-center">

          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={friend.picture} />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

          <div className="badge badge-warning mt-2">
            {friend.status || "Active"}
          </div>

          <div className="flex gap-2 mt-3">
            {friend.tags?.map((tag, i) => (
              <span key={i} className="badge badge-info">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm mt-3 text-gray-500">
            {friend.bio || "No description available"}
          </p>

          <p className="text-sm mt-2">
            {friend.email || "No email"}
          </p>

          <div className="w-full mt-4 space-y-2">
            <button className="btn btn-outline w-full">Snooze 2 Weeks</button>
            <button className="btn btn-outline w-full">Archive</button>
            <button className="btn btn-error w-full">Delete</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow p-4 text-center">
              <h2 className="text-2xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </div>

            <div className="card bg-base-100 shadow p-4 text-center">
              <h2 className="text-2xl font-bold">
                {friend.goal_days || 14}
              </h2>
              <p>Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow p-4 text-center">
              <h2 className="text-xl font-bold">
                {friend.next_due || "N/A"}
              </h2>
              <p>Next Due</p>
            </div>
          </div>

          {/* GOAL */}
          <div className="card bg-base-100 shadow p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Relationship Goal</h2>
              <button className="btn btn-sm">Edit</button>
            </div>
            <p className="mt-2">
              Connect every <b>{friend.goal_days || 14}</b> days
            </p>
          </div>

          {/* QUICK ACTION */}
          <div className="card bg-base-100 shadow p-5">
            <h2 className="font-semibold mb-4">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-4">
              <button className="btn btn-outline">Call</button>
              <button className="btn btn-outline">Text</button>
              <button className="btn btn-outline">Video</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}