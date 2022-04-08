import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #cccccc;
  @media screen and (min-width: 1200px) {
    height: 106px;
  }
  @media screen and (min-width: 2100px) {
    max-width: 2400px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
