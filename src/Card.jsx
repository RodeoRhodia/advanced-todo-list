import { useState } from "react";
import { CardHeader } from "./CardHeader";
import { List } from "./List";
import { TodoForm } from "./TodoForm";

export function Card() {
    const [newTodoName, setNewTodoName] = useState("");
    const [todos, setTodos] = useState([]);

    function addNewTodo(e) {
        e.preventDefault();
        
        if (newTodoName === "") return;

        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    name: newTodoName,
                    completed: false,
                    id: crypto.randomUUID(),
                },
            ];
        });
        setNewTodoName("");
    }

    function toggleTodo(todoId, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === todoId) return { ...todo, completed };

                return todo;
            });
        });
    }

    function deleteTodo(todoId) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== todoId);
        });
    }

    return (
        <div className="card">
            <CardHeader />
            <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            <TodoForm newTodoName={newTodoName} setNewTodoName={setNewTodoName} addNewTodo={addNewTodo} />
        </div>
    );
}
