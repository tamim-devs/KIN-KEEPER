'use client'

import { createContext } from "react"

const FriendContext = createContext()
export  const FriendsContext = ({ children }) => {
  
 const data = {
  test: 'demo'
 }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
    
  
}

export default FriendsContext