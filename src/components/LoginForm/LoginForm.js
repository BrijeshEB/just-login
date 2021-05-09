import React, { useState } from 'react';
import './Login.css';

function LoginForm( {Login, error} ) {
    const [details, setDetails] = useState({name:'',email:'',password:''});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className="loginpage">
            <div className="login-form">
                <h4 className="title text-center">Login to your account</h4>
                <form onSubmit={submitHandler}>
                    <input className="form-control" type="email" name="email" id="email" placeholder="Email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
                    <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
                    <button className="btn btn-block btn-info btn-lg text-white w-100" type="submit" value="Login">Login</button>
                    {(error != '' ? (<p className="text-danger m-0 mt-2">{error}</p>) : '')}
                </form>
            </div>
            {/* <form onSubmit={submitHandler}>
                {(error != '' ? (<p>{error}</p>) : '')}
                <input type="text" name="name" id="name" placeholder="Name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} /><br/>
                <input type="email" name="email" id="email" placeholder="Email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} /><br/>
                <input type="password" name="password" id="password" placeholder="Password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} /><br/>
                <input type="submit" value="Login" />
            </form> */}
        </div>
    )
}

export default LoginForm;