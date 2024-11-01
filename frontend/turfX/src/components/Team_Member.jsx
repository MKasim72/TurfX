import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

function TeamMember() {
    // const icons = [
    //     {
    //         icon: <FaFacebookSquare />,
    //         // link: "https://www.facebook.com",
    //     },
    //     {
    //         icon: <FaInstagram />,
    //         // link: "https://www.instagram.com",
    //     },
    //     {
    //         icon: <RiTwitterXLine />,
    //         // link: "https://www.twitter.com",
    //     },
    //     {
    //         icon: <FaLinkedin />,
    //         // link: "https://www.linkedin.com",
    //     }
    // ]
    const teamMembers = [
        {
          name: "Mohammed Kasim",
          role: "Lead Developer & Visionary",
          description: "Kasim is the mastermind behind TurfX, leading development with precision and passion.",
          imageUrl: "https://tse3.mm.bing.net/th?id=OIP.7wbzqyYgSsjKxpipj2snJgHaHa&pid=Api&P=0&h=180",
          facebook:"https://www.facebook.com",
          instagram:"https://www.instagram.com",
          twitter:"https://www.twitter.com",
          linkedin:"https://www.linkedin.com",
        },
        {
          name: "Ahmed",
          role: "UI/UX Designer",
          description: "Ahmed brings creativity to the forefront, crafting intuitive designs that enhance user experiences.",
          imageUrl: "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d",
          facebook:"https://www.facebook.com",
          instagram:"https://www.instagram.com",
          twitter:"https://www.twitter.com",
          linkedin:"https://www.linkedin.com",
        },
        {
          name: "Jake",
          role: "Backend Engineer",
          description: "Jake ensures the TurfX engine runs smoothly with robust backend systems and seamless integrations.",
          imageUrl: "https://thumbs.dreamstime.com/b/office-clerk-cup-saucer-white-background-30025772.jpg",
          facebook:"https://www.facebook.com",
          instagram:"https://www.instagram.com",
          twitter:"https://www.twitter.com",
          linkedin:"https://www.linkedin.com",
        },
        {
          name: "Mohit Sharma",
          role: "Marketing & Communications",
          description: "Mohit drives the voice of TurfX, building connections and amplifying our brand to new heights.",
          imageUrl: "https://tse2.mm.bing.net/th?id=OIP.c5nQzKtLmbjP2kykukd-wwHaHu&pid=Api&P=0&h=180",
          facebook:"https://www.facebook.com",
          instagram:"https://www.instagram.com",
          twitter:"https://www.twitter.com",
          linkedin:"https://www.linkedin.com",
        }
      ];
      
  return (
        <>
        {
            teamMembers.map((member,index)=>{
                return(
                    <>
                    <div className="team-card mt-10 overflow-hidden">
                    <div className='border px-10 py-10 flex text-white hover:text-gray-600 hover:font-semibold flex-col items-center rounded-lg h-[32rem] transition-all duration-300 hover:bg-white'>
                        <div className='image'>
                            <img src={member.imageUrl} alt="" className='rounded-full border w-[10rem] h-[10rem]'/>
                        </div>
                        <div className="content mt-5 text-center h-[30rem]">
                            <h1 className=' text-xl'>{member.description}</h1>
                            <h2 className='text-gray-400 text-lg mt-10'> ~ {member.name}</h2>
                        </div>
                        <div className='icons flex gap-4 mt-5 fixed-bottom'>
                            <a href={member.facebook}><FaFacebookSquare/></a>
                            <a href={member.instagram}><FaInstagram/></a>
                            <a href={member.twitter}><RiTwitterXLine/></a>
                            <a href={member.linkedin}><FaLinkedin/></a>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })
        }
    </>
  )
}

export default TeamMember
