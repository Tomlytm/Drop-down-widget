import React from "react";

const Dropdown =( { options, selected, onInputClick })=>{
 const renderedItems = options.map((item)=>{

    if(selected.label === item.label){
        return null
    }
    return(
        <div  
            onClick={()=>{onInputClick(item)}}
            key={item.value} 
            className="item"
            >
            {item.label}
        </div>
    )
 })
    return(
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">{renderedItems}</div>
                </div>

            </div>
        </div>
    )
}
export default Dropdown;