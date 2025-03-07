import React from "react";
import GradientHeading from "../components/GradientHeading";
import GradientSub from "../components/GradientSub";
import Button from "../components/Button";
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
          <Button title={"Sign up now"} type={"gradient"} />
        </div>
      </div>
    </section>
  );
};

export default Landing;
