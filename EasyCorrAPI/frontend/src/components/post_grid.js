import React, {useState} from "react";
import "../../static/css/index.css";
const {options} = require('../../static/js/sc_options');
const PostGrid = () =>{
    
    function inverse(lst){
        var obj = {};
        for(var key in lst){
            obj[lst[key].value] = lst[key].label
        }
        return obj;
    }
    const [queryset, setQueryset] = useState([])
    fetch("/api/corr").then((response) => 
    response.json()
    ).then((data)=>{
        setQueryset(data)
    })
    var optionsRev = inverse(options)
    const elems = [];
    queryset.forEach( (corr) => {
        elems.push(
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{`The value off the correlation is ${corr.corrVal}`}</h5>
                    <p class="card-text">{`${optionsRev[corr.code1]} correlated with ${optionsRev[corr.code2]}`}</p>
                    <a href="#" class="btn btn-secondary">delete</a>
                </div>
                </div>
            </div>
        )
    })
    return(
        <div className="row gx-5 gy-5">
            {elems}
        </div>
    )
}
export default PostGrid