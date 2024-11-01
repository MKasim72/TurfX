import React from 'react'
import TeamMember from './Team_Member'
import {motion} from 'framer-motion'
function MeetTeam() {
  return (
    <div className='-mt-14 h-screen py-10 px-20 bg-gray-900'>
        <motion.h1 viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-white text-center text-3xl font-bold'>" The Brains and Passion Behind the Platform "</motion.h1>
        <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='grid grid-cols-4 gap-10'>
           <TeamMember/>
        </motion.div>
    </div>
  )
}

export default MeetTeam

