import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      

      <div
        className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/IMG_20210810_143335.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative text-center text-white backdrop-blur-md bg-white/10 p-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Jack McMahon
          </h1>

          <p className="text-xl mt-4 text-gray-300">
            Computer Science Student • Building scalable backend systems & modern web apps
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link 
              to="/WhyHire"
              className="text-2xl font-bold px-8 px-12 py-2 border border-white hover:bg-black/10 rounded-lg transition"

            >
              Why Hire Me

            </Link>
            <div className="flex gap-5 justify center">
              <a
              href="/projects"
              className="px-4 py-3 bg-green-900/40 hover:bg-green-800/80 rounded-lg font-medium transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-4 py-3 bg-green-900/40 hover:bg-green-800/80 rounded-lg font-medium transition"
            >
              Contact Me
            </a>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;