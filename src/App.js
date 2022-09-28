import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  {
   label: 'The color blue',
   value: 'blue' 
  }, 
  {
   label: 'The color red',
   value: 'red' 
  }, 
  {
   label: 'The color green',
   value: 'green' 
  }, 
  
]
function App() {
  
const [selected, setSelected] =useState(options[0])
  return (
    <Dropdown  
      selected = {selected}
      onInputClick= {setSelected} 
      options= {options} />
  );
}

export default App;
