import React, {useState} from "react";
import "../../static/css/index.css";
const PostGrid = () =>{
    const [queryset, setQueryset] = useState([])
    fetch("/api/corr").then((response) => 
    response.json()
    ).then((data)=>{
        setQueryset(data)
    })
    const elems = [];
    queryset.forEach( (corr) => {
        elems.push(
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{`${corr.code1} correlated with ${corr.code2}`}</h5>
                    <p class="card-text">{`The value off the correlation is ${corr.corrVal}`}</p>
                    <a href="#" class="btn btn-secondary">delete</a>
                </div>
                </div>
            </div>
        )
    })
    return(
        <div className="row">
            {elems}
        </div>
    )
}
export default PostGrid