export function Modal({ isEditMode, closeEditModal }) {
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
                        defaultValue="Design new prototype"
                        className="modal-input"
                    />
                </div>
                <div className="modal-footer">
                    <button className="btn-secondary">Save</button>
                    <button className="btn-secondary danger">Delete</button>
                </div>
            </div>
        </div>
    );
}
