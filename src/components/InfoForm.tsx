import { ChangeEvent, useState } from "react";

function InfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  return (
    <div className='px-2 py-8 flex justify-center'>
      <div className='w-72 md:w-96 lg:w-2/5 px-4 border-2 rounded-lg'>
        <div className='py-4'>
          <h2 className='text-4xl font-bold text-yellow-300'>Contact Form</h2>
          <p>
            <i>We'll get back to you soon</i>
          </p>
        </div>
        <div>
          <div className='py-2'>
            <label className='block text-sm font-semibold' htmlFor='name'>
              Name
            </label>
            <input
              className='bg-yellow-50 text-sm py-4 px-4 w-full rounded-md outline-none'
              id='name'
              type='text'
              placeholder='Enter Name'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='py-2'>
            <label className='block text-sm font-semibold' htmlFor='email'>
              Email
            </label>
            <input
              className='bg-yellow-50 text-sm py-4 px-4 w-full rounded-md outline-none'
              id='email'
              type='email'
              placeholder='Enter Email'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='py-2'>
            <label className='block text-sm font-semibold' htmlFor='phone'>
              Phone
            </label>
            <input
              className='bg-yellow-50 text-sm py-4 px-4 w-full rounded-md outline-none'
              id='phone'
              type='tel'
              placeholder='Enter Phone Number'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='py-4 text-center'>
            <button className='bg-yellow-300 py-2 px-4 rounded font-bold'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoForm;
