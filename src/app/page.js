import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <header className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <AboutMe />
    </header>
  );
}
