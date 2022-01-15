import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <div className="MainContainer">
        <Sidebar />
          <div className="WindowWrapper"></div>
      </div>
    </div>
  );
}

export default App;
