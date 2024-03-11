import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/Login";
import './App.css';
import { ReactDOM } from "react";
import { Route, Routes } from "react-router-dom";
import RecoverPassword from "./components/RecoverPassword";


function App() {
  return (
    <div className="App">
      
        <Navigation />
          <Routes>
            <Route path="/login/recover-password" element={<RecoverPassword />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Landing />} />
          </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
