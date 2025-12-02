export function TodoForm({ newTodoName, setNewTodoName, addNewTodo }) {
    return (
        <form id="new-todo-form" onSubmit={addNewTodo}>
            <input
                type="text"
                id="todo-input"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
                placeholder="What needs to be done?"
            />
            <button className="btn-primary" type="submit">
                Add Task
            </button>
        </form>
    );
}
