export default function CardHeader() {
    return (
        <header className="card-header">
            <h1 className="app-title">My Tasks</h1>
            <div className="filter-section">
                <div className="search-group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="search-icon"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        id="name"
                        placeholder="Search tasks..."
                    />
                </div>

                <label className="toggle-control">
                    <input type="checkbox" />
                    <span className="toggle-track">
                        <span className="toggle-indicator"></span>
                    </span>
                    <span className="toggle-text">Hide Done</span>
                </label>
            </div>
        </header>
    );
}
