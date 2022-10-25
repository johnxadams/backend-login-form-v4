import styled from "styled-components";

export const DefaultErrorBox = styled.div`
  /* border: 2px solid #ccc; */
  margin: 2em auto;
  width: 17em;
  p {
    font-style: italic;
    color: lightcoral;
    &::before {
      content: "* ";
    }
  }
`;
