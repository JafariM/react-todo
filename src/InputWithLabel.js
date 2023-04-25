function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="todoTitle">{props.label}:</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}>
      </input>
    </>
  )
}
export default InputWithLabel;