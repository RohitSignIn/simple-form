function LoginSignupBtn() {
  return (
    <div className='hidden md:flex items-center gap-4'>
      {/* Medium and above - Devices */}
      <div className='text-slate-700'>
        <a href='#'>Login</a>
      </div>
      <div className='px-2 py-2 bg-yellow-300 rounded font-bold border-[1px] border-yellow-500'>
        <a className='px-2' href='#'>
          Signup for free
        </a>
      </div>
    </div>
  );
}

export default LoginSignupBtn;
