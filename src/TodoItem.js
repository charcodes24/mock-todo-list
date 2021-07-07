function TodoItem({ todo }) {
    const {id, task, completed} = todo


    return (
        <li>{task}
            <label>
                Completed?
                <input
                    type="checkbox"
                    onChange={null}
                    checked={null}
                />
            </label>
            <button onClick={null}>Delete</button>
        </li>
    )
}

export default TodoItem;