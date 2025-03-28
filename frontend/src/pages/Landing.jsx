import React from "react";
import GradientHeading from "../components/GradientHeading";
import GradientSub from "../components/GradientSub";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-2xl w-full">
        <GradientHeading label="Welcome to MobilePe" />
        <GradientSub label="Your Ultimate Digital Payment Solution!" />
        <GradientSub label="Fast, Secure & Hassle-Free Transactions" />
        <div className="w-full flex justify-center mt-6">
          <Link to="/signup">
            <Button title="Sign up now" type="gradient" className="w-full sm:w-auto px-6 py-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;