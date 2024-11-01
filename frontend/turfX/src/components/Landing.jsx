import React, { useContext } from "react";
import pic from "../assets/SmilingMan.png";
import { AuthContext } from "../store/auth";
import { motion } from "framer-motion";
function Landing() {
  const { user } = useContext(AuthContext);
  // const userrr = user

  return (
    <div className="bg-[#001242] h-screen pt-1 flex justify-around">
      <div className="quote mt-72 px-10">
        {[`Gear up`, "gather your team, ", "and own the turf!"].map(
          (item, index) => {
            return (
              <motion.p  initial={{x:-100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{delay:0.2,
                x:{type:"spring",stiffness:60},
                opacity:{duration:1},
                ease:"easeIn",
                duration:1}} key={index} className="text-white font-bold text-7xl ">
                {item}
              </motion.p>
            );
          }
        )}
        <motion.button viewport={{once:false}} initial={{x:-70,opacity:0}} animate={{x:0,opacity:1}}  transition={{delay:0.1,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}  className="bg-[#0094C6] p-3 font-bold text-xl mt-4 hover:border-4 transition-all duration-150">
          Book Your Turf Now
        </motion.button>
      </div>
      <div className="">
        <motion.img
          viewport={{once:false}}
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1}}
          src={pic}
          alt=""
          className="rounded-full border-1 w-[42rem] mt-[8rem]"
        />
      </div>
    </div>
  );
}

export default Landing;
