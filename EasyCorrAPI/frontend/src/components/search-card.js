import React from "react";
import "../../static/css/index.css";
import Select from 'react-select'

// import "../../static/css/bootstrap.css";

const options = [
    { value: 'DP04_0089E', label: 'Median value of owner occupied units' },
    { value: 'DP03_0063E', label: 'Mean household income' },
    { value: 'DP02_0068PE', label: 'Bachelor degree of higher(25 years and over)' },
    { value: "DP02_0071PE", label: "Percentage of population with disability status"}
  ]


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
            {/* <div>{data}</div> */}
        </div>
    );
}

export default SearchCard