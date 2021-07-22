import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../store/storeContext";
import ListItem from "./ListItem";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function TodoLists() {
  const { todoLists, setTodoLists } = useContext(StoreContext);
  // console.log("data in database", todoLists);

  return (
    <TodoListContainer>
      <>
        <h3>List of Todos</h3>

        {todoLists.map(({ todoTitle, todoDesc, completed }, idx) => {
          return (
            <ListItem
              key={idx}
              id={idx}
              title={todoTitle}
              description={todoDesc}
              completed={completed}
              statusChange={() => {
                let tempList = [...todoLists];
                tempList[idx].completed = !tempList[idx].completed;
                setTodoLists(tempList);
                console.log("Change checkbox ", todoLists);
              }}
              removeItem={() => {
                let tempList = [...todoLists];
                console.log("before removing", tempList);
                tempList = tempList.filter((_, idx2) => idx2 !== idx);
                console.log("after removing", tempList);
                setTodoLists(tempList);
              }}
            />
          );
        })}
      </>
    </TodoListContainer>
  );
}

export default TodoLists;
