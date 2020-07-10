import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className = "container h-100 pt-5">
            <h1>Sign In</h1>
            <div clssName = "d-flex flex-collumn h-100">
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='text' className = 'form-control'></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' className = 'form-control'></input>
                    </div>
                    <div>
                        <button className='btn btn-primary btn-round'> Submit</button>
                    </div>
                </form>
                <div className = "container text-center fixed-bottom pb-5">
                    <div className = "text-mutted">
                        Don't have an Account?
                    </div>
                        <Link to = 'sign-in'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn