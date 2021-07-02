import React, {useState} from "react";
import "../../static/css/index.css";
import Cookies from 'js-cookie'
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
    const handleSave = (e) =>{
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFToken": Cookies.get('csrftoken')},
            body: JSON.stringify({
                code1: data1,
                code2: data2,
            })
        }
        fetch("/api/create-corr", requestOptions).then((response) => {
            response.json();
            }
        ).then((data)=>{
            console.log(data)
        })
    }
    const handleGet = (e) =>{

        fetch("/api/corr").then((response) => 
            response.json()
        ).then((data)=>{
            console.log(data)
        })
    }
    

    function renderCorr(){
        if(notSet){
            return <center><h3 class="d-inline">Make Correlation ...</h3></center>
        }
        else if(loading){
            return <center><h3 class="d-inline">Loading ...</h3></center>
        }
        else{
            return <center><h3 class="d-inline">{corr}</h3></center>
        }
    }
    return(
        <div className="container-lg">
            <div className="row mt-5 border border-2 rounded">
                <div className="col-6 col-md-4 mt-5 mb-5">
                    <center><button type="submit" class="btn btn-primary btn-lg" onClick={handleSubmit} style= {{"color":"white"}}>Get Corr</button></center>
                </div>
                <div className="col-6 col-md-4 mt-5 mb-5">
                <center><button type="submit" class="btn btn-secondary btn-lg" onClick={handleSave} style= {{"color":"white"}}>Save Corr</button></center>
                </div>
                <div className="col-12 col-md-4 mt-5 mb-5">
                    {renderCorr()}
                </div>
            </div>
            <center><button type="submit" class="btn btn-secondary btn-lg" onClick={handleGet} style= {{"color":"white"}}>gettt</button></center>
        </div>
    )
}
export default Correlation
 