import React from "react";

type Card = {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

export default function Card({ title, description, icon }: Card) {
  return (
    <div className="border border-gray-500/10 xl:w-auto w-full h-auto rounded-xl bg-gray-300/20 p-4 hover:cursor-default hover:bg-slate-900 transition-all duration-600 group/card hover:-translate-y-2">
      <div className="flex w-10 h-10 border border-gray-500/20 bg-white rounded-xl group-hover/card:bg-gray-700 transition-all duration-600">
        {React.cloneElement(icon, {
          className: "text-black text-5xl w-6 h-6 m-auto group-hover/card:text-white! transition-all duration-600"
        })}
      </div>
      <h4 className="mt-3 mb-3 font-bold group-hover/card:text-white transition-all duration-600">{title}</h4>
      <p className="text-gray-600 group-hover/card:text-gray-400/80 font-medium transition-all duration-600 text-xs">{description}</p>
    </div>
  );
}