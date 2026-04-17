'use client'

import { useContext } from "react"
import { FriendContext } from "@/context/FriendsContext"
import { useRouter } from "next/navigation"

const ActionButtons = ({ friend }) => {
  const { addToTimeline } = useContext(FriendContext)
  const router = useRouter()

  const handleClick = (type) => {
    addToTimeline({
      id: friend.id,
      name: friend.name,
      type,
      time: new Date().toLocaleTimeString()
    })

    router.push("/timeline")
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