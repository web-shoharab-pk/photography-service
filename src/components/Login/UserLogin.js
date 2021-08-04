import React from 'react';
import './login.css';
import { useForm } from "react-hook-form";
import googleimg from './../../images/google.png'; 

const UserLogin = () => {

    // const [image, setImage] = useState(false);


    // useEffect(() => {
    //     if (window.innerWidth < 768) {
    //         setImage(true)
    //     } else {
    //         setImage(false)
    //     }
    // }, [setImage])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="userLogin">
            <div className="row d-flex">
                <div className="col-md-6  ">
                    <div style={{ height: '100vh' }} className=" d-flex align-items-center justify-content-center">
                        <div className="loginCard shadow">
                            <h1 className="text-center">Admin Login!</h1>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input placeholder="Email" className="adminLogInput" type="email" {...register("email", { required: true })} />
                                </div>
                                <div>
                                    <input placeholder="Password" className="adminLogInput" type="password" {...register("password", { required: true })} />
                                </div>
                                {errors.password && <p style={{color: 'red'}}>This field is required</p>}
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
                                <br />
                                <button className="googleLoginBtn"><img src={googleimg} alt="" />  Login with google!</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;