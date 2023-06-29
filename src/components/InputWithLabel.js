import React from "react";
import propTypes, { object, string } from "prop-types";

function InputWithLabel({ children, todoTitle, handleTitleChange }) {
  //add a state hook to keep input field focused after submission
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
}
InputWithLabel.propTypes = {
  children: propTypes.node,
  todoTitle: propTypes.string,
  handleTitleChange: propTypes.func,
};

export default InputWithLabel;
