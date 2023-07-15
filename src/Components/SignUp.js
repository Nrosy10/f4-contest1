import React,{useState} from "react"; 

const SignUp=()=>{

    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
   
    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Enter Your Name")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Enter Your Email-id")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Enter Password")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("User Registered Successfully")
        setError("")

    }
   
    return(
        <div className="maindiv">
         
         <div className="imagdiv">
            <img src="#03.jpg" alt="imageof"/>
        </div>
       
        <div  className="formdiv">
        {/* <div> */}
            {
                error && <h1> {error}</h1>
            }
            {
                success && <h1>{success}</h1>
            }
            <form  onSubmit={validateForm}>
                <input className="fields" type="text" placeholder="Enter Your Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input className="fields" type="email" placeholder="Enter Your Email" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <input className="fields" type="password" placeholder="Enter Your Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
                <input className="fields" type="password" placeholder="Enter Your Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />

                <button className="bttn" type="Submit" >Create Account</button>
            </form>
        {/* </div> */}
        </div>
        
        </div>  
    )
}











export default SignUp;