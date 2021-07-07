function NewTodo() {
    return (
        <form>
            <h2>Add a ToDo</h2>
            <label>Task:</label>
            <input 
                type="text"
                id="task"
                value={""}
                onChange={null}
            />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default NewTodo;