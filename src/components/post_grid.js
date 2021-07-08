import React, {useEffect, useState} from "react";
import "../static/css/index.css";
import Cookies from 'js-cookie'
const {options} = require('../static/js/sc_options');
const PostGrid = () =>{
    
    function inverse(lst){
        var obj = {};
        for(var key in lst){
            obj[lst[key].value] = lst[key].label
        }
        return obj;
    }
    const handleDelete = (id) => {
        console.log(id)
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "X-CSRFToken": Cookies.get('csrftoken')}
        }
        console.log(id)
        fetch(`/api/delete/${id}`, requestOptions).then((response) => {
            response.json();
            window.location.href = "/";
            }
        )

    }
    //const [queryset, setQueryset] = useState([])
    var optionsRev = inverse(options)
    const [elems, setElems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const setElms = (queryset) =>{
            const elems = [];
            queryset.forEach( (corr) => {

                elems.push(
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{`The value off the correlation is ${corr.corrVal}`}</h5>
                            <p class="card-text">{`${optionsRev[corr.code1]} correlated with ${optionsRev[corr.code2]}`}</p>
                            <button onClick={() => {handleDelete(corr.id)}} class="btn btn-secondary">Delete</button>
                        </div>
                        </div>
                    </div>
                )
            })
            setElems(elems)
            setLoading(false)
        }
        fetch("/api/corr").then((response) => 
            response.json()
        ).then((data)=>{
            setElms(data)
        })
    }, [])
    if(loading){
        return(
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
    else{
        return(
            <div className="row gx-5 gy-5">
                {elems}
            </div>
        )
    }
}
export default PostGrid