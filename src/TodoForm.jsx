import { useEffect, useState } from "react";

export function TodoForm({ newTodoName, setNewTodoName, addNewTodo }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth < 476);
        };
        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

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
                {isMobile ? "Add" : "Add Task"}
            </button>
        </form>
    );
}
