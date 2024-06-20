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
      </div>
    )
  }