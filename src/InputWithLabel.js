import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, Children }) {

  //add a state hook to keep input field focused after submission
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{Children}</label>
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