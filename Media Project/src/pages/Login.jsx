import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../feature/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../feature/service/authSlice';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const nav = useNavigate();

  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const user = { email, password };
      const { data } = await login(user);
      dispatch(addUser({ user: data?.user, token: data?.token }));
      console.log(data);
      if (data?.success) { nav("/"); }
    }
    catch (error) {
      console.log(error)
    }
    

    // console.log(data);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={loginHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input value={email}
                  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input value={password}
                  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login