import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function SideProject(props) {
    return (
        <div className="bg-light-bg rounded-3xl p-3">
            <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <h2 className="text-green font-semibold text-2xl">{props.title}</h2>
            <p className="text-light-grey mt-3">{props.desc}</p>
            <p className="text-grey text-sm mt-4">{props.stack}</p>
            <div className="flex justify-end gap-2">
                <a href={props.website}>
                    <FaExternalLinkAlt className="fill-neon"/>
                </a>
                <a href={props.repo}>
                    <FaGithub className="fill-neon"/>
                </a>
            </div>
            </IconContext.Provider>
        </div>
    );
}