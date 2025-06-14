import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <header className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Navbar />
      <AboutMe />
      <Experience />
      <Stacks />
      <Footer/>
    </header>
  );
}
