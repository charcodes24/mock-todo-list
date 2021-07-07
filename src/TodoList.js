import TodoItem from "./TodoItem";

function TodoList({ todos }) {

    const displayTodos = todos.map((todo) => {
        return  <TodoItem key={todo.id} todo={todo} />
    })
    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {displayTodos}
            </ul>
        </div>
    )
}

export default TodoList;