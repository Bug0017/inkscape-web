import { FontsSelect } from "./components";
function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-64 bg-orange-100"></div>
      <div className="flex-grow"></div>
      <div className="w-96 bg-sky-100 pt-10 pl-5">
        <FontsSelect />
      </div>
    </div>
  );
}

export default App;
