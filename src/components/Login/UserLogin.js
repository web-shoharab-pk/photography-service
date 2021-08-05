import React, { useContext, useState } from 'react';
import './login.css';
import { useForm } from "react-hook-form";
import googleimg from './../../images/google.png';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import firebase from "firebase/app";
 
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App'; 

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const UserLogin = () => {

    const {setLoggedUser} = useContext(UserContext)
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    
    const [message1, setMessage1] = useState('') 
    const { register, handleSubmit, formState: { errors } } = useForm();

    let history = useHistory();
    let location = useLocation();   
    let { from } = location.state || { from: { pathname: "/" } }; 

  

    const onSubmit = data => {

        firebase.auth().signInWithEmailAndPassword(data?.email, data?.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setLoggedUser(user);
                if(user){
                    history.replace(from); 
                }
            })
            .catch((error) => {
                var errorMessage = error.message;
                if (!error) {
                    setMessage1('Login sucessful')
                } else {
                    setError1(errorMessage)
                }

            }); 
    };
 

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                var user = result.user;
                setLoggedUser(user);
                if(user){
                    history.replace(from); 
                }
                // ...
            }).catch((error) => {
                var errorMessage = error.message;
                if (!error) {
                    setMessage1('Login sucessful')
                } else {
                    setError2(errorMessage)
                }
            });

    }

    return (
        <div className="userLogin">
            <div style={{ textAlign: 'center' }}>
                <NavLink className="navbar-brand" to="/">photography </NavLink>
            </div>

            <div className="row d-flex">
                <div className="col-md-6  ">
                    <div style={{ height: '100vh' }} className=" d-flex align-items-center justify-content-center">
                        <div className="loginCard shadow">
                            <h1 className="text-center">Admin Login!</h1>
                            <p style={{ color: 'red'}}>{error1 ? error1 : message1}</p>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input placeholder="Email" className="adminLogInput" type="email" {...register("email", { required: true })} />
                                </div>
                                <div>
                                    <input placeholder="Password" className="adminLogInput" type="password" {...register("password", { required: true })} />
                                </div>
                                {errors.password && <p style={{ color: 'red' }}>This field is required</p>}
                                <br />
                                <div className="text-center">
                                    <input className="loginBtn" type="submit" value="LOGIN" />
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-md-6  ">
                    <div className="googleLogin d-flex align-items-center justify-content-center">
                        <div className="loginCard shadow d-flex align-items-center justify-content-center">
                            <div>
                                <h1 className="text-center">User Login!</h1>
                                <p style={{ color: 'red'}}>{error2 ? error2 : message1}</p>
                                <br />
                                <button onClick={googleLogin} className="googleLoginBtn"><img src={googleimg} alt="" />  Login with google!</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;