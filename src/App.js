import "./App.css";
import styled from "styled-components";
import TodoEntry from "./components/TodoEntry";
import TodoLists from "./components/TodoLists";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  border: 1px solid black;
  .headingTitle {
    text-align: center;
    background: #cdf0ea;
    // color: white;
    width: 100%;
    padding: 1rem;
  }
`;

function App() {
  return (
    <MainSection>
      <div className="headingTitle">Todo App</div>
      <TodoEntry />
      <TodoLists />
    </MainSection>
  );
}

export default App;
