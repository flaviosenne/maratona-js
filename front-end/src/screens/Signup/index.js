import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className = "container h-100 pt-5">
            <h1>Sign Up</h1>
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
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type='password' className = 'form-control'></input>
                    </div>
                    <div>
                        <button className='btn btn-primary btn-round'> Submit</button>
                    </div>
                </form>
                <div className = "container text-center fixed-bottom pb-5">
                    <div className = "text-mutted">
                        Already have an Account?
                    </div>
                        <Link to = 'sign-up'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp