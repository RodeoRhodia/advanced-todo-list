import { useContext } from "react";
import { TodoActionsContext } from "./Card";

export function TodoItem({ id, name, completed }) {
    const { toggleTodo, deleteTodo } = useContext(TodoActionsContext);
    
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <span className="custom-checkbox"></span>
                <span data-list-item-text>{name}</span>
            </label>
            <div className="action-buttons">
            <button href="#edit-modal" data-button-edit className="btn-icon">Edit</button>
                <button className="btn-icon danger" onClick={() => deleteTodo(id)} data-button-delete>
                    Delete
                </button>
            </div>
        </li>
    );
}
