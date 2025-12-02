import { TodoItem } from "./TodoItem";

export function List({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="list-container">
            <ul id="list">
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
