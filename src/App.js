import Header from "./components/Header";
import Home from "./containers/Home";
import Todos from "./components/Todos";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 91.5vh;
  display: flex;
`;

const NavWrapper = styled.div`
  flex: 0 0 20%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    display: none;
  }
`;

const TodosWrapper = styled.div`
  background-color: rgb(8 47 73);
  flex: 0 0 80%;
  height: 100%;
  padding: 20px 30px;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 640px) {
    flex: 0 0 100%;
  }
`;

function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <NavWrapper>
          <Sidebar></Sidebar>
        </NavWrapper>
        <TodosWrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="todos" element={<Todos />} />
          </Routes>
        </TodosWrapper>
      </Wrapper>
    </>
  );
}

export default App;
