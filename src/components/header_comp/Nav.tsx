import NavLinksData from "./NavLinksData";

function Nav() {
  return (
    <nav className='hidden md:flex gap-8 text-slate-700'>
      {/* Medium and above - Devices */}
      {NavLinksData.filter((link) => link.smallDev).map((link) => {
        return (
          <div key={link.id}>
            <a href={link.href}>{link.smallDev}</a>
          </div>
        );
      })}
    </nav>
  );
}

export default Nav;
