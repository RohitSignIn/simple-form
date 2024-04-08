import { MENUOPEN } from "../../types/HeaderType";
import NavLinksData from "./NavLinksData";
import SignupBtn from "./SignupBtn";

function NavPopUp({ menuOpen }: { menuOpen: MENUOPEN }) {
  return (
    <nav
      className={`text-center text-xl text-slate-600 ${
        !menuOpen && "hidden"
      } md:hidden`}
    >
      {/* Small - Devices - POPUP */}
      {NavLinksData.filter((link) => link.smallDev).map((link) => {
        return (
          <div key={link.id} className='py-3 border-b-2'>
            <a href={link.href}>{link.smallDev}</a>
          </div>
        );
      })}

      <div className='mx-2 my-5 py-2 bg-yellow-300 rounded font-bold border-[1px] border-yellow-500'>
        <SignupBtn />
      </div>
    </nav>
  );
}

export default NavPopUp;
