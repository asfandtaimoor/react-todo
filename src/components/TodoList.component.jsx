import React from "react";

// Import components
import Todo from "./Todo.component";

const TodoList = ({ filteredTodos, todos, setTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
