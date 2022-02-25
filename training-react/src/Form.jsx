import { useState } from "react";


function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [success,setSuccess]= useState(false);
  let [failure,setFailure]= useState(false);
  let [passerr,setErr]= useState(false);
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
  
  return (
       
      <div className="form">
      {success ? <div className="success-msg">Registered Successfully!!!</div> : null}
      {failure ? <div className="failure-msg">Error in Registering!!!</div> : null}
      {passerr ? <div className="pass-msg">Password length should be<br /> greater than 6!!!</div> : null}
        <h1>Register Here!!!</h1>
        <input onChange={changeName} type="text" value={name} placeholder="Enter Your Name" />
        <input onChange={changeEmail} type="email" value={email} placeholder="Enter Your Email" required/>
        <input onChange={changePassword} type="password" value={password} placeholder="Enter Your Password" required/>
        <button type="button" onClick={buttonClicked}>Register</button>
      </div>
  );
}

export default Form;
