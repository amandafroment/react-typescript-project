import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

//the interface above, which is shown after the React.FC, is typescript
// telling react that you're getting a prop with these types
const TodoList: React.FC<ToDoListProps> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
