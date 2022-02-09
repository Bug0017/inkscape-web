import { FontsSelect } from "./components";
import "./App.css";
import { useAppSelector } from "./state/hooks";
function App() {
  const fontFamily = useAppSelector((state) => state.selectedFont.name);
  return (
    <div className="flex w-screen h-screen">
      <div className="w-64 bg-orange-100"></div>
      <div className="flex-grow p-20">
        <h2 className="text-3xl" style={{ fontFamily }}>
          test
        </h2>
      </div>
      <div className="w-96 bg-sky-100 pt-10 pl-5">
        <FontsSelect />
      </div>
    </div>
  );
}

export default App;
