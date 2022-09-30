import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: 'this is color Blue',
    value: 'blue'
  },
  {
    label: 'this is color Yellow',
    value: 'yellow'
  },
  {
    label: 'this is color Red',
    value: 'red'
  }
]
const App =()=>{

  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] =useState(true)

  return (
    <div>
      <button  
        onClick={()=> setShowDropdown(!showDropdown)}
        >
          Toggle Dropdown
        </button>
      <br />
      <br />
      <br />
      {showDropdown ?
      <Dropdown 
        selected ={selected} 
        onMenuClick={setSelected} 
        options={options}
        /> : null}
    </div>
  )
}
export default App;