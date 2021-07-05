import React, { useState, useRef, useEffect  } from "react";
import { render } from "react-dom";
import About from "./about";
import Homepage from "./home-page";
import NavbarOut from "./navbar-out";
import Login from "./Login";
import Footer from "./footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    fetch("/api/is-auth").then((response) => 
      response.json()
    ).then((data)=>{
      if(data.val==="True"){
        setLoggedin(true);
      }
      else{
        setLoggedin(false);
      }
    })
  }, [])
  return (
    <div>
      <NavbarOut loggedin={loggedin}/>
      <Router>
        <Switch>
            <Route exact path="/">
                <Homepage x={loggedin}/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/login" >
              <Login x={loggedin} y={setLoggedin}/>
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}
export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);