'use client'

import { useState } from 'react'
import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

// Active slice design
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  } = props

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 10} // highlight effect
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  )
}

export default function PieChartDefaultIndex({
  data,
  isAnimationActive = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const COLORS = ['#3b82f6', '#22c55e', '#ef4444']

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            isAnimationActive={isAnimationActive}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}