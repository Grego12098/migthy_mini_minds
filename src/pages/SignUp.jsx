import Avatar from "../components/Avatar";
import logo from "/logo-close.png";
import { useState, useEffect, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


export default function SignUp() {
  const { session, supabase } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState(""); 
  
  // timeout for error message displayed to user
  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage]);

  const handleSignup = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          data: {
            name: signupData.user,
            username: signupData.username,
            password: signupData.password,
            contact_email: signupData.email,
            contact_name: signupData.contactName,
            contact_relationship: signupData.relationship,
            avatar_url: signupData.avatar || "Bunny",
          },
        },
      });

      if (error) {
        console.error('Signup error:', error);
      } else {
        console.log('Signup successful:', user);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const [signupData, setSignupData] = useState({
    user: "",
    username: "",
    password: "",
    email: "",
    contactName: "",
    relationship: "",
    avatar: "",
  });

  // function to handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target; 
    setSignupData((prevState) => ({ ...prevState, [name]: value })); 
  }

  // function to handle form submission for signup
  // function handleSubmit(event) {
  //   event.preventDefault(); 
  //   const user = {
  //     name: signupData.user,
  //     username: signupData.username,
  //     password: signupData.password,
  //     contact_email: signupData.email,
  //     contact_name: signupData.contactName,
  //     contact_relationship: signupData.relationship,
  //     avatar_url: signupData.avatar || "Bunny",
  //   };
  //   if (
  //     signupData.user !== "" &&
  //     signupData.username !== "" &&
  //     signupData.password !== "" &&
  //     signupData.email !== "" &&
  //     signupData.contactName !== "" &&
  //     signupData.relationship !== "" 
  //   ) {
  //     mutate(user);
  //     setIsRegistered(true); 
  //   } else {
  //     alert("Please fill in all fields 😀"); 
  //   }
  // }
  // if (isRegistered) {
  //   setIsRegistered(false); 
  // }

  return (
    <div className="flex flex-col items-center justify-between h-screen">
       <img
        src={logo}
        alt="logo"
        className="h-24 w-40 my-8"
      />
      <div className="flex flex-col align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-3/4 sm:h-4/6 bg-white rounded-lg shadow-lg overflow-y-scroll scrollbar">
        <h1 className="text-3xl sm:text-4xl my-6 sm:my-10 text-center font-bold">Sign Up</h1>
        {/* {isError? <p className="mt-2 text-center text-base sm:text-lg">{errorMessage}</p> : null} */}
        <form className="flex flex-col mx-8 mt-4" onSubmit={handleSignup}>
          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-lg">What is your name?</label>
            <input
              aria-label="your name"
              className="bg-skin-input shadow-md"
              name="user"
              value={signupData.user}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-lg">Username</label>
              <input
                aria-label="username"
                className="bg-skin-input shadow-md"
                name="username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-lg">Password</label>
              <input
                aria-label="password"
                className="bg-skin-input shadow-md"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-lg">
              Email of someone you trust*
            </label>
            <input
              aria-label="email of someone you trust"
              className="bg-skin-input shadow-md"
              name="email"
              value={signupData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-lg">Contact name</label>
              <input
                aria-label="contact's name"
                className="bg-skin-input shadow-md"
                name="contactName"
                value={signupData.contactName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-lg">Relationship</label>
              <input
                aria-label="relationship to your contact"
                className="bg-skin-input shadow-md"
                name="relationship"
                value={signupData.relationship}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-between my-4 items-center">
            <div className="flex flex-col mb-4 w-1/3 sm:w-2/5">
              <label className="text-sm sm:text-lg">Choose avatar</label>
              <select
                aria-label="choose an avatar"
                className="bg-skin-input text-xs sm:text-base h-6 shadow-md"
                name="avatar"
                value={signupData.avatar}
                onChange={handleInputChange}
              >
                <option value="Bunny">Bunny</option>
                <option value="Chicken">Chicken</option>
                <option value="Goat">Goat</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="flex flex-col my-4 w-3/4 sm:w-2/3">
              <Avatar
                selection={signupData.avatar}
                animation={true}
                h={20}
                w={20}
                smh={32}
                smw={32}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-10">
            <button
              className="rounded-md w-32 h-14 sm:w-40 sm:h-16  sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125"
              type="Submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="underline my-8 text-skin-primary">
        <NavLink to="/">Signed up? Login here!</NavLink>
      </div>
    </div>
  );
}
