import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
function App() {
  return (
<div className="app">
    <Router>
    <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/home" element={<Home />}/>   
        </Routes>
    </Router>
  </div>
  );
}

export default App;
