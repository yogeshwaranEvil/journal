import React from 'react'
import bg from "../assets/bg.svg";

export default function Home() {
  return (
    <div className=" relative inset-y-28 h-screen">
          <img
            src={bg}
            className="h-[550px] absolute z-10 inset-x-32 top-10"
          ></img>
          <div className="z-20 absolute inset-32 ">
            <p className=" text-[#2e2f2e] font-sans font-extrabold  text-8xl m-24 pl-20 mb-0 tracking-wider">Welcome</p>
            <p className=" text-[25px] pl-[425px] -mt-2">To JournalForge </p>
            <p className=" text-[8px] pl-[478px] -mt-1">Where Knowledge Meets Discovery</p>
            <p className=" text-xl mt-10 ml-10 font-light text-center">Join a Global Community of Scholars and Innovators pushing the Boundaries of Knowledge. Together, let's explore new Frontiers and inspire groundbreaking Discoveries.</p>
            <div className="flex items-center justify-center">

            <button className=" bg-[#c9f570] px-6 mt-7  min-h-8 min-w-12  rounded-full  text-xs p-3">
            Start Exploring</button>
            </div>
          </div>
        </div>
  )
}
