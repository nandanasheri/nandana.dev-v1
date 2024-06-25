import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
    return (
        <div className="bg-main-bg mt-20 mb-8 p-4 flex items-center justify-center gap-5">
            <IconContext.Provider value={{ className: "shared-class", size: 35 }}>
            <h3 className="text-grey">Built and designed by Nandana Sheri &lt;3</h3>
            <a href="https://github.com/nandanasheri/nandana.dev-v1">
                <FaGithub className="fill-grey"/>
            </a>
            <a href="https://www.linkedin.com/in/nandana-sheri/">
                <FaLinkedin className="fill-grey"/>
            </a>
            </IconContext.Provider>
        </div>
    )
}