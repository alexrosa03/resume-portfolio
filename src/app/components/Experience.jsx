

export default function Experience(){
  return (
    <section id="experience" className="min-h-screen flex flex-col px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-2xl md:text-3xl xl:text-5xl">
          Experience
        </h2>
      </div>
      
      <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2025 - Present</time>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Software Engineer - <span className="font-normal">IFood Logistics</span></h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Responsible for adding features and maintaining the compan's 
                warehouse management system (WMS) using VueJS and ExpressJS. 
                Applied practical SQL skills, integrated SAP DI API to automate 
                processes and reduce redundant workloads, implemented JavaScript for 
                automated QA testing, and used Python for various tasks and projects.
              </p>
          </li>
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">  March 2023 - June 2024</time>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Software Developer - <span className="font-normal">Newlogic</span></h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Developed web applications using ReactJS, CSS, HTML, and the Odoo 
                framework. Gained experience with AWS, improved proficiency in using 
                Git, and focused primarily on frontend development.
                </p>
          </li>
          <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2022 - March 2025</time>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Volunteer Web Developer and Arma 3 Scripting - <span className="font-normal">Passion Project</span></h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Provided web development support for an ARMA 3 Philippine gaming 
                community, handling bug fixes and feature enhancements. Created scripts 
                using Real Virtuality Scripting to meet community needs, and utilized 
                ReactJS, NextJS, Google Firebase, and GoLang as the primary tech stack 
                for the project. Reference: <a href="https://www.arma-ph.net/">arma-ph.net</a>.
              </p>
          </li>
      </ol>
    </section>


  )
}