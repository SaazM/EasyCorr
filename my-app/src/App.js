import './App.css';
import NavbarOut from "./components/navbar-out.js";
import Hero from "./components/hero.js";
import TextSect  from "./components/text-sect.js"
import PicSect from "./components/pic-sect.js"
function App() {
  return (
    <>
      <NavbarOut/>
      <Hero/>
      <div className="container-xl mt-5 px-3">
        <div className="row gx-5">
          <div className="col-12 col-md-6">
            <TextSect/>
          </div>
          <div className="col-12 col-md-6">
            <PicSect/>
          </div>
          <div className="col-12 col-md-6">

          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
