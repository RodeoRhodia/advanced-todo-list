import { createContext, useEffect, useState } from "react";
import { CardHeader } from "./CardHeader";
import { List } from "./List";
import { TodoForm } from "./TodoForm";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Modal } from "./Modal";

const STORAGE_KEY = { TODOS_KEY: "TODOS_KEY" };

export const TodoActionsContext = createContext();

export function Card() {
    const [newTodoName, setNewTodoName] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [hideDone, setHideDone] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const [todos, setTodos] = useLocalStorage(STORAGE_KEY.TODOS_KEY, []);

    const searchedTodos =
        searchInput === ""
            ? todos
            : todos.filter((todo) =>
                  todo.name.toLowerCase().includes(searchInput.toLowerCase())
              );

    const notFinishedTodos = !hideDone
        ? searchedTodos
        : searchedTodos.filter((todo) => !todo.completed);

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

    function openEditModal() {
        setIsEditMode(true);
    }

    function closeEditModal() {
        setIsEditMode(false);
    }

    return (
        <div className="card">
            <CardHeader
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                hideDone={hideDone}
                setHideDone={setHideDone}
            />
            <TodoActionsContext value={{ toggleTodo, deleteTodo, openEditModal }}>
                <List todos={notFinishedTodos} />
            </TodoActionsContext>

            <TodoForm
                newTodoName={newTodoName}
                setNewTodoName={setNewTodoName}
                addNewTodo={addNewTodo}
            />

            <Modal isEditMode={isEditMode} closeEditModal={closeEditModal}/>
        </div>
    );
}
