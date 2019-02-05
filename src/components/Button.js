import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: .5rem
  color: var(--lightBlue);
  padding: .2rem .5rem
  cursor:pointer;
  margin:.2rem .5ream;
  transition: all 0.5s ease-in-out
  &:hover{
    background:  var(--lightBlue);
  color: var(--mianBlue)}
  &:focus{
    outline:none;
  }

`;
