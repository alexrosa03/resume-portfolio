"use client"

import { useState } from "react";
import stack from "../stack.js"

export default function Stacks() {
  const [stacks, setStacks] = useState(getTechStack);

  function getTechStack(selectedStack) {
    selectedStack = 'frontend'
    const array = stack.tech_stack.frontend
    console.log('hi',array)

    const retStack = array.map((tech) => {
      console.log(tech[0])
      return (
        <div
          key={tech[0]}
          className="block max-w-sm h-32 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <img className="w-16 h-16 object-contain mx-auto mt-4" src={tech[1]}></img>
          <p>{tech[0]}</p>
        </div>
      )
    })

    return retStack;
  }

  // getTechStack()
  return (
   <section id="stacks" className="min-h-screen px-4 flex flex-col">
    <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-2xl md:text-3xl xl:text-5xl">
          Stacks
        </h2>
        <p className="text-gray-400">
          These are the main technologies used, but always exploring and learning new ones.
        </p>
      </div>
    <div>

    </div>
    <div className="text-center grid grid-cols-3 md:grid-cols-4 gap-4 flr">
      {stacks}
    </div>
    
  </section>
  );
}