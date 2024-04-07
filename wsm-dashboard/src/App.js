import "./App.css";
import DisplayDashboard from "./Pages/DisplayDashboard";
import SideBar from "./Component/SideBar/sideBar";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-content">
        <DisplayDashboard />
      </div>
    </div>
  );
}

export default App;
