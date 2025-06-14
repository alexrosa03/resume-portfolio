import profile from '../../../public/images/profile.jpg';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4">
      <div className="grid grid-cols- md:grid-cols-2 gap-12 md:gap-24 items-center w-full max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Alexis B. Dela Rosa
          </h1>
          <h2 className="text-2xl sm:text-2xl md:text-3xl xl:text-5xl">
            FULL-STACK ENGINEER
          </h2>
          <p className="text-base sm:text-lg mt-6">
            I'm Alex, a dedicated software engineer with a passion for writing clean, 
            maintainable code and building practical solutions. I enjoy working with modern 
            technologies, collaborating with teams, and constantly learning new things to grow 
            as a developer.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-3xl" src={profile.src} alt="Profile" />
        </div>
      </div>
    </section>
  );
}