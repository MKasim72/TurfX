import React from 'react'
import { MdSportsCricket } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaSpaceShuttle } from "react-icons/fa";
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';

function TopRated() {
  return (
    <div className='gallery mt-20 mx-20 py-5 '>
        <motion.h2 viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-4xl font-bold text-center mb-10 text-white">Top Rated</motion.h2>
        <div>
            <div className="grid grid-cols-3 gap-10">
                <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.8,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                <motion.div viewport={{once:true}} initial={{x:70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.4,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                <motion.div viewport={{once:true}} initial={{x:70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="card bg-white flex flex-col rounded-lg">
                    <div className="image">
                        <img src="https://playo.gumlet.io/7STRIKERS20231214115324318292/7Strikers1715227856983.jpg?mode=crop&crop=smart&h=200&width=450&q=75" alt="image" className='rounded-t-lg'/>
                    </div>
                    <div className='content mt-3 flex justify-between mx-5 items-center py-3'>
                        <div>
                            <h1 className='text-xl font-bold'>BattleField Turf</h1>
                            <h1 className='text-gray-800 text-md'>Ahmadabad</h1>
                            <div className='facilities mt-5 flex gap-2'>
                                <MdSportsCricket className='text-2xl'/>
                                <FaSpaceShuttle className="text-2xl"/>
                                <IoIosFootball className="text-2xl"/>
                            </div>
                        </div>
                        <p>Rating: 4.5/5</p>
                    </div>
                </motion.div>
                {/* <div className="card p-8 bg-gray-900"></div>
                <div className="card p-8 bg-gray-900"></div> */}
            </div>

        </div>
        <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.8,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='mt-10 text-center'>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-
            2 px-4 rounded p-3">
                <NavLink to='/bookTurf'>Load More</NavLink>
            </button>
        </motion.div>
    </div>
  )
}

export default TopRated
