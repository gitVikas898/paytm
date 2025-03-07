import React from "react";
import GradientHeading from "../components/GradientHeading";
import GradientSub from "../components/GradientSub";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="grid place-items-center  min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <GradientHeading
          label={
            "Welcome to MobilePe"
          }
        />
        <GradientHeading
          label={
            "Your Ultimate Digital Payment Solution!"
          }
        />
        <GradientSub label={"Fast, Secure & Hassle-Free Transactions"} />
        <div className="w-[20rem]">
          <Link to={"/signup"}><Button title={"Sign up now"} type={"gradient"} /></Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
