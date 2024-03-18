import logo from './logo.svg';
import './App.css';
import Question from './component/Question';
import Data from './component/Data';

function App() {
  return (
   <>
     <div className="bg-slate-700 w-[100vw] h-[100vh] flex flex-col gap-10 items-center pt-[8%]">
     <h1 className="text-4xl font-bold text-orange-500">Quize App</h1>

      {/* <Question /> */}
      <Data />
     </div>
   </>
  );
}

export default App;
