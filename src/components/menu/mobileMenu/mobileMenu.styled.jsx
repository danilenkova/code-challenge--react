import styled from "styled-components";

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MenuTitle = styled.p`
  margin-right: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #1a1a1a;
`;
