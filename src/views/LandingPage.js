import * as IoIcons from "react-icons/io";
import Navbar from "../components/Navbar";

export default function LandingPage() {
    return (
      <div>
        <Navbar/>
         <div className="bg-light-bg m-10 rounded-2xl h-[85vh] flex items-center justify-center">
          <div>
            <h1 className=" text-8xl font-header font-extrabold text-neon text-">nandana sheri</h1>
            <h1 className="text-green text-xl">I like to build things but I usually end up breaking them</h1>
            <button className="text-neon text-2xl border border-neon rounded-3xl p-4 py-2 mt-8 hover:text-grey hover:border-grey flex gap-2 items-center	">
              <IoIcons.IoIosDocument />
              Resume</button>
          </div>
         </div>
         <div className="mx-10">
         <h1 className=" text-5xl font-subtext font-bold text-neon">&lt;about/&gt;</h1>

         <div className="flex items-center gap-12">
          <div className="w-1/2">
            <p className="text-green">hi :) i’m nandana and i am a computer science major at the university of illinois chicago. </p>
            <p className="text-green">I realized that I enjoyed being on a computer beyond Club Penguin when I discovered the &lt;marquee&gt; tag in HTML in middle school</p>
          </div>
          <div>
            hi
          </div>
         </div>
         <div>

         </div>
         <div>

         </div>
         </div>
      </div>
    )
  }