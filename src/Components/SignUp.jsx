import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LuLogIn } from "react-icons/lu";

const SignUp = () => {
    const userDetails = {
        name: "",
        email: "",
        password: "",
    };
    const [data, setData] = useState(userDetails);

    const navigate = useNavigate();

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (data.name == "" || data.email == "" || data.password == "") {
            toast.error("Please fill all fields!", {
                style: {
                    fontSize: "18px",
                    marginTop: "60px",
                    padding: "10px 20px",
                },
            });
        } else {
            const getData = JSON.parse(localStorage.getItem("user") || "[]");

            let array = [];
            array = [...getData];
            array.push(data);

            localStorage.setItem("user", JSON.stringify(array));
            toast.success("Signup Successfull!", {
                style: {
                    fontSize: "18px",
                    marginTop: "60px",
                    padding: "10px 20px",
                },
            });
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center gap-12 h-screen flex-wrap bg-gradient-to-r from-[#000428]  to-[#004e92]">
                <form
                    onSubmit={handleSubmit}
                    className="text-center w-[90%] max-w-md sm:w-[90%] border-2 border-white px-10 py-10 rounded-lg"
                >
                    <div className="text-3xl text-white font-bold mb-5">
                        <p>Sign Up</p>
                    </div>
                    <div className="account">
                        <input
                            className="w-[95%] p-1.5 border border-white text-lg text-white placeholder:text-white rounded-lg pl-5 mt-5 "
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            onChange={handleInput}
                        />
                        <input
                            className="w-[95%] p-1.5 border border-white text-lg text-white placeholder:text-white rounded-lg pl-5 mt-5"
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            onChange={handleInput}
                        />
                        <input
                            className="w-[95%] p-1.5 border border-white text-lg text-white placeholder:text-white rounded-lg pl-5 mt-5"
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            onChange={handleInput}
                        />
                        <p className="text-white mt-5 text-lg ">
                            Already have an account ?{" "}
                            <Link to="/login">
                                <span className="hover:underline text-lg underline-offset-6 under cursor-pointer font-bold">
                                    Login
                                </span>
                            </Link>
                        </p>
                    </div>

                    <button className="overflow-hidden w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-5 hover:scale-110 duration-500 ease-in-out transition-all">
                        Sign Up
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-7 text-white z-10 flex gap-2 items-center">
                            Now <LuLogIn />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
