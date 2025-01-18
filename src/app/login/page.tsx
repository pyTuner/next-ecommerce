"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { usePathname } from "next/navigation";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VARIFICATION = "EMAIL_VARIFICATION"
}
const LoginPage = () => {

  const [mode, setMode] = useState(MODE.LOGIN);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const pathName = usePathname()

  const formTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
          ? "Reset Your Password"
          : "Varify Your Email"

  const ButtonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
          ? "Reset"
          : "Varify"

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password
          });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: userName }
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            pathName
          );
          break;
        case MODE.EMAIL_VARIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode
          });
          break;
        default:
          break;
      }

      console.log(response)

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.")
          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      setError("Something went wrong!");


    } finally {
      setIsLoading(false);
    }
  }

  const wixClient = useWixClient();
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8 p-10 px-20 rounded-xl shadow-2xl" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-alertMsg ">{formTitle}</h1>
        <div className="h-[2px] bg-gray-100" />
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={event => setUserName(event.target.value)}

            />
          </div>
        ) : null}
        {
          mode !== MODE.EMAIL_VARIFICATION ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="ring-2 ring-gray-300 rounded-md p-4"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Varification Code</label>
              <input
                type="text"
                name="emailCode"
                placeholder="Code"
                className="ring-2 ring-gray-300 rounded-md p-4"
                onChange={event => setEmailCode(event.target.value)}
              />
            </div>
          )
        }
        {
          mode === MODE.LOGIN || mode === MODE.REGISTER ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="ring-2 ring-gray-300 rounded-md p-4"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
          ) : null
        }
        {
          mode === MODE.LOGIN && (
            <div className="text-sm text-gray-700">
              Forgot Password?
              <span
                className="text-alertMsg hover:text-white cursor-pointer"
                onClick={() => setMode(MODE.RESET_PASSWORD)}
              >
                Reset Password
              </span>
            </div>
          )
        }
        <button
          className="bg-alertMsg text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : ButtonTitle}
        </button>
        {error && <div className="text-red-500">{error}</div>}

        {
          mode === MODE.LOGIN && (
            <div className="text-sm text-gray-700">
              Don't have an account?
              <span
                className="text-alertMsg hover:text-white cursor-pointer"
                onClick={() => setMode(MODE.REGISTER)}
              >
                Sign Up
              </span>
            </div>
          )
        }
        {
          mode === MODE.REGISTER && (
            <div className="text-sm text-gray-700">
              Already have an account?
              <span
                className="text-alertMsg hover:text-white cursor-pointer"
                onClick={() => setMode(MODE.LOGIN)}
              >
                Log In
              </span>
            </div>
          )
        }
        {
          mode === MODE.RESET_PASSWORD && (
            <div
              className="text-sm text-gray-700 underline cursor-pointer"
              onClick={() => setMode(MODE.REGISTER)}
            >
              Go back to Login
            </div>
          )
        }
        {message && <div className="text-green-500 text-sm">{message}</div>}
      </form>
    </div>
  )
}

export default LoginPage;