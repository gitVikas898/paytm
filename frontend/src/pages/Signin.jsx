import React, { useState } from "react";
import Input from "../components/Input";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/userSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username: email,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      dispatch(loginSuccess(response.data));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="p-8 grid gap-4 shadow-lg rounded-md w-[400px] bg-white">
        <div className="flex flex-col gap-2 items-center justify-between">
          <Heading label={"Sign in"} />
          <Subheading text={"Enter your details below"} />
        </div>
        <div className="grid gap-2">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={"Enter your email"}
            label={"Email"}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"Enter your password"}
            label={"Password"}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Button
            onClick={() => {
              handleLogin();
            }}
            title={"Sign in"}
            type={"gradient"}
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Subheading text={"Not a user ? "} />
          <span className="font-xl font-bold underline cursor-pointer">
            <Link to={"/signup"}>Sign up now</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
