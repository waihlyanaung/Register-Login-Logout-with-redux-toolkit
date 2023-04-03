import React, { useState } from "react";
// import { Form } from 'react-router-dom';
import { Form, Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../feature/api/authApi";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfrimation] = useState("");

    const navigate = useNavigate();
    const [register] = useRegisterMutation();
    // console.log(register);

    const registerHandler = async (e) => {
        e.preventDefault();
        const user = { name, email, password, password_confirmation };
        console.log(user);
        const data = await register(user);
        console.log(data);
        if (data.success === true) {
            navigate("/login");
        }
    };



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={registerHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password  Confirmation</span>
                                </label>
                                <input
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfrimation(e.target.value)}
                                    type="password" placeholder="password  confirmation" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

// write register form

// 2 go to api/authApi

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: " https://contact-app.mmsdev.site/api/v1",
//     }),


//     tagTypes: ["authApi"],

//     endpoints: (builder) => ({
//         register: builder.mutation({
//             query: (user) => ({
//                 url: "/register",
//                 method: "POST",
//                 body: user,
//             }),
//             invalidatesTags: ["authApi"],
//         }),
//     })
//     })

// 3 go to service/store
// import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./api/authApi";

// export const store = configureStore({
//     reducer: {
//       [authApi.reducerPath]: authApi.reducer,},
//       middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(authApi.middleware,contactApi.middleware),
//     });