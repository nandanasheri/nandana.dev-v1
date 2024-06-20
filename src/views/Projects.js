import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
    return (
      <div>
        <Navbar/>
        {/* Projects Section */}
        <div className="bg- m-auto max-w-4xl pt-12 mb-6">
          <h1 className=" text-5xl font-subtext font-bold text-neon">&lt;projects/&gt;</h1>
        </div>

        <Footer/>

      </div>
    )
  }