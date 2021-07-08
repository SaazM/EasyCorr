import React from "react";
import "../static/css/index.css";
const Status = ({x, setX, reference}) => {
    //console.log(x)
        if(x===1){
            return(
                <div ref={reference}>
                    <div class="alert alert-success" role="alert">
                        Your post was successful <a href="/" class="alert-link">refresh</a> to see the changes.
                    </div>
                </div>
            )
        }
        else if(x===2){
            return(
                <div ref={reference}>
                    <div class="alert alert-danger" role="alert">
                        <strong>Duplicate Error</strong> You have already saved this correlation
                    </div>
                </div>

            )
        }
        else{
            return(null)
        }
}
export default Status

