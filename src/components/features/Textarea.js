import React from "react";
import "./Upload/style.css";

const Textarea = ({ rows, cols, value, limit }) => {
  const [content, setContent] = React.useState(value.slice(0, limit));

  const setFormattedContent = React.useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  const myStyle = {
    borderBottom: "2px solid lightgray",
    outline: "0",
  };

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
        style={myStyle}
        placeholder="Description"
        className="text_here"
      />
      <p>
        {content.length}/{limit}
      </p>
    </>
  );
};

export default Textarea;
