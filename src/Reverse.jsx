import "./App.css";
import { useState } from "react";

function Reverse() {
    let reverse="";
const [name, setName] = useState("");
function changeName(event) {
    setName(event.target.value);
    reverse=name.split("").reverse().join("");
  }
  function clicked(){
    reverse=name.split("").reverse().join("");
  }
  return (
    <div>
      <p className="slg">Reverse the text/number here...</p>
      <input onChange={changeName} onClick={clicked(name)} name="name" className="input" type="text" value={name} placeholder="Enter any input" />
      <p className="revtext">{reverse}</p>
    </div>
    
  
  );
}

export default Reverse;
