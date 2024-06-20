import { Link } from "react-router-dom"
const NavData = [ 
    {
        title: "about",
        path: "/"
    },
    {
        title: "experience",
        path: "/experience"
    },
    {
        title: "projects",
        path: "/projects"
    },
    {
        title: "leadership",
        path: "/leadership"
    }
]
export default function Navbar() {
    return (
        <div className="bg-light-bg mx-10 h-10 -mt-6 w-[calc(100vw-5rem)] rounded-2xl border border-grey fixed flex justify-end items-center gap-6 pr-8">
            {NavData.map((item) => {
              return (
                <span>
                  <Link to={item.path}>
                    <span className="text-green font-light">{item.title}</span>
                  </Link>
                </span>
              )
            })}
        </div>
    ) 
}