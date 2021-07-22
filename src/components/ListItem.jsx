import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  background: #e6ddc6;
  padding: 0.5rem;
  margin: 2px;
  display: flex;
  .listItemDetails {
    width: 100%;
  }
  .listItemControls {
    display: flex;
    flex-direction: column;

    height: auto;
    justify-content: center;
    align-items: center;

    input,
    button {
      margin: 0.25rem;
    }
  }
  .completed {
    text-decoration: line-through;
  }
`;

function ListItem({
  id,
  title,
  description,
  completed,
  statusChange,
  removeItem,
}) {
  return (
    <ListContainer>
      <div className="listItemDetails">
        <h4 className={completed ? "completed" : ""}>{` ${title}`}</h4>
        <p className={completed ? "completed" : ""}>{description}</p>
        {/* <p>Completed: {completed ? "Yes" : "No"}</p>
        {console.log("completed prop", completed)} */}
      </div>
      <div className="listItemControls">
        <input
          type="checkbox"
          name="complete"
          defaultChecked={completed}
          onChange={statusChange}
        />
        <button onClick={removeItem}>X</button>
      </div>
    </ListContainer>
  );
}

export default ListItem;
