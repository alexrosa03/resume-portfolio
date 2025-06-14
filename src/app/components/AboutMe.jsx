import profile from './assets/images/profile.jpg';

export default function AboutMe() {
  return (
    <section id="about" className="py-12">
      <div>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Alexis B. Dela Rosa</h1>
          <p className="text-lg">
            I am a passionate software developer with experience in building web applications using modern technologies. My journey in tech started with a curiosity for how things work, and it has evolved into a full-fledged career where I get to solve real-world problems through code.
          </p>
        </div>
      </div>
      <div>
        <img src={profile}></img>
      </div>
    </section>
  );
}
