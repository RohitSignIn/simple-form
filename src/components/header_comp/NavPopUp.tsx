import { MENUOPEN } from "../../types/HeaderType";

function NavPopUp({ menuOpen }: { menuOpen: MENUOPEN }) {
  return (
    <nav
      className={`text-center text-xl text-slate-600 ${
        !menuOpen && "hidden"
      } md:hidden`}
    >
      {/* Small - Devices - POPUP */}
      <div className='py-3 border-b-2 font-bold'>
        <a href='#'>Home</a>
      </div>
      <div className='py-3 border-b-2'>
        <a href='#'>Features</a>
      </div>
      <div className='py-3 border-b-2'>
        <a href='#'>Pricing</a>
      </div>
      <div className='py-3 border-b-2'>
        <a href='#'>Documentation</a>
      </div>
      <div className='py-3 border-b-2'>
        <a href='#'>Login</a>
      </div>
      <div className='mx-2 my-5 py-2 bg-yellow-300 rounded font-bold border-[1px] border-yellow-500'>
        <a className='text-black' href='#'>
          Signup for free
        </a>
      </div>
    </nav>
  );
}

export default NavPopUp;
