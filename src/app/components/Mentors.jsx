import SlideInSection from "./SlideInComponent";

export default function Mentors() {
  return (
    <section id="mentors" className="min-h-screen px-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-2xl md:text-3xl xl:text-5xl">
          Mentors
        </h2>
        <p className="text-gray-400">
          These are the mentors that I look up to and who have guided me in my journey. Feel free to reach them out
        </p>
      </div>
      <SlideInSection direction="left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative p-2 max-w-sm bg-gray-700 rounded-lg shadow-sm">
            <div className="flex justify-center">
            <img src="/images/frolyn.jpg" alt="Mentor 1" className="w-xs h-48 object-cover rounded-t-lg mb-4" />
            </div>
            <div className="p-1">
              <p className="text-lg font-semibold mb-2 text-center">Frolyn</p>
              <p className="text-md font-semibold mb-2 text-center">Full-Stack Web Engineer</p>
              <p className="text-gray-400 pt-2 pb-10">
                Main developer of the PJSF website and its applications. 
                He was my first mentor in JavaScript development and 
                emphasized the importance of using modern frameworks. His 
                guidance and constructive feedback have been invaluable in 
                developing my skills and confidence as a developer.
              </p>
              <footer>
              <a href="https://www.linkedin.com/in/xenoxen/"
                className="absolute bottom-1 right-1"
                target="_blank" rel="noopener noreferrer"
              >
                <svg className="w-10 h-10" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="132" height="132" x="30" y="30" stroke="#fafafa" strokeWidth="12" rx="16"></rect><path stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M66 86v44"></path><circle cx="66" cy="64" r="8" fill="#fafafa"></circle><path stroke="#fafafa" strokeLinecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"></path></g>
                </svg>
              </a>
              </footer>
            </div>
          </div>
          <div className="relative p-2 max-w-sm bg-gray-700 rounded-lg shadow-sm">
            <svg className="w-full h-48 object-cover rounded-t-lg mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clipRule="evenodd"/>
            </svg>

            <div className="p-1">
              <p className="text-lg font-semibold mb-2 text-center">Justin</p>
              <p className="text-md font-semibold mb-2 text-center">Software Engineer</p>
              <p className="text-gray-400 pt-2 pb-10">
                Justin has been an invaluable mentor to me during my time at 
                Newlogic. He guided me in mastering frontend development and 
                instilled in me strong coding practices that I still carry 
                forward today.
              </p>
              <a
                href="https://www.linkedin.com/in/justin-uyheng-133ba527b/"
                className="absolute bottom-1 right-1"
                target="_blank" rel="noopener noreferrer"
              >
                <svg className="w-10 h-10" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="132" height="132" x="30" y="30" stroke="#fafafa" strokeWidth="12" rx="16"></rect><path stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M66 86v44"></path><circle cx="66" cy="64" r="8" fill="#fafafa"></circle><path stroke="#fafafa" strokeLinecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"></path></g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SlideInSection>
    </section>
  );
}