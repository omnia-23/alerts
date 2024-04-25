import Filter from "./components/Filter";
import Home from "./components/Home";
import Side from "./components/Sidebar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-around">
      <Side />
      <Home />
      <Filter />
    </div>
  );
}

export default App;
