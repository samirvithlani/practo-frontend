import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

export const UserLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    var navigate = useNavigate()

    const loginDoctor = async (e) => {

        e.preventDefault()

        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await axios.post("http://localhost:8080/loginuser", formData).then(res => {

            if(res.data.status === true && res.data.roleId ===1){

                sessionStorage.setItem('userId', res.data.userId)
                navigate('/userdashboard/'+res.data.userId)
            }
            
        })

    }
    var style = {
        minHeight: "299px;"
    }
    return (
        <div>
            <div class="content" style={style}>
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-8 offset-md-2">


                            <div class="account-content">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-md-7 col-lg-6 login-left">
                                        <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Login" />
                                    </div>
                                    <div class="col-md-12 col-lg-6 login-right">
                                        <div class="login-header">
                                            <h3>Login <span>Paitent </span></h3>
                                            <Link to="/doctorlogin">Are you a Doctor? click here</Link>
                                        </div>
                                        <form onSubmit={loginDoctor}>
                                            <div class="form-group form-focus">
                                                <input type="email" class="form-control floating"
                                                    onChange={(e) => { setemail(e.target.value) }} />

                                                <label class="focus-label">Email</label>
                                            </div>
                                            <div class="form-group form-focus">
                                                <input type="password" class="form-control floating"
                                                    onChange={(e) => { setpassword(e.target.value) }} />

                                                <label class="focus-label">Password</label>
                                            </div>
                                            {/* <div class="text-right">
                                                <a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                            </div> */}
                                            <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                            <div class="login-or">
                                                <span class="or-line"></span>
                                                <span class="span-or">or</span>
                                            </div>
                                            <div class="row form-row social-login">
                                                <div class="col-6">
                                                    <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                                </div>
                                            </div>
                                            <div class="text-center dont-have">Don’t have an account? <Link to="/doctorregister">Register</Link></div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

