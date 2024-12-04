// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [signupData, setSignupData] = useState({ name: "", email: "", password: "", role: "user" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); 


//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/users/login", loginData);
//       setMessage("Login successful!");
//       navigate('/')
//       localStorage.setItem("token", response.data.token); // Save JWT token
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Login failed!");
//     }
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8000/api/users/register", signupData);
//       setMessage("Signup successful! You can now log in.");
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed!");
//     }
//   };

//   const handleInputChange = (e, isSignup = false) => {
//     const { name, value } = e.target;
//     if (isSignup) {
//       setSignupData((prev) => ({ ...prev, [name]: value }));
//     } else {
//       setLoginData((prev) => ({ ...prev, [name]: value }));
//     }
//   };
//     return (
//         <div className="container">
//             <div className="user-data-form ">
//                 <div className="form-wrapper m-auto">
//                     <ul className="nav nav-tabs w-100" role="tablist">
//                         <li className="nav-item" role="presentation">
//                             <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab" aria-selected="true">Login</button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab" aria-selected="false" tabIndex={-1}>Signup</button>
//                         </li>   
//                     </ul>
//                     <div className="tab-content mt-30">
//                         <div className="tab-pane show active" role="tabpanel" id="fc1">
//                             <div className="text-center mb-20">
//                                 <h2>Welcome Back!</h2>
//                                 <p className="fs-20 color-dark">Forget Password ? <Link to={'/forget-password'}>Click Here</Link></p>
//                             </div>
//                             {message && <p className="text-center">{message}</p>}
//                             <form onSubmit={handleLoginSubmit}>
//                                 <div className="row">
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative mb-25">
//                                             <label>Email*</label>
//                                             <input type="email" value={loginData.email} onChange={(e) => handleInputChange(e)} name='email' placeholder="Youremail@gmail.com" required />
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative mb-20">
//                                             <label>Password*</label>
//                                             <input type="password" name='password'  value={loginData.password} onChange={(e) => handleInputChange(e)} placeholder="Enter Password" className="pass_log_id"  required />
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <button type='submit' className="btn-two w-100 text-uppercase d-block mt-20">Login</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         {/* /.tab-pane */}
//                         <div className="tab-pane" role="tabpanel" id="fc2">
//                             <div className="text-center mb-20">
//                                 <h2>Register</h2>
//                                 <p className="fs-20 color-dark">Forget Password ? <Link to={'/forget-password'}>Click Here</Link></p>
//                             </div>
//                             {message && <p className="text-center">{message}</p>}
//                             <form onSubmit={handleSignupSubmit}>
//                                 <div className="row">
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative mb-25">
//                                             <label>Name*</label>
//                                             <input type="text" value={signupData.name} onChange={(e) => handleInputChange(e, true)} name='name' 
//                                              required placeholder="Zubayer Hasan" />
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative mb-25">
//                                             <label>Email*</label>
//                                             <input type="email" name='email'  value={signupData.email} onChange={(e) => handleInputChange(e, true)}
//                                               required placeholder="zubayerhasan@gmail.com" />
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative d-flex mb-25">
//                                             <label className='me-5'>Select Role</label>
//                                             <select name="role" value={signupData.role} onChange={(e) => handleInputChange(e, true)}>
//                                                 <option value="user">User</option>
//                                                 <option value="admin">Admin</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <div className="input-group-meta position-relative mb-20">
//                                             <label>Password*</label>
//                                             <input type="password" name='password'  value={signupData.password} onChange={(e) => handleInputChange(e, true)}  required placeholder="Enter Password" className="pass_log_id" />
//                                         </div>
//                                     </div>
//                                     <div className="col-12">
//                                         <button type='submit' className="btn-two w-100 text-uppercase d-block mt-20">Sign Up</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         {/* /.tab-pane */}
//                     </div>
//                     <div className="d-flex align-items-center mt-30 mb-10">
//                         <div className="line" />
//                         <span className="pe-3 ps-3 fs-6">OR</span>
//                         <div className="line" />
//                     </div>
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
//                                 <img src="images/icon/google.png" alt />
//                                 <span className="ps-3">Signup with Google</span>
//                             </a>
//                         </div>
//                         <div className="col-sm-6">
//                             <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
//                                 <img src="images/icon/facebook.png" alt />
//                                 <span className="ps-3">Signup with Facebook</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({ name: "", email: "", password: "", role: "user" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Handle login form submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/users/login", loginData);
            setMessage("Login successful!");
            localStorage.setItem("token", response.data.token); // Save JWT token
            navigate('/view-task'); // Redirect after login
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed!");
        }
    };

    // Handle signup form submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/users/register", signupData);
            setMessage("Signup successful! You can now log in.");
        } catch (error) {
            setMessage(error.response?.data?.message || "Signup failed!");
        }
    };

    // Handle input field changes
    const handleInputChange = (e, isSignup = false) => {
        const { name, value } = e.target;
        if (isSignup) {
            setSignupData((prev) => ({ ...prev, [name]: value }));
        } else {
            setLoginData((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="container">
            <div className="user-data-form">
                <div className="form-wrapper m-auto">
                    <ul className="nav nav-tabs w-100" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab" aria-selected="true">
                                Login
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab" aria-selected="false" tabIndex={-1}>
                                Signup
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content mt-30">
                        {/* Login Form */}
                        <div className="tab-pane show active" role="tabpanel" id="fc1">
                            <div className="text-center mb-20">
                                <h2>Welcome Back!</h2>
                                <p className="fs-20 color-dark">
                                    Forget Password? <Link to={"/forget-password"}>Click Here</Link>
                                </p>
                            </div>
                            {message && <p className="text-center">{message}</p>}
                            <form onSubmit={handleLoginSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={loginData.email}
                                                onChange={(e) => handleInputChange(e)}
                                                placeholder="Youremail@gmail.com"
                                                autoComplete="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={loginData.password}
                                                onChange={(e) => handleInputChange(e)}
                                                placeholder="Enter Password"
                                                className="pass_log_id"
                                                autoComplete="current-password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Signup Form */}
                        <div className="tab-pane" role="tabpanel" id="fc2">
                            <div className="text-center mb-20">
                                <h2>Register</h2>
                            </div>
                            {message && <p className="text-center">{message}</p>}
                            <form onSubmit={handleSignupSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Name*</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={signupData.name}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Your Full Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={signupData.email}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Your Email"
                                                autoComplete="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative d-flex mb-25">
                                            <label className="me-5">Select Role</label>
                                            <select
                                                name="role"
                                                value={signupData.role}
                                                onChange={(e) => handleInputChange(e, true)}
                                                required
                                            >
                                                <option value="User">User</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={signupData.password}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Enter Password"
                                                className="pass_log_id"
                                                autoComplete="new-password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
