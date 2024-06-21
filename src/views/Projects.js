import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import silentspaces from "../assets/silentspacestile.svg";
import timesheet from "../assets/timesheettile.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import SkillTag from "../components/SkillTag";

const MainProjects = [
  {
    title:"SILENT SPACES",
    website:"https://silentspaces.info/",
    repo:"https://github.com/Olympicene/Silent-Spaces",
    number:"01",
    tags: ["React", "Node", "Express", "MongoDB"],
    img: silentspaces,
    desc: "full stack web application for students to find optimal study spots around Chicago by polling from real time user data on noise levels, WiFi connection and ambiance. "
  },
  {
    title:"TIMESHEET AUTOMATE",
    website:"https://silentspaces.info/",
    repo:"https://github.com/nandanasheri/timesheet-automate",
    number:"02",
    tags: ["OAuth2", "Node", "Express"],
    img: timesheet,
    desc: "Application to generate Timesheet for Teaching Assistants by scraping hours from Google Calendar using Google OAuth2, Node, Express and React"
  }
]


function ProjectTile (props) {
    return(
        <div>
            <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <div className="flex gap-6 my-6 items-center">
                <h1 className="text-green text-3xl font-semibold">{props.title}</h1>
                <a href={props.website}>
                    <FaExternalLinkAlt className="fill-green"/>
                </a>
                <a href={props.repo}>
                    <FaGithub className="fill-green"/>
                </a>
                {props.tags.map((item) => {
                return (
                    <SkillTag tag={item} />
                )
                })}
                <h1 className="text-grey text-5xl font-bold">{props.number}</h1>
            </div>
            <img src={props.img} alt="tile" />
            <div className="bg-dark-bg my-4 p-4 rounded-3xl">
              <p className="text-green">{props.desc}</p>
            </div>
            </IconContext.Provider>
            
        </div>
    )
}

export default function Projects() {

    return (
      <div>
        <Navbar/>
        {/* Projects Section */}
        <div className="bg- m-auto max-w-4xl pt-12 mb-6">
          <h1 className=" text-5xl font-subtext font-bold text-neon">&lt;projects/&gt;</h1>
          {MainProjects.map((item) => {
            return (
            <ProjectTile title={item.title} website={item.website} repo={item.repo} number={item.number} tags={item.tags} img={item.img} desc={item.desc}/>
            )
          })}
          <h1 className="text-green text-3xl font-semibold mt-12">more projects</h1>\
          <div className="bg-white flex justify-center items-center gap-4">
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
          </div>
          
        </div>

        <Footer/>

      </div>
    )
  }