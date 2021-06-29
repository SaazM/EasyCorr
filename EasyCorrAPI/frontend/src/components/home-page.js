  
import React, { useState, useRef  } from "react";
import Hero from "./hero";
import TextSect from "./text-sect";
import PicSect from "./pic-sect";
import SearchCard from "./search-card";
import Correlation from "./correlation";
const HomePage = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
    return (
      <div>
        <Hero reference={el1} click={()=> scrollToDiv(el2)} />
        <div className="container-xl mt-5 px-3">
          <div className="row gx-5">
            <div className="col-12 col-md-6">
              <TextSect/>
            </div>
            <div className="col-12 col-md-6">
              <PicSect/>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <SearchCard data={data1} setData={setData1} reference={el2}/>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <SearchCard data={data2} setData={setData2}/>
            </div>
            <Correlation data1={data1} data2={data2} />
          </div>
        </div>
        <div style={{"height":"200px"}}>

        </div>
      </div>


    );
}
export default HomePage
