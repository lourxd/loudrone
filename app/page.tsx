"use client"
import { FlipWords } from "@/components/flip-words"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { FaPhoneAlt, FaTiktok } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5"

export default function Home() {

  const words = ["Radiant", "Enchanting", "Unique", "loudrone"];

  const revolution = useRef<any>(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden"> 
      <div className="p-24 h-screen flex flex-col items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
        >
          <video
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
          >
            <source src="https://utfs.io/f/8e18dc4b-1ab5-4dc1-9741-cb7b4ce802c4-k5dlj4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Frosted Glass Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 backdrop-blur-sm"></div> 
        </motion.div>
        <div className="h-[40rem] flex justify-center items-center px-4 z-10 relative">
          <div className="text-4xl mx-auto font-bold text-white text-center text-nowrap">
            <FlipWords words={words} /> 
            videos
            <div className="w-full md:w-[30rem] lg:w-[40rem] relative mt-4">
                  {/* Gradients */}
                <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-20 md:inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-20 md:inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
            repeat: Infinity,
            repeatType: 'loop',
            opacity: { delay: 2, duration: 0.8 },
          }}  
          onClick={()=>revolution.current.scrollIntoView({ behavior: 'smooth' })} 
          className="relative inline-flex overflow-hidden rounded-3xl p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#93c5fd_50%,#6366f1_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-3xl bg-slate-950 px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            Check me out 👇
          </span>
        </motion.button>
      </div>
      <div ref={revolution} className="flex flex-col md:flex-row w-full items-stretch">
        <div className="flex-1 flex items-center justify-center p-10 lg:p-0">
          <h1 className="text-center md:text-left text-4xl m-20">Revolutionizing the way you see the world from above</h1>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <Image
            src="/main.png"
            width={1920}
            height={1080}
            alt="mainimage"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full items-stretch">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/sec.png"
            width={1920}
            height={1080}
            alt="mainimage"
            className="w-full h-auto"
            style={{ objectFit: "contain"}}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="p-20 h-full flex items-center justify-center flex-col gap-10">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-3">
                <FaPhoneAlt />
                <a href="tel:+351961287164">+351 961 287 164</a>
              </div>
            </button>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-3">
                <IoMailOutline />
                <a href="mailto:lourencorosado@gmail.com">lourencorosado@gmail.com</a>
              </div>
            </button>
          </div>
          <div className="flex">
            <Link href={"https://www.tiktok.com/@loudrone5"} style={{ backgroundColor: "#ff0050" }} className="flex-1 flex items-center justify-center lg:p-20 w-full h-32">
              <FaTiktok />
            </Link>
            <Link href={"https://www.youtube.com/channel/UChwiFd8J75zbDcZD_8Eyqcg"} style={{ backgroundColor: "#FF0000" }} className="flex-1 flex items-center justify-center lg:p-20 w-full h-32">
              <FaYoutube />
            </Link>
            <Link href={"https://www.instagram.com/loudrone/"} className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] lg:p-20 w-full h-32">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
