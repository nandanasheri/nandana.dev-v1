import githublogo from "../assets/github-mark.svg";
import linkedinlogo from "../assets/linkedin.svg";


export default function Footer() {
    return (
        <div className="bg-reen mt-20 mb-8 flex items-center justify-center gap-5">
            <h3 className="text-grey">Built and designed by Nandana Sheri &lt;3</h3>
            <a href="https://github.com/nandanasheri/nandana.dev-v1">
            <img className="w-8 fill-grey" src={githublogo} alt="GitHubLogo"/>
            </a>
            <a href="https://www.linkedin.com/in/nandana-sheri/">
                <img className="w-8 fill-grey" src={linkedinlogo} alt="LinkedIn Logo"/>
            </a>
        </div>
    )
}