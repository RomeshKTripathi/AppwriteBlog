import React from "react";

function Title({ text }) {
  return (
    <div className="w-full flex my-10 justify-center">
      <div className="text-4xl font-bold ">
        {text ?? "Editor's Pick"}
        <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
      </div>
    </div>
  );
}

export default Title;
