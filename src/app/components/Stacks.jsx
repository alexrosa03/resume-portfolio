"use client"

import { useState } from "react";
import stack from "../stack.js"
import { MenuItems } from "@headlessui/react";

function getTechStack(selectedStack) {
  const array = stack.tech_stack[selectedStack];
  return array.map((tech) => (
    <div
      key={tech[0]}
      className="block max-w-sm h-32 bg-gray-700 rounded-xl"
    >
      <img className="w-16 h-16 object-contain mx-auto mt-4" src={tech[1]} alt={tech[0]} />
      <p>{tech[0]}</p>
    </div>
  ));
}

export default function Stacks() {
  const [stacks, setStacks] = useState(getTechStack('Frontend'));

  function handleStackChange(selectedStack) {
    setStacks(getTechStack(selectedStack));
  }

  const menuItems= ['Frontend','Backend','Database','Others']

  const stackMenu = menuItems.map((item) => {
    return (
      <div key={item} onClick={() => handleStackChange(item)}className="h-8 bg-gray-700 hover:bg-gray-400 rounded-xl">
        <a className="text-md sm:text-xl">{item}</a>
      </div>
    )
  })

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
    <div className="mb-8 text-center grid grid-cols-4 gap-4">    
      {stackMenu}
    </div>
    <div className="h-full text-center grid grid-cols-4 gap-4">
      {stacks}
    </div>
    
  </section>
  );
}