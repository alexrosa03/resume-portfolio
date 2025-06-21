import SlideInSection from "./SlideInComponent";

const images = [
  "/images/pjsf.jpg",
  "/images/nexus.jpg",
]

export default function Projects(){
  return (
    <section id="projects" className="min-h-screen px-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-2xl md:text-3xl xl:text-5xl">
          Projects
        </h2>
        <p className="text-gray-400">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <SlideInSection direction="up">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full bg-gray-700 rounded-lg shadow-sm">
            <a href="https://www.arma-ph.net/">
              <img src={images[0]} alt="Project 1" className="w-full h-64 object-cover rounded-t-lg mb-4" />
              <div className="p-1">
                <h3 className="text-lg font-semibold mb-2 text-center">PJSF Website</h3>
              </div>
            </a>
          </div>
          <div className=" bg-gray-700 rounded-lg shadow-sm">
            <img src={images[1]} alt="Project 2" className="w-full h-64 object-cover rounded-t-lg mb-4" />
            <div className="p-1">
              <h3 className="text-lg font-semibold mb-2 text-center"><a>PJSF Nexus</a></h3>
            </div>
          </div>
        </div>
      </SlideInSection>
    </section>
  );
}