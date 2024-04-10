import HandleInfoForm from "./InfoForm_comp/HandleInfoForm";

function InfoForm() {
  return (
    <div className='px-2 py-8 flex justify-center'>
      <div className='w-72 md:w-96 lg:w-2/5 px-4 rounded-lg'>
        <div className='py-4'>
          <h2 className='text-4xl font-bold text-yellow-300'>Contact Form</h2>
          <p>
            <i>We'll get back to you soon</i>
          </p>
        </div>
        <HandleInfoForm />
      </div>
    </div>
  );
}

export default InfoForm;
