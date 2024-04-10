function ErrorMessage({ msg }: { msg: string }) {
  return (
    <p className='text-sm text-yellow-300'>
      <i>{msg}</i>
    </p>
  );
}

export default ErrorMessage;
