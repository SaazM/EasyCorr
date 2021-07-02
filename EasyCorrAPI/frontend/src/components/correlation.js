import React, {useState} from "react";
import "../../static/css/index.css";
import Cookies from 'js-cookie'
import { render } from "react-dom";
const Correlation = ({data1, data2, looged}) =>{

    const [corr,setCorr] = useState("");
    const [notSet,setNotSet] = useState(true);
    const [loading,setLoading] = useState(true);
    const [notSetSign, setNotSetSign] = useState(false)
    const handleSubmit = (e) => {
        setNotSet(false)
        setNotSetSign(false)
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
        if(corr){
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
            window.location.href = "http://localhost:8000/";
        }
        else{
            setNotSetSign(true)
            console.log(notSetSign)
        }
    }
    

    function renderCorr(){
        if(notSetSign){
            return <center><h3 class="d-inline">You have to get correlation before saving</h3></center>
        }
        else if(notSet){
            return <center><h3 class="d-inline">Make Correlation ...</h3></center>
        }
        else if(loading){
            return <center>            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div></center>
        }
        else{
            return <center><h3 class="d-inline">{corr}</h3></center>
        }
    }
    function renderSave(){
        if(looged){
            return(<center><button type="submit" class="btn btn-secondary btn-lg" onClick={handleSave} style= {{"color":"white"}}>Save Corr</button></center>)
        }
        else{
            return(<div className="none"></div>)
        }
    }
    return(
        <div className="container-lg">
            <div className="row mt-5 border border-2 rounded">
                <div className="col-6 col-md-4 mt-5 mb-5">
                    <center><button type="submit" class="btn btn-primary btn-lg" onClick={handleSubmit} style= {{"color":"white"}}>Get Corr</button></center>
                </div>
                <div className="col-6 col-md-4 mt-5 mb-5">
                    {renderSave()}
                </div>
                <div className="col-12 col-md-4 mt-5 mb-5">
                    {renderCorr()}
                </div>
            </div>
        </div>
    )
}
export default Correlation
 