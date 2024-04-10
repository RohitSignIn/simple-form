import { useForm, SubmitHandler } from "react-hook-form";
import CountryList from "country-list-with-dial-code-and-flag";
import ErrorMessage from "./ErrorMessage";

type Inputs = {
  name: string;
  email: string;
  dialcode: string;
  phone: string;
};

function HandleInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='py-2'>
        <label className='block text-sm font-semibold' htmlFor='name'>
          Name
        </label>
        <input
          className='bg-yellow-50 text-sm py-4 px-4 w-full rounded-md outline-none'
          id='name'
          type='text'
          placeholder='Enter Name'
          {...register("name", {
            required: "Name field is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
            maxLength: {
              value: 20,
              message: "Maximum 20 characters allowed",
            },
          })}
        />
        {errors.name && <ErrorMessage msg={`${errors.name?.message}`} />}
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
          {...register("email", {
            required: "Email field is required",
          })}
        />
        {errors.email && <ErrorMessage msg={`${errors.email?.message}`} />}
      </div>

      <div className='py-2'>
        <label className='block text-sm font-semibold' htmlFor='phone'>
          Phone
        </label>
        <div className='flex gap-2'>
          <select
            className='bg-yellow-50 text-sm py-4 px-2 rounded-md outline-none'
            {...register("dialcode")}
            defaultValue={"+91"}
          >
            {CountryList.getAll().map((country, idx) => {
              return (
                <option key={idx} value={country.dial_code}>
                  {country.code + " " + country.dial_code}
                </option>
              );
            })}
          </select>
          <input
            className='bg-yellow-50 text-sm py-4 px-4 w-full rounded-md outline-none'
            id='phone'
            type='tel'
            placeholder='Enter Phone Number'
            {...register("phone", {
              required: "Phone field is required",
              minLength: {
                value: 3,
                message: "Minimum 4 digits required",
              },
              maxLength: {
                value: 20,
                message: "Maximum 13 digits allowed",
              },
            })}
          />
        </div>
        {errors.phone && <ErrorMessage msg={`${errors.phone?.message}`} />}
      </div>
      <div className='py-4 text-center'>
        <input
          type='submit'
          className='bg-yellow-300 py-2 text-center cursor-pointer px-4 rounded font-bold'
          defaultValue={"Submit"}
        />
      </div>
    </form>
  );
}

export default HandleInfoForm;
