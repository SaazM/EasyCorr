import React, {useState} from "react";
import "../../static/css/index.css";

const Correlation = ({data1, data2}) =>{

    const [corr,setCorr] = useState("");
    const [notSet,setNotSet] = useState(true);
    const [loading,setLoading] = useState(true);
    const handleSubmit = (e) => {
        setNotSet(false)
        if(! data1 || ! data2) {
            setLoading(true)
            setCorr("You need to pick 2 datasets")
            setLoading(false)
        }
        else if(data1===data2){
            setLoading(true)
            setCorr("You cannot correlate the same dataset")
            setLoading(false)
        }
        else{
            setLoading(true)
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    code1: data1,
                    code2: data2,
                })
            }
            fetch("/api/get-corr", requestOptions).then((response) => 
                response.json()
            ).then((data)=>{
                setCorr(`The correlation is ${data["corrVal"]}`)
                setLoading(false)
            })
            
        }
    }

    function renderCorr(){
        if(notSet){
            return <h3 class="d-inline">Make Correlation ...</h3>
        }
        else if(loading){
            return <h3 class="d-inline">Loading ...</h3>
        }
        else{
            return <h3 class="d-inline">{corr}</h3>
        }
    }
    return(
        <div className="row mt-5 border border-2 rounded">
            <div className="col-12 col-md-6 mt-5 mb-5">
                <button type="submit" class="btn btn-primary btn-lg" onClick={handleSubmit} style= {{"color":"white"}}>Get Corr</button>
            </div>
            <div className="col-12 col-md-6 mt-5 mb-5">
                {renderCorr()}
            </div>
        </div>
    )
}
export default Correlation
 