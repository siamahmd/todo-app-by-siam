import styled from "styled-components";
import Todo from "./Todo";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
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
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </Wrapper>
  );
}
