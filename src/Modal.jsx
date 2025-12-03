import { useContext } from "react";
import { TodoActionsContext } from "./Card";

export function Modal({
    isEditMode,
    closeEditModal,
    selectedTodoToEdit,
    setSelectedTodoToEdit,
}) {
    const { deleteTodo, editTodo } = useContext(TodoActionsContext);
    return (
        <div
            id="edit-modal"
            className={`modal-overlay ${isEditMode ? "open" : ""}`}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Edit Task</h3>
                    <button
                        className="modal-close-btn"
                        onClick={closeEditModal}
                    >
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        value={selectedTodoToEdit.name}
                        onChange={(e) =>
                            setSelectedTodoToEdit({
                                ...selectedTodoToEdit,
                                name: e.target.value,
                            })
                        }
                        className="modal-input"
                    />
                </div>
                <div className="modal-footer">
                    <button
                        className="btn-secondary"
                        onClick={() => {
                            editTodo(
                                selectedTodoToEdit.id,
                                selectedTodoToEdit.name
                            );
                            closeEditModal();
                        }}
                    >
                        Save
                    </button>
                    <button
                        className="btn-secondary danger"
                        onClick={() => {
                            deleteTodo(selectedTodoToEdit.id);
                            closeEditModal();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
