import React from "react";
import "../../static/css/index.css";
import Select from 'react-select'
const {options} = require('../../static/js/sc_options');

const SearchCard = ({setData, reference}) => {
    const handleSubmit = (e) =>{
        setData(e.value)

      }
    return (
        <div className="card cardH" ref={reference}>
            <div class="card-body">
                <form style={{"margin-bottom":"20px"}}>
                        <Select 
                            options={options} 
                            className="mb-3"
                            placeholder="Select Data"
                            isSearchable
                            onChange={handleSubmit}
                        />
                </form>
            </div>
        </div>
    );
}

export default SearchCard