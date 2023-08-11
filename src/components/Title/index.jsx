import React from "react";

function Title({ title, page, text }) {
  return (
    <div className="text-center">
      <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
        {title}
      </span>
      <h2 className="md:text-3xl text-xl font-semibold my-5">{page}</h2>
      <p className="text-slate-500">{text}</p>
    </div>
  );
}

export default Title;
