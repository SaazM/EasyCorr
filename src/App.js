import React, { useState, useEffect  } from "react";
import About from "./components/about";
import Homepage from "./components/home-page";
import NavbarOut from "./components/navbar-out";
import Login from "./components/Login";
import Footer from "./components/footer";
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
    <div className="page-container">
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
      <Footer/>
    </div>

  );
}
export default App;
