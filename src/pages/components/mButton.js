import React from 'react';

const MButton = ({ title, subtitle, icon }) => {
  return (
    <button className="relative bg-white hover:bg-slate-100 text-black font-bold py-2 px-4 rounded w-full border-indigo-300 border my-2">
      <div className="flex items-center justify-between">
        <div className="w-full mr-2 float-left">
          <div className="text-lg w-full text-start">{title}</div>
          <div className=" text-xs font-extralight text-slate-700 hover:text-slate-900 w-full text-start">{subtitle}</div>
        </div>
        <div className="ml-2">
          {icon}
        </div>
      </div>
    </button>
  );
};

export default MButton;
