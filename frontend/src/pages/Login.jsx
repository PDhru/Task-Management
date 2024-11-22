import React from 'react';



const Login = () => {
    return (
        <div className="container">
            <div className="user-data-form ">
                <div className="form-wrapper m-auto">
                    <ul className="nav nav-tabs w-100" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab" aria-selected="true">Login</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab" aria-selected="false" tabIndex={-1}>Signup</button>
                        </li>   
                    </ul>
                    <div className="tab-content mt-30">
                        <div className="tab-pane show active" role="tabpanel" id="fc1">
                            <div className="text-center mb-20">
                                <h2>Welcome Back!</h2>
                                <p className="fs-20 color-dark">Still don't have an account? <a href="#">Sign up</a></p>
                            </div>
                            <form >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input type="email" name='email' placeholder="Youremail@gmail.com" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input type="password" name='password' placeholder="Enter Password" className="pass_log_id" required />
                                            <span className="placeholder_icon"><span className="passVicon"><img src="images/icon/icon_68.svg" alt /></span></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className="btn-two w-100 text-uppercase d-block mt-20">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" role="tabpanel" id="fc2">
                            <div className="text-center mb-20">
                                <h2>Register</h2>
                                <p className="fs-20 color-dark">Already have an account? <a href="#">Login</a></p>
                            </div>
                            <form >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Name*</label>
                                            <input type="text" name='name'  required placeholder="Zubayer Hasan" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input type="email" name='email'  required placeholder="zubayerhasan@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input type="password" name='password'  required placeholder="Enter Password" className="pass_log_id" />
                                            <span className="placeholder_icon"><span className="passVicon"><img src="images/icon/icon_68.svg" alt /></span></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className="btn-two w-100 text-uppercase d-block mt-20">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* /.tab-pane */}
                    </div>
                    <div className="d-flex align-items-center mt-30 mb-10">
                        <div className="line" />
                        <span className="pe-3 ps-3 fs-6">OR</span>
                        <div className="line" />
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                <img src="images/icon/google.png" alt />
                                <span className="ps-3">Signup with Google</span>
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                <img src="images/icon/facebook.png" alt />
                                <span className="ps-3">Signup with Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;

