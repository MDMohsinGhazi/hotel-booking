import React from "react";

const Spinner = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="relative">
        <div className="absolute h-20 w-20 border-4 border-slate-400 rounded-full"></div>
        <div className="h-20 w-20 border-x-4 border-primary absolute rounded-full animate-spin"></div>
      </div>
    </section>
  );
};

export default Spinner;
