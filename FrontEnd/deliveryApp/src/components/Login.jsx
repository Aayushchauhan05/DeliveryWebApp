import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
const handlechange=(e)=>{
let name=e.target.name;
let value=e.target.value;
setlogiuser({
    ...logiuser,
    [name]:value,
})
}
const[eye,seteye]=useState(false)
const [logiuser,setlogiuser]=useState({
    email:"",
    password:""
})
const submit= async (e)=>{
 e.preventDefault()  
 try {
    const data= await fetch("http://localhost:5400/auth/login",{
    method:"POST",
    headers:{
"Content-Type":"application/json"
    },
    body:JSON.stringify(logiuser)
});
if (data.ok) {
    toast.success("Login successful",{
        position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
     });
}
 } catch (error) {
    console.log(error)
    toast.error("Register failed",{
        position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
     });
 } 
 navigate("/") 
}
  return (
   <>
    <div className="login-parent">
        <div className="login-main-child">
            
            <div className="child2">
                <div className="child2-header">
                    <h3>Welcome,to adidas</h3>
                    <h1>Login</h1>
                    <p>Login to access your travelwise  account</p>
                </div>

                <form action="" method="post" onSubmit={submit}>
                    <div className="child2-inputs">
                        <input type="email" name="email" id="email-child2" value={logiuser.email} onChange={handlechange} placeholder='Enter email id' />
                        <input type={eye? "text":"password"} name="password" id="child2-password" value={logiuser.password} onChange={handlechange}  placeholder='Enter password'/> <span className="eye" onClick={()=>{
                            seteye(!eye);
                        }}>{eye?<FaEye />:<FaEyeSlash />}</span>
                        <div className="rememberdiv">
                            <div className="remchild1 d-flex align-item-cente justify-content-centre"><input type="checkbox" name="" id=""/>
                                <p>remember me</p>
                            </div>
                            <div className="remchild2">Forgot password?</div>
                        </div>
                        <button type='submit'>Login</button>
                        <p>Don't have a account?<b><Link to="/register">Sign-up</Link></b></p>
                    </div>
                </form>
                <div className="anotherlogin">
                    <p>or login with</p>
                    <FcGoogle />
                </div>


            </div>
            
        </div>
        
    </div>
    <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
/>
   </>
  )
}

export default Login