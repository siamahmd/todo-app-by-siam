import styled from "styled-components";
import Todo from "./Todo";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 0.9rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default function Todos() {
  return (
    <Wrapper>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </Wrapper>
  );
}
