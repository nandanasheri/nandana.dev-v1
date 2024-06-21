import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wics from "../assets/wicslogo.svg";
import sparkhacks from "../assets/sparkhackslogo.svg";
import wicsgroup from "../assets/wicsgroup.png";
import sparkhacksgroup from "../assets/sparkhacksgroup.png";

export default function Leadership() {
    return (
      <div>
        <Navbar/>
        {/* Leadership Section */}
        <div className="bg- m-auto max-w-4xl pt-12 mb-6">
          <h1 className=" text-5xl font-subtext font-bold text-neon">&lt;leadership/&gt;</h1>

          <div className="flex gap-3">
            <h1 className=" text-2xl font-subtext font-bold text-green mt-6">President : Women in Computer Science</h1>
            <img className="" src={wics} alt="profile"/>
          </div>

          <div className="bg- flex items-start justify-between gap-12 h-85">

            <div className="bg- w-1/2 h-full">
              <img className="rounded-2xl" src={wicsgroup} alt="profile"/>
              <h4 className="m-4 text-grey text-center">WiCS was where I found mentors and friends that eventually turned into family :)</h4>
            </div>

            <div className="bg- w-1/2 pt-8 text-right">
              <p className="text-green text-md">I have been a part of WiCS ever since my first semester in university and been on the Executive Board since my sophomore year.</p>
              <p className="text-green text-md pt-16">From Social Outreach Chair, to leading Professional Events and finally as President my senior semester, WiCS has been a way for me to build a support system.</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <img className="" src={sparkhacks} alt="profile"/>
            <h1 className=" text-2xl font-subtext font-bold text-green mt-6">Co-Director : SparkHacks UIC Hackathon</h1>
          </div>
          
          <div className="bg- flex items-start justify-between gap-12 h-85">

            <div className="bg- w-1/2 pt-8 text-left">
              <p className="text-green text-md">SparkHacks was a collaborative initiative by WiCS and other student organizations from the Computer Science 
              Department at UIC. I was a part of the Communications Team for SparkHacks 2023 and Co-Director for 
              SparkHacks 2024.</p>
              <p className="text-green text-md pt-16">You'd be surprised at how many students go about completing a whole degree 
                in CS with the bare minimum technical skills. SparkHacks was brought to give students an opportunity to build their 
                own skills, to create something from the ground up, free from the shackles of an autograder.</p>
            </div>

            <div className="bg- w-1/2 h-full">
              <img className="object-cover h-80 w-full rounded-2xl" src={sparkhacksgroup} alt="profile"/>
              <h4 className="m-4 text-grey text-center">SparkHacks was probably my #1 cause of anxiety in Spring 2024 :)
              </h4>
            </div>
          </div>

        </div>

        <Footer/>

      </div>
    )
  }