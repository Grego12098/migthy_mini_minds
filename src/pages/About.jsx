import mmmStatement from "../Img/mmm-statement.png";
import logo from "../Img/logo-close.png";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <img
        src={logo}
        alt="logo"
        className="h-24 w-40 my-8"
      />
      <div className="flex flex-col justify-between align-center w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 12 h-4/5 sm:h-3/4 bg-white rounded-lg shadow-lg text-center overflow-y-scroll scrollbar">
        <h1
          className="sm:mt-4 m-2 text-lg sm:text-xl sm:mx-10"
          style={{ fontWeight: "bold" }}
        >
          The Mooovers & Milkshakers 🐄 are proud to introduce you to Mighty
          Mini Minds.
        </h1>
        <div className="text-3xl sm:text-4xl flex flex-row justify-around sm:ml-10 sm:mr-10">
          <p>😄</p>
          <p>😆</p>
          <p>🤩</p>
          <p>🙃</p>
          <p>🤪</p>
        </div>

        <h2 className="text-sm sm:text-base sm:mt-5 sm:ml-10 sm:mr-10">
          We invite you to{" "}
          <span className="italic">step into your Mighty Mini Mind</span> and
          explore your emotions and thoughts each day.
        </h2>
        <h3 className="text-sm sm:text-base sm:mt-5">
          Why we decided to create Mighty Mini Minds...
        </h3>
        <div className=" flex justify-center ">
          <img
            src={mmmStatement}
            alt="Mighty Mini Minds Problem Statement"
            className="h-40 w-48 sm:h-56 sm:w-72 my-4"
          />
        </div>
        <p className="sm:ml-20 sm:mr-20 text-sm sm:text-base sm:mt-10 leading-6">
          Our app encourages users to express their feelings effectively through
          journaling, fostering better self-expression, and emotional learning.
          <br />
          <br /> Mighty Mini Minds provides a safe environment allowing privacy
          or the option to share feelings, which will help enable young people
          to navigate their thoughts with confidence.
        </p>
        <h3 className="sm:ml-20 sm:mr-20 text-sm sm:text-base mt-5 mb-5">
          We hope you enjoy your journey! 💜
        </h3>
      </div>
      <div className="flex justify-center my-8">
        <NavLink to="/">
          <div className="underline sm:text-lg text-skin-primary">Back to Login</div>
        </NavLink>
      </div>
    </div>
  );
}
