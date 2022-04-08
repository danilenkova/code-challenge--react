import {
  StyledDesktopMenu,
  MenuList,
  MenuItem,
  MenuLink,
} from "./desktopMenu.styled";
const menu = ["Find Pet", "About", "Contact"];

const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <MenuList>
        {menu.map((item) => {
          return (
            <MenuItem key={item}>
              <MenuLink>{item}</MenuLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </StyledDesktopMenu>
  );
};

export default DesktopMenu;
