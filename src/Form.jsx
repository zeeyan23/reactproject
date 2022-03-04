import { useState } from "react";


function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [success,setSuccess]= useState(false);
  let [failure,setFailure]= useState(false);
  let [hideit,setHideit]= useState(true);
  let [passerr,setErr]= useState(false);
  let [showthis,setshow]=useState(false);
  let [backbtn,setbtn]=useState(false);
  function changeName(event) {
    setName(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }
    function buttonClicked(event){
      if((name && email && password)!=""){
        if(password.length>6){
            
            setSuccess(true);
            setFailure(false);
            setErr(false);
            setHideit(false);
            setshow(true);
            setbtn(true);
            setEmail("");
            setName("");
            setPassword("");
          }
        else{
          setSuccess(false);
          setErr(true);
          setFailure(false);
        }
      }
      else{
        setFailure(true);
      }
    }
    function backbtnClicked(event){
      setHideit(true);
      setshow(false);
      setbtn(false);
      setSuccess(false);
      
    }
  return (
       
      <div className="form">
      {success ? <div className="success-msg">Registered Successfully!!!</div> : null}
      {failure ? <div className="failure-msg">Error in Registering!!!</div> : null}
      {passerr ? <div className="pass-msg">Password length should be<br /> greater than 6!!!</div> : null}
      {hideit ? <div className="form1"><h1 className="hideit">Register Here!!!</h1>
        <input className="hideit" onChange={changeName} type="text" value={name} placeholder="Enter Your Name" />
        <input className="hideit" onChange={changeEmail} type="email" value={email} placeholder="Enter Your Email" required/>
        <input className="hideit" onChange={changePassword} type="password" value={password} placeholder="Enter Your Password" required/>
        <button className="hideit" type="button" onClick={buttonClicked}>Register</button></div> : null}
      {/*{showthis ? <div className="show"></div> : null}*/}
      {backbtn ? <button className="goback" type="button" onClick={backbtnClicked}>Go back</button> : null}
      </div>
      
      
      
  );
}

export default Form;
