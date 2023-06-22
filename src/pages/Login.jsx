import logo from "../Img/logo-close.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export default function Login() {
  const [data, setData] = useState(null);
  let tokenData = null; // Declare tokenData variable
  
  const { mutate } = useMutation({
    mutationFn: async (user) => {
      const response = await axios.post(
        "https://mighty-mini-minds-backend.onrender.com/users/login",
        user
      );
      const data = response.data;
      return data;
    },
    onSuccess: (data) => {
      setData(data);
      localStorage.setItem("tokenData", JSON.stringify(data.token));
    },
    onError: (err) => {
      const errorMessage = `Sorry, there was an error: ${err.message}`;
      console.log(errorMessage);
    },
  });
  
  console.log(data);
  tokenData = JSON.parse(localStorage.getItem("tokenData")); // Get tokenData from localStorage
  console.log(tokenData);
  

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleLogin = () =>{
    const user = {
      username: login.username,
      password: login.password,
    }
    if (login.username !== "" && login.password !== "") {
      mutate(user);
    } else {
      alert("Please fill in all fields");
    }
  }
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-28 w-44" />
      <div className="flex flex-col justify-center align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-64 mt-4 bg-white rounded-lg shadow-lg text-center">
        <h1 className="font-bold text-center text-4xl mb-12">
          Mighty Mini Minds
        </h1>
        <p className="text-xl font-semibold">“I’m enough as I am.” - Boy</p>
        <p className="italic mt-2">
          The Boy, The Mole, The Fox, and The Horse, by Charlie Mackesy
        </p>
      </div>
      <div className="flex flex-col">
        <label className="text-xl">Username</label>
        <input
          name="username"
          onChange={handleChange}
          className="bg-skin-input shadow-md p-1 rounded-lg w-64"
        />

        <label className="text-xl mt-5">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="bg-skin-input shadow-md p-1 rounded-lg w-64"
        />
        <div className="flex justify-center mt-5">
          {/* <NavLink to="../appLayout/welcomePage"> */}
            {" "}
            {/* ADD LINK TO WELCOME PAGE */}
            <button onClick={handleLogin} className="rounded-md w-32 h-10 bg-skin-secondary text-white mt-10 transition-colors duration-300 ease-in-out transform hover:scale-125 ">
              Login
            </button>
          {/* </NavLink> */}
        </div>
      </div>
      <div className="underline">
        <NavLink to="../signup">No account? Sign up here!</NavLink>
      </div>
    </div>
  );
}
