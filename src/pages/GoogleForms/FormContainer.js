import React from "react";
import MinNavbar from "components/hero/MinNavbar";
function Form({ link }) {
  return (
    <div>
      <MinNavbar />
      <iframe
        src={link}
        width={640}
        height={943}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Form;
