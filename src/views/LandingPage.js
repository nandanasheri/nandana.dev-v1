import * as IoIcons from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../assets/nan.jpg";
import confused from "../assets/confusednaan.JPG";
import spark from "../assets/spark.JPG";
import BgSketch from "../components/bgSketch";
import React from 'react'

export default function LandingPage() {

    return (
      <div className="flex flex-col min-h-screen">

        <div className="flex-1">

        <Navbar/>

        {/* Landing Page  */}

        <div className="m-10 rounded-2xl h-[90vh] flex items-center justify-center">
        <div className="-z-50 fixed ">
          <BgSketch/>
        </div>
        <div className="bg-light-bg p-7 rounded-3xl opacity-90">
          <h1 className=" text-8xl font-header font-extrabold text-neon text-">nandana sheri</h1>
          <h1 className="text-green text-xl">I like to build things but I usually end up breaking them</h1>
          <a href="https://docs.google.com/document/d/1OoEzRah3FfEQy5hdEq-RiiouGUCwAqS2/edit?usp=sharing&ouid=105112142350715475424&rtpof=true&sd=true">
            <button className="text-neon text-2xl border border-neon rounded-3xl p-4 py-2 mt-8 hover:text-grey hover:border-grey flex gap-2 items-center">
              <IoIcons.IoIosDocument />
            Resume
            </button>
          </a>
        </div>
        </div>

          {/* About Section */}
        <div className="bg-main-bg m-auto max-w-4xl pt-6 ">
          <h1 className=" text-5xl font-subtext font-bold text-neon">&lt;about/&gt;</h1>

          <div className="bg- flex items-start justify-between gap-12 h-85">
            <div className="bg- w-1/2 pt-8">
              <p className="text-green text-lg">Hi :) I'm Nandana and I am a Computer Science major at the <span class="underline decoration-neon decoration-4">University of Illinois Chicago.</span> Graduating in May 2025, I'm currently looking for SWE Summer 2025 Internships!</p>
              <p className="text-green text-lg pt-16">I realized that I enjoyed being on a computer beyond Club Penguin when I discovered the <span class="underline decoration-neon decoration-4"> &lt;marquee&gt; tag in HTML</span> in middle school.</p>
            </div>

            <div className="bg- w-1/2 h-full">
              <img className="object-cover h-80 w-full rounded-2xl " src={profile} alt="profile"/>
              <h4 className="m-4 text-grey text-center">I got 8 hours of sleep on this day</h4>
            </div>
          </div>

          <div className="bg- flex items-start justify-between gap-12 h-85 mt-16">
            <div className="bg- w-1/2 h-full">
              <img className="object-cover h-80 w-full rounded-2xl " src={spark} alt="profile"/>
              <h4 className="m-4 text-grey text-center">Co-directing sparkhacks - UIC's hackathon taught me infinite patience</h4>
            </div>

            <div className="bg- w-1/2">
              <p className="text-green text-lg">My first ever CS class was in eleventh grade which was where I realized two things: </p>
              <p className="text-green text-lg">- <span class="text-neon font-semibold">Nobody</span> actually knows how technology works</p>
              <p className="text-green text-lg">- Coding <span class="text-neon font-semibold">never felt like studying</span></p>


              <p className="text-green text-lg pt-14">Because, for the first time in my life I wasn't given a textbook and asked to <span class="text-neon">swallow it whole to reproduce onto an exam sheet.</span></p>
            </div>

          </div>
          <h1 className="text-green font-regular text-4xl text-center mt-8">I was rather told to think <span class="underline decoration-neon decoration-4 font-semibold"><em>logically</em></span></h1>

          <div className="bg- flex items-start justify-between gap-12 h-85 mt-20">
            <div className="bg- w-1/4">
              <p className="text-green text-lg">Coming to Chicago for my Undergrad has given me so many opportunities.</p>
            </div>

            <div className="h-full">
              <img className="object-cover h-80 w-full rounded-2xl " src={confused} alt="confused nan"/>
              <h4 className="m-4 text-grey text-center">3 years in, I think I'm more confused by this degree</h4>
            </div>

            <div className="w-1/4">
              <p className="text-green text-lg text-right">I like to look back to see how far I've come and to see how much further I need to go.</p>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }