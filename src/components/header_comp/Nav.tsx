function Nav() {
  return (
    <nav className='hidden md:flex gap-8 text-slate-700'>
      {/* Nav - START */}
      {/* Medium and above - Devices */}
      <div>
        <a href='#'>Features</a>
      </div>
      <div>
        <a href='#'>Pricing</a>
      </div>
      <div>
        <a href='#'>Docs</a>
      </div>
      <div>
        <a href='#'>Request Demo</a>
      </div>
      {/* Nav - END */}
    </nav>
  );
}

export default Nav;
