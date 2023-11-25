import React from 'react'

const NewTodoForm = (props) => {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();

        if(newItem==="") return

        props.onSubmit(newItem)

        setNewItem("") //clear out the input after adding the element
      }
  return (
    <form onSubmit={handleSubmit} className="new-item-form" action="">
        <div className="form-row">
          <label htmlFor="item"> Add New Item🎉</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item⭐</button>
      </form>
  )
}

export default NewTodoForm