import image from "../../../images/menu.svg";
import { MenuMobile, MenuTitle } from "./mobileMenu.styled";

const Menu = image;

const MobileMenu = () => {
  return (
    <MenuMobile>
      <MenuTitle>Menu</MenuTitle>
      <img src={Menu} alt="Menu" />
    </MenuMobile>
  );
};

export default MobileMenu;
