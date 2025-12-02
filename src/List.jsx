import { TodoItem } from "./TodoItem";

export function List({ todos }) {
    return (
        <div className="list-container">
            <ul id="list">
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
