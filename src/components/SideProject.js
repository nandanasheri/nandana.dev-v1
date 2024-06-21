import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function SideProject(props) {
    return (
        <div>
            <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.stack}</p>
            <div className="flex justify-end">
                <a href={props.website}>
                    <FaExternalLinkAlt className="fill-green"/>
                </a>
                <a href={props.repo}>
                    <FaGithub className="fill-green"/>
                </a>
            </div>
            </IconContext.Provider>
        </div>
    );
}