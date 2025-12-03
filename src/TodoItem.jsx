import { useContext } from "react";
import { TodoActionsContext } from "./Card";

export function TodoItem({ id, name, completed }) {
    const { toggleTodo, deleteTodo, openEditModal } =
        useContext(TodoActionsContext);

    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    id={id}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <span className="custom-checkbox"></span>
                <span data-list-item-text>{name}</span>
            </label>
            <div className="action-buttons">
                <button
                    data-button-edit
                    className="btn-icon"
                    onClick={() => openEditModal(id, name)}
                >
                    Edit
                </button>
                <button
                    className="btn-icon danger"
                    onClick={() => deleteTodo(id)}
                    data-button-delete
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
