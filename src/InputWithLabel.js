
function InputWithLabel({ todoTitle, handleTitleChange, Children }) {
  return (
    <>
      <label htmlFor="todoTitle">{Children}</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}>
      </input>
    </>
  )
}
export default InputWithLabel;