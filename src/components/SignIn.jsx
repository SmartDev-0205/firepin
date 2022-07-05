import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (

        <div className='sign'
            style={
                {marginTop: "100px"}
        }>
            <div id="loginForm" className="card mr-auto ml-auto mt-4 p-4">
                <h2 className="text-secondary text-center">Login</h2>
                <form className="p-4 form">
                    <div className="form-group">
                        <label for="username">
                            Username
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input type="password" className="form-control"/>
                    </div>
                 
                    <br/>
                    <Link to="/kyc">
                    <input type="submit" value="Login" className="btn btn-primary btn-block"/>
                    </Link>
                </form>

                <br/>
                <p className="text-right">Don't have an account?
                    <a className="login-a" href="javascript:showRegistration()">Register here.</a>
                </p>
            </div>

            <div id="registrationForm" className="card mr-auto ml-auto mt-4 p-4 hidden">
                <h2 className="text-secondary text-center">Register</h2>
                <form className="p-4 form">
        
                    <div className="form-group">
                        <label for="username">
                            Username
                        </label>
                        <input type="text" name="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="email">
                            Email
                        </label>
                        <input type="email" name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input type="text" name="password" className="form-control"/>
                    </div>
                    <br/>
                    <input type="submit" value="Register" className="btn btn-primary btn-block"/>
                </form>
                <br/>
                <p className="text-right">Already have an account?
                    <a className="login-a" href="javascript:showLogin()">Login here.</a>
                </p>
            </div>
        </div>


    )
}

export default SignIn;
