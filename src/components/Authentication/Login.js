import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    // const { http, setToken } = AuthUser();
    // const [loading, setLoading] = useState(false);





    return (
        <div className="login-img">
            <div className="flex justify-center items-center min-h-screen w-[50%]">
                <div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;