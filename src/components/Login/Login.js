import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <form className='inputForm' onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register({ required: true })} placeholder='Your Name' required />
            {errors.name && <span className='error'>Name is required</span>}
            
            <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Your Email' required/>
            {errors.email && <span className='error'>Email is required</span>}
            
            <input name="password" ref={register({ required: true, minLength: 6 })} placeholder='Your Password' required/>
            {errors.password && <span className='error'>Password is required</span>}
            
            <input name="confirmPassword" ref={register({ required: true })} placeholder='Confirm Your Password' required/>
            {errors.confirmPassword && <span className='error'>Confirmation of your password is required</span>}

            <input type="submit" Create />
        </form>
    );
};

export default Login;