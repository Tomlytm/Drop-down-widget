import React, { useState, useEffect, useRef } from "react";

const Dropdown =({options, selected, onMenuClick})=> {

    const ref =useRef()
    const [open, setOpen]=useState(false)


    useEffect(()=>{
        document.body.addEventListener('click', (event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
                setOpen(false)
        })
    }, [])
    const dropdownList = options.map((item)=>{
        if(selected.label ===item.label){
            return null;
        }
        return(
            <div 
                onClick={()=>onMenuClick(item)}
                key= {item.value} 
                className="item"
                >
                {item.label}
            </div>
        )
    })
    return(
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={()=>setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active': ''} `}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''} `}>{dropdownList}</div>
                </div>
            </div>
        </div>
    )

}
export default Dropdown;