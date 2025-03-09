import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/img/logoWhite.png";
import { FiMenu, FiX } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { GoAlert } from "react-icons/go";
import toast from "react-hot-toast";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const logout = () => {
        setShowAlert(true);
    };

    const onAccept = () => {
        localStorage.removeItem("user");
        navigate("/");
        toast.success("Log Out Successfull", {
            style: {
                fontSize: "18px",
                marginTop: "60px",
                padding: "10px 20px",
            },
        });
    };

    useEffect(() => {
        const clickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", clickOutside);
    }, []);

    return (
        <>
            <div className="w-full flex items-center justify-between px-6 sm:px-[7%] py-4 fixed sm:absolute  top-0 left-0 z-50 sm:bg-transparent">
                <img src={logo} alt="logo" className="w-32 sm:w-40 md:w-48 cursor-pointer" />

                <button className="sm:hidden text-3xl cursor-pointer  text-white" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
                <ul
                    ref={menuRef}
                    className={`absolute  bg-black/80 sm:static top-19  left-0 w-full sm:w-auto  text-white font-secondary sm:bg-transparent  sm:text-white flex flex-col sm:flex-row items-center sm:gap-6 transition-all duration-300 ${
                        open ? "h-screen p-4" : "h-0 overflow-hidden sm:h-auto"
                    }`}
                >
                   
                    <li className="my-3 sm:my-0 text-xl uppercase font-bold tracking-wide hover:scale-110 transition-all duration-300 ease-in-out">
                        <Link to="/games" onClick={() => setOpen(false)}>
                            Games
                        </Link>
                    </li>
                    <li className="my-3 sm:my-0 text-xl uppercase font-bold tracking-wide hover:scale-110 transition-all duration-300 ease-in-out">
                        <Link to="/news" onClick={() => setOpen(false)}>
                            News
                        </Link>
                    </li>
                    <li className="my-3 sm:my-0 text-xl uppercase font-bold tracking-wide hover:scale-110 transition-all duration-300 ease-in-out">
                        <Link to="/about" onClick={() => setOpen(false)}>
                            About
                        </Link>
                    </li>
                </ul>
                <div className="">
                    <button
                        className="relative overflow-hidden  w-32 p-2 h-12 bg- text-cyan-950 bg-[#00ffcc] rounded-lg text-xl font-bold cursor-pointer  z-10 group"
                        onClick={logout}
                    >
                        Log out
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-7 z-10 flex gap-2 items-center">
                            Now <CiLogin />
                        </span>
                    </button>
                    {showAlert && (
                        <div className="fixed inset-0 flex items-center justify-center z-100">
                            <div className="opacity-25 w-full h-full absolute inset-0  animate__animated animate__fadeIn"></div>
                            <div className="bg-white rounded-lg max-w-md mx-auto px-8 py-4 z-50 shadow-lg animate__animated animate__zoomIn">
                                <div className="flex items-center">
                                    <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16">
                                        <GoAlert className="text-3xl text-red-900" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold">Warning!</p>
                                        <p className="text-sm text-gray-700 mt-1">Are you sure you want to log out?</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-2">
                                    <button
                                        onClick={() => setShowAlert(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={onAccept}
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Nav;
