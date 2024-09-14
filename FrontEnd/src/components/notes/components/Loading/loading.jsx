import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col font-sans items-center justify-center my-[10vh] z-30">
      <div className="flex justify-center items-center flex-grow w-48 h-[180px]">
        <HashLoader color="rgb(71 85 105 /1)" size={50} />
      </div>
      <div className="mt-5 text-2xl text-slate-500">Loading Notes...</div>
    </div>
  );
};

export default Loading;
