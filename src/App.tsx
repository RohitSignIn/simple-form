import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import InfoForm from "./components/InfoForm";

function App() {
  return (
    <>
      <div className='font-sans'>
        <ToastContainer />
        <Header />
        <div className='pt-[73px]'>
          <InfoForm />
        </div>
        <div className='text-center'>
          <p>@Bhagwan Singh</p>
          <p className='p-2'>
            <b>See All Entries:</b>{" "}
            <a
              href='https://contact-form-backend-x6uy.onrender.com/api/v1/contact'
              target='_blank'
            >
              https://contact-form-backend-x6uy.onrender.com/api/v1/contact
            </a>
          </p>
          <p className='p-2'>
            <b>Github Repo Link Frontend:</b>{" "}
            <a
              href='https://github.com/RohitSignIn/simple-form'
              target='_blank'
            >
              https://github.com/RohitSignIn/simple-form
            </a>
          </p>
          <p className='p-2'>
            <b>Github Repo Link Backend:</b>{" "}
            <a
              href='https://github.com/RohitSignIn/contact-form-backend'
              target='_blank'
            >
              https://github.com/RohitSignIn/contact-form-backend
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
