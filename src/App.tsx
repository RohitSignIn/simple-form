function App() {
  return (
    <>
      <div className='font-sans px-2'>
        <div className='flex md:justify-between lg:justify-evenly items-center py-4'>
          {/* Logo - START */}
          <div>
            <h1 className='flex items-center gap-[0.1em] text-2xl font-bold tracking-wide'>
              <div className='px-2 bg-yellow-300 rounded text-white'>B</div>
              <div>ROWSEE</div>
            </h1>
          </div>
          {/* Logo - END */}

          {/* Nav - START */}
          {/* Medium and above - Devices */}
          <nav className='flex gap-8 text-slate-700 hidden'>
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
          </nav>
          {/* Nav - END */}

          {/* Login - Signup - BTN START */}
          <div className='flex items-center gap-4'>
            <div className='text-slate-700'>
              <a href='#'>Login</a>
            </div>
            <div className='px-2 py-2 bg-yellow-300 rounded font-bold border-[1px] border-yellow-500'>
              <a className='px-2' href='#'>
                Signup for free
              </a>
            </div>
          </div>
          {/* Login - Signup - BTN END */}
        </div>

        {/* Small - Devices - POPUP */}
        <nav>
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
        </nav>
        {/* Small - Devices - POPUP */}
      </div>
    </>
  );
}

export default App;
