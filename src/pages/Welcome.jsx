import React from "react";
import welcomeDeli from "../assets/svg/welcomeDeli.svg";
import wave from "../assets/svg/wave.svg";
import fastLogo from "../assets/svg/fastLogo.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      className="hero min-h-screen  mx-auto bg-auto bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <div>
        <img
          src={fastLogo}
          alt="logo"
          className="w-[85px] h-[85px]  sm:w-[100px] md:w-[120px] lg:w-[130px] fixed top-2 sm:h-[100px] md:h-[120px] lg:h-[130px] right-2 z-10"
        />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-10">
        <img
          src={welcomeDeli}
          className="max-w-[250px] sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover"
          alt="welcome"
        />
        <div>
          <h1 className="text-center sm:text-left md:text-center lg:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            မင်္ဂလာပါ Fast Delivery Service မှ ကြိုဆိုပါတယ်။
          </h1>
          <p className="py-6 text-base text-center sm:text-left md:text-center lg:text-left leading-6 xl:text-2xl">
            လူကြီးမင်းတို့ ပို့ဆောင်လိုသော ပစ္စည်းများကို
            စျေးနှုန်းသက်သာစွာဖြင့် အမြန်ဆုံးပို့ဆောင်ပေးပါသည်။
          </p>
          <div className="flex flex-col items-center md:items-center lg:items-start">
            <Link
              to="/login"
              className="btn btn-primary btn-sm md:btn-md lg:btn-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
