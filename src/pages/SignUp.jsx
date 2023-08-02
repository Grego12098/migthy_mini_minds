import Avatar from '../components/Avatar';
import logo from '/logo-close.png';
import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import FormInput from '../components/FormInput';
import '../App.css';

export default function SignUp() {
  const { supabase } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');

  // timeout for error message displayed to user
  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage('');
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

  //   if (
  //     signupData.user !== "" &&
  //     signupData.username !== "" &&
  //     signupData.password !== "" &&
  //     signupData.email !== "" &&
  //     signupData.contactName !== "" &&
  //     signupData.relationship !== "" 
  //   ) {
  
  const inputs = [
    { name: 'user', label: 'What is your name?' },
    { name: 'username', label: 'Username' },
    { name: 'password', label: 'Password' },
    { name: 'email', label: 'Email of someone you trust' },
    { name: 'contactName', label: 'Their name' },
    { name: 'relationship', label: 'Their relationship to you' },
  ];

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <img
        src={logo}
        alt="logo"
        className="h-24 w-40 my-8"
      />
      <div className="flex flex-col align-center w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 h-3/4 sm:h-4/6 bg-white rounded-lg shadow-lg overflow-y-scroll scrollbar">
        <h1 className="text-3xl sm:text-4xl my-6 sm:my-10 text-center font-bold">
          Sign Up
        </h1>

        <form 
          className="flex flex-col mx-8 mt-4"
          onSubmit={handleSignup}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inputs.map((item, index) => (
              <div className={`${index === 0 || index === 3 ? 'sm:col-span-2' : 'sm:col-span-1'} flex flex-col`} key={index}>
                <FormInput
                  label={item.label}
                  name={item.name}
                  value={signupData[`signupData.${item.name}`]}
                  handleInputChange={handleInputChange}
                />
              </div>
            ))}
          </div>


          <div className="flex justify-between my-4 items-center">
            <div className="flex flex-col mb-4 w-1/3 sm:w-2/5">
              <label className="text-sm sm:text-lg">Choose avatar</label>
              <select
                aria-label="choose an avatar"
                className="bg-skin-input text-sm sm:text-base h-6 shadow-md"
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
            <div className="flex flex-col my-4 sm:pt-4 w-3/4 sm:w-2/3">
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
