import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { toast } from "react-toastify";
import customFetch from "../utils";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const formattedData = {
      identifier: data.email,
      password: data.password,
    };

    try {
      const response = await customFetch.post("/auth/local", formattedData);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

// i have used tailwind and daisyui utility classes for styling

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGuestUserLogin = async () => {
    const guestData = {
      identifier: "itadoriyuji@gmail.com",
      password: "itadoriyuji",
    };

    try {
      const response = await customFetch.post("/auth/local", guestData);
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="flex w-screen mx-auto h-screen items-center justify-center capitalize overflow-hidden ">
      {/* below div is just for shadows  */}
      <div className="shadow-xl max-w-screen w-80 p-4 ">
        {/* heading of the form */}
        <h1 className="text-center font-bold text-3xl mb-6">Login</h1>
        {/* actual form this comes from react router */}
        <Form method="POST" className="flex  flex-col gap-y-6">
          {/* this form contains 2 divs for inputs and labels
          and 2 buttons for login and guest */}

          {/* //email input */}
          <FormInput id="email" type="email" />

          {/*// password input */}
          <FormInput id="password" type="password" />

          {/* // submit btn for login of normal user */}
          <SubmitBtn btnText="Login" />
        </Form>

        {/* //guest user login button  */}
        <button
          className="btn btn-secondary w-full mt-4"
          onClick={handleGuestUserLogin}
        >
          guest user
        </button>
        {/* above is end of the form  */}
        {/* below is flex for ones who are not registered */}
        {/* below div is for centering and grping not member register */}
        <div className="flex mt-3 justify-center gap-x-2 normal-case">
          <p>Not a member yet?</p>
          <button className="text-primary">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>

      {/* //below is the end of main div that contains all content of the pages  */}
    </div>
  );
};

export default Login;
