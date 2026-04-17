'use client'

import { Pie, PieChart, Tooltip, Cell } from 'recharts'

export default function PieChartDefaultIndex({
  data,
  isAnimationActive = true
}) {

  const COLORS = ['#3b82f6', '#22c55e', '#ef4444']

  return (
    <PieChart width={400} height={400}>

      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        isAnimationActive={isAnimationActive}
        outerRadius={120}
        label
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />

    </PieChart>
  )
}