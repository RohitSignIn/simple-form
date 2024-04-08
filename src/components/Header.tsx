import { useState } from "react";

import Nav from "./header_comp/Nav";
import Logo from "./header_comp/Logo";
import LoginSignupBtn from "./header_comp/LoginSignupBtn";
import MenuBtn from "./header_comp/MenuBtn";
import NavPopUp from "./header_comp/NavPopUp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`fixed w-full px-2 bg-white ${
        menuOpen && "h-screen"
      } md:h-auto`}
    >
      <div className='flex justify-between lg:justify-evenly items-center py-4 border-b-2'>
        <Logo />
        <Nav />

        {/* Login - Signup - BTN */}
        {/* Medium and above - Devices */}
        <LoginSignupBtn />

        {/* Menu - BTN */}
        {/* Small Devices */}
        <MenuBtn setMenuOpen={setMenuOpen} />
      </div>

      {/* Small - Devices - POPUP */}
      <NavPopUp menuOpen={menuOpen} />
    </div>
  );
}

export default Header;
