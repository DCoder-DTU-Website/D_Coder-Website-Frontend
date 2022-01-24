import React from "react";
import "./style.css";

const FormClosed = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-rose-100 to-teal-100 flex flex-col h-[90vh] justify-center items-center gap-y-4 sm:gap-y-16">
      <h1 className="fancy-text text-3xl sm:text-8xl">
        {`< `}Thank You{` />`}
      </h1>
      <h1 className="text-sm sm:text-2xl">Registrations have been closed</h1>
    </div>
  );
};

export default FormClosed;
