'use client'

import { useContext, useMemo } from "react"
import { FriendContext } from "@/context/FriendsContext"
import PieChartDefaultIndex from "@/components/PieChartDefaultIndex"

export default function Page() {
  const { timeline } = useContext(FriendContext)

  const chartData = useMemo(() => {
    const call = timeline.filter(i => i.type === "Call").length
    const text = timeline.filter(i => i.type === "Text").length
    const video = timeline.filter(i => i.type === "Video").length

    return [
      { name: "Call", value: call },
      { name: "Text", value: text },
      { name: "Video", value: video },
    ]
  }, [timeline])

  return (
    <div className="p-10 shadow-md">

      <h1 className="text-2xl font-bold mb-6">
       Friendship Analytics
      </h1>

      <PieChartDefaultIndex
        data={chartData}
        isAnimationActive={true}
      />

    </div>
  )
}