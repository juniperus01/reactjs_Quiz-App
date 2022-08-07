import React, { useState } from "react";

function LoginForm(){
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    
      const [user, setUser] = useState({name: "", email: ""})
      const [error, setError] = useState("");
    
      const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in!");
            setUser({
                name: details.name,
                email: details.email
            });
        }else{
            console.log("Details do not match! ");
        }
      }
    
      const Logout = () => {
        setUser({name: "", email: ""});
      }
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type="submit" value="LOGIN" />


        </div>
        </form>


    )
}

export default LoginForm;