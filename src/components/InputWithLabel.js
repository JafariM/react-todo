import React from "react";

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
        ref={inputRef} />
    </>
  )


}
export default InputWithLabel;