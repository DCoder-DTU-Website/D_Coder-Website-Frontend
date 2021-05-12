import React from "react";

function Form({ link }) {
  return (
    <div>
      <iframe src= {link} width={640} height={943} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
  );
}

export default Form;
