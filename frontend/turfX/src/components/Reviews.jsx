import { Swiper, SwiperSlide } from 'swiper/react';
import pic from '../assets/kohli.png'
import {motion} from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
// import 'swiper/swiper.min.css'

export default () => {
    const reviews_data = [
        {
          name: "Aman Patel",
          review: "TurfX made it super easy to book a slot for my team’s practice! The turf quality is top-notch, and the booking experience was seamless.",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"
        },
        {
          name: "Radhika Mehta",
          review: "Loved how easy it was to find available slots and the real-time updates. Will definitely be booking my next cricket session here!",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"
        },
        {
          name: "Vikram Soni",
          review: "TurfX is a game changer! I was able to find the perfect turf for our weekend match, and the facilities exceeded expectations.",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"

        },
        {
          name: "Sneha Kapoor",
          review: "Booking through TurfX was smooth and hassle-free. The turf conditions were fantastic, and we had an awesome time!",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"

        },
        {
          name: "Rajesh Yadav",
          review: "The platform is simple to use and gave us access to the best turf in town. Highly recommend TurfX for booking cricket turfs.",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"

        },
        {
          name: "Mira D’Souza",
          review: "A fantastic experience from start to finish! TurfX made organizing our corporate cricket match a breeze.",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"

        },
        {
          name: "Ajay Chauhan",
          review: "TurfX took the stress out of booking. Everything was well-organized, and the turf was well-maintained. Excellent service!",
          image: "https://tse4.mm.bing.net/th?id=OIP.VKGDj1ZIkf_Re_LBq211WwHaEH&pid=Api&P=0&h=180"

        }
      ];
      
  return (
    <div className="swiper-container px-10 py-20 bg-gray-900 text-white">
        <motion.h2 viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-4xl font-bold text-center mb-10'>Turf Talk: Reviews from the Field</motion.h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {reviews_data.map((item,index)=>{
            return(
                <>
                <SwiperSlide key={index}>
                <motion.div viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='Review-box p-3 border hover:shadow-2xl rounded-lg w-[100%] h-[15rem] cursor-pointer flex flex-col hover:border-cyan-400 hover:border-xl items-center justify-center]'>
                    <h3 className='text-center'>
                        {item.review}
                    </h3>
                    <img src={item.image} alt="" className='mt-5 rounded-full w-[40%]'/>
                    <p className='text-center text-gray-400 mt-3'>- {item.name}</p>
                </motion.div>
                </SwiperSlide>
                </>
            )
        })}
    </Swiper>
    </div>
  );
};
