import ActionButtons from '@/components/actionbtn/ActionBtn';
import React from 'react'


const appsPromise = async function () {
  const res = await fetch("https://kin-keeper-ten.vercel.app/friends.json")
  const data = await res.json()
  return data;
};

const page = async({params}) => {

  const friends = await appsPromise()

  const {id} = await params
  const  friend = friends.find((friend)=> friend.id === Number(id))
  
  return (
    <div>
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

          <p className="text-sm mt-3 italic text-gray-500">
            "{friend.bio || "No description available"}"
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
                {friend.next_due_date || "N/A"}
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

            <div className="flex  justify-center">
             <ActionButtons friend={friend} />
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  )
}

export default page