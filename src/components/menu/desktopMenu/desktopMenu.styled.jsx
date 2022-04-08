import styled from "styled-components";

export const StyledDesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  :not(:last-child) {
    margin-right: 110px;
  }
`;

export const MenuLink = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #1a1a1a;
`;
