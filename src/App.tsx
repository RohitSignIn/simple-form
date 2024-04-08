import Header from "./components/Header";
import InfoForm from "./components/InfoForm";

function App() {
  return (
    <>
      <div className='font-sans'>
        <Header />
        <div className='pt-[73px]'>
          <InfoForm />
        </div>
      </div>
    </>
  );
}

export default App;
