import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className='inputForm'>
            <h1>Create an account</h1>
            <div>
                {/* <form className='inputField' onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" ref={register({ required: true })} placeholder='Your Name' required />
                    {errors.name && <span className='error'>Name is required</span>}

                    <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Your Email' required />
                    {errors.email && <span className='error'>Email is required</span>}

                    <input name="password" ref={register({ required: true, minLength: 6 })} placeholder='Your Password' required />
                    {errors.password && <span className='error'>Password is required</span>}

                    <input name="confirmPassword" ref={register({ required: true })} placeholder='Confirm Your Password' required />
                    {errors.confirmPassword && <span className='error'>Confirmation of your password is required</span>}

                    <input type="submit" value='Create an account' />
                </form> */}

                {/* BOOTSTRAP FORM */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" ref={register({ required: true })} placeholder='Your Name' type="text" className="form-control" required />
                        {errors.name && <span className='error'>Name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Your Email' type="email" className="form-control" required />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                        {errors.email && <span className='error'>Email is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name="password" ref={register({ required: true, minLength: 6 })} placeholder='Your Password' type="password" className="form-control" required />
                        {errors.password && <span className='error'>Password is required (minimum 6 characters)</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input name="confirmPassword" ref={register({ required: true })} placeholder='Confirm Your Password' type="password" className="form-control" required />
                        {errors.confirmPassword && <span className='error'>Confirmation of your password is required</span>}
                    </div>

                    <input type="submit" className="btn btn-primary" value='Create an account' />

                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>

                <div style={{ textAlign: 'center' }}>
                    <h5>Already have an account? <span>Login</span></h5>
                    <p>---------------------or---------------------</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button style={{borderRadius:'20px'}} className="btn btn-outline-danger" type="button">Sign in using Google</button>
                    <button style={{borderRadius:'20px'}} className="btn btn-outline-primary" type="button">Sign in using Facebook</button>
                </div>

            </div>
        </div>
    );
};

export default Login;