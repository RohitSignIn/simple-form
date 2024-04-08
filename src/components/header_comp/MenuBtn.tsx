import React from "react";
import { MENUOPEN } from "../../types/HeaderType";

function MenuBtn({
  setMenuOpen,
}: {
  setMenuOpen: React.Dispatch<React.SetStateAction<MENUOPEN>>;
}) {
  return (
    <div className='md:hidden'>
      {/* Small Devices */}
      <button
        onClick={() => setMenuOpen((prev: MENUOPEN) => !prev)}
        className='px-2 py-1 border-[1px] border-black rounded font-bold hover:bg-slate-200'
      >
        MENU
      </button>
    </div>
  );
}

export default MenuBtn;
