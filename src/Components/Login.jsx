import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcInfo } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if ("email" == name) {
            setEmail(value);
        }
        if ("password" == name) {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email == "" || password == "") {
            toast.custom((t) => (
                <div
                    className={`${
                        t.visible ? "animate-enter" : "animate-leave"
                    } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <FcInfo />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">Please enter your email and password</p>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        } else {
            let getDetails = JSON.parse(localStorage.getItem("user"));
            getDetails.map((currentValue) => {
                let storeEmail = currentValue.email;
                let storePassword = currentValue.password;

                if (storeEmail == email && storePassword == password) {
                    toast.success("Login Successfull", {
                        style: {
                            fontSize: "18px",
                            marginTop: "60px",
                            padding: "10px 20px",
                        },
                    });
                    navigate("/games");
                } else {
                    toast.error("Invalid Credentials", {
                        style: {
                            fontSize: "18px",
                            marginTop: "60px",
                            padding: "10px 20px",
                        },
                    });
                }
            });
        }
    };

    return (
        <div>
            <div className=" flex flex-col items-center h-screen justify-center bg-gradient-to-r from-[#000428]  to-[#004e92]">
                <p className="text-center text-2xl w-72  text-white">{message}</p>
                <div className="">
                    <form
                        onSubmit={handleSubmit}
                        className=" text-center m-auto border-2 border-white px-10 py-10 rounded-lg w-[90%] max-w-md sm:w-[90%]"
                    >
                        <div className="text-3xl text-white font-bold mb-5">
                            <p>Login</p>
                        </div>
                        <div className="account">
                            <input
                                className="w-[95%] p-1.5 border border-white rounded-lg text-lg text-white mt-5 placeholder:text-white pl-5 "
                                type="text"
                                name="email"
                                placeholder="Enter your Email"
                                onChange={handleInput}
                            />
                            <input
                                className="w-[95%] p-1.5 border border-white rounded-lg text-lg text-white mt-5 placeholder:text-white pl-5"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                onChange={handleInput}
                            />
                            <p className=" text-white mt-5 text-lg ">
                                Create an account ?{" "}
                                <Link to="/">
                                    <span className="hover:underline text-lg underline-offset-6 under cursor-pointer font-bold">
                                        Sign Up
                                    </span>
                                </Link>
                            </p>
                        </div>

                        <button className="overflow-hidden  w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl mt-5 font-bold cursor-pointer relative z-10 group hover:scale-110 duration-500 ease-in-out transition-all">
                            Login
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 text-white absolute top-2.5 left-7 z-10 flex gap-2 items-center">
                                Now <LuLogIn />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
