import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
    <div className="card bg-base-100 mt-10 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
            <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Already have an account ? please<Link className='text-blue-700 underline' to={'/login'}>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;