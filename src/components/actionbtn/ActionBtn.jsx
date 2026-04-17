'use client'

import { useContext } from "react"
import { FriendContext } from "@/context/FriendsContext"
import { toast } from "react-toastify"
const ActionButtons = ({ friend }) => {
  const { addToTimeline } = useContext(FriendContext)


  const handleClick = (type) => {
    addToTimeline({
      id: friend.id,
      name: friend.name,
      type,
      time: new Date().toLocaleTimeString()
    })
toast.success(`${type} with ${friend.name} added!`)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <button onClick={() => handleClick("Call")} className="btn btn-outline">Call</button>
      <button onClick={() => handleClick("Text")} className="btn btn-outline">Text</button>
      <button onClick={() => handleClick("Video")} className="btn btn-outline">Video</button>
    </div>
  )
}

export default ActionButtons