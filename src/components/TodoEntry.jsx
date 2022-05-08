import React, { useState, useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../store/storeContext";

const Div = styled.div`
  padding: 1rem;
  label,
  input {
    margin: 0.5rem;
  }
  button {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

function TodoEntry() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const todoListStore = useContext(StoreContext);

  return (
    <Div>
      <label htmlFor="todoTitle">Todo Title</label>
      <br />
      <input
        type="text"
        name="todoTitle"
        value={todoTitle}
        data-testid="todoTitle"
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <br />
      <label htmlFor="todoDescription">Todo Description</label>
      <br />
      <input
        type="text"
        name="todoDescription"
        data-testid="todoDescription"

        value={todoDesc}
        onChange={(e) => {
          setTodoDesc(e.target.value);
        }}
      />
      <br />
      <button
      data-testid="todoAddBtn"
        onClick={(e) => {
          console.log("Add button clicked");
          console.log({ todoTitle, todoDesc });
          setTodoTitle("");
          setTodoDesc("");

          todoListStore.setTodoLists([
            ...todoListStore.todoLists,
            { todoTitle, todoDesc, completed: false },
          ]);
          console.log("store", todoListStore);
        }}
      >
        Add
      </button>
    </Div>
  );
}

export default TodoEntry;
