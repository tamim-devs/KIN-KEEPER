import CounterCard from '@/components/counter/CounterCard'
import Friends from '@/components/friends/Friends'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <div  className='flex flex-col items-center justify-center gap-9'>
            <h1 className='text-6xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-xl text-center max-w-[60%] '>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
            <button className='bg-green-900 text-xl text-center font-bold text-white cursor-pointer py-2 px-4 rounded flex items-center justify-center gap-2'><span><FaPlus /></span> Add a Friend</button>
        </div>
         <CounterCard/>
    <Friends />
    </div>
  )
}

export default Hero