import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      <NavigationBar></NavigationBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
