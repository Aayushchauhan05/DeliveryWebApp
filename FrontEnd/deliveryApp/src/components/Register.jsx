import {React,useState} from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Register() {
   const navigate= useNavigate()
        const[eye,seteye]=useState(false)
        const [reguser,setreguser]=useState({
            username:"",
            phone:"",
            email:"",
            password:""
        })
        const handlechange=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setreguser({
                ...reguser,
                [name]:value,
            })
            }
        const submit=async(e)=>{
        e.preventDefault()
        try {
            const data= await fetch("http://localhost:5400/auth/register",{
            method:"POST",
            headers:{
    "Content-Type":"application/json"
            },
            body:JSON.stringify(reguser)
        });
        
        if (data.ok) {
            toast.success("Register successful",{
                position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
             });
             setTimeout(()=>{
                navigate("/Login")
             },1000)
             
        }
        } catch (error) {
            console.log(error)
            toast.error("already exist",{
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
   <section className='register'><h2>Sign Up</h2>
<form onSubmit={submit}>
    <div>
        <label for="fullname">Full Name:</label><br/>
        <input type="text" placeholder="Enter your full name" name='username' value={reguser.username} onChange={handlechange}/>
    </div>
    <div>
        <label for="email">Email:</label><br/>
        <input type="email" placeholder="Enter your email address" name='email' value={reguser.email} onChange={handlechange}/>
    </div>
    <div>
        <label for="phone">Phone:</label><br/>
        <input type="number" name='phone' value={reguser.phone} onChange={handlechange}/>
    </div>
    <div>
        <label for="password">Password:</label><br/>
        <input type="password" placeholder="Choose a password" name='password' value={reguser.password} onChange={handlechange}/>
    </div>
    <button type="submit">Sign Up</button>
</form>
<div>
    Already have an account? <a href="signin.html">Sign In</a>
</div></section>
     
     <ToastContainer
    position="top-right"
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

export default Register