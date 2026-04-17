'use client'

import { createContext, useState } from "react"

export const FriendContext = createContext()

export const FriendsContext = ({ children }) => {
  const [timeline, setTimeline] = useState([])

  const addToTimeline = (item) => {
    setTimeline((prev) => [item, ...prev])
  }

  return (
    <FriendContext.Provider value={{
      timeline,
      setTimeline,
      addToTimeline   
    }}>
      {children}
    </FriendContext.Provider>
  )
}