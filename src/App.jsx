import { Outlet } from "react-router-dom";
import { Header } from "./components/ComponentIndex";

function App() {
  return (
    <div className="min-h-screen content-between  bg-slate-50 ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
