import Header from "./components/Header";
import FrontPage from "./containers/FrontPage";
import Todos from "./components/Todos";
import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: green;
  height: 91.5vh;
  display: flex;
`;

const NavWrapper = styled.div`
  background: blue;
  flex: 0 0 20%;
  height: 100%;
  padding: 20px 30px;
`;

const TodosWrapper = styled.div`
  background: yellow;
  flex: 0 0 80%;
  height: 100%;
  padding: 20px 30px;
  overflow-x: hidden;
  overflow-y: auto;
`;

function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <NavWrapper>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/todos">Todos</Link>
            </ul>
          </nav>
        </NavWrapper>
        <TodosWrapper>
          <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route path="todos" element={<Todos />} />
          </Routes>
        </TodosWrapper>
      </Wrapper>
    </>
  );
}

export default App;
