import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import {dispatch, useEffect} from "react"
import {auth} from './firebase';
function App() {

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
<div className="app">
    <Router>
    <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
