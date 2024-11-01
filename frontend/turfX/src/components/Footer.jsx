import React from 'react'
import Footer_Items from './Footer_Items'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import {motion} from 'framer-motion'

function Footer() {
    const icons = [
        {
            icon: <FaFacebookSquare />,
            link: "https://www.facebook.com",
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com",
        },
        {
            icon: <RiTwitterXLine />,
            link: "https://www.twitter.com",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com",
        }
    ]
  return (
    <div className=''>
      <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between sm:px-12 px-4 bg-[#ffffff19] py-7 md:items-center flex'>
            <motion.h1 viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-teal-400 text-4xl font-bold'>TurfX.</motion.h1> {/*text-[#005E7C] */}
            <motion.h1 viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-gray-400'>@MohammedKasim</motion.h1>
            <div>
                {/* {icons.map((icon,index)=>{
                    // <h2>{icon.icon}</h2>
                    <a href={icon.link} target="_blank" rel="noopener noreferrer">{icon.icon}kj</a>
                })} */}
                <motion.div viewport={{once:true}} initial={{x:70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="flex justify-between items-center space-x-4 text-xl">
                    {icons.map((icon, index) => (
                        <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        className='hover:text-teal-300 hover:text-3xl'
                        // rel="noopener noreferrer"
                        >
                            {icon.icon}

                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
