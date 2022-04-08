import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 428px) {
    max-width: 600px;
  }
  @media screen and (min-width: 600px) {
    padding: 0 111px;
    max-width: 1728px;
  }
`;
