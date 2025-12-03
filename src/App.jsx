import { Card } from "./Card";
import "./styles.css";
function App() {
    return (
        <>
            <div className="app-wrapper">
                <Card />
            </div>
            <div className="footer-credit">
                By Lanz -{" "}
                <a
                    href="https://github.com/RodeoRhodia/advanced-todo-list"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </>
    );
}

export default App;
