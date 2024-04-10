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
      </div>
    </>
  );
}

export default App;
