import React from "react";
import FormInput from "../components/FormInput";
import { Form, Link, redirect } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";
import customFetch from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfull");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "please check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center capitalize">
      {/* below div is just for shadows  */}
      <div className="shadow-xl p-8">
        {/* heading of the form */}
        <h1 className="text-center font-bold text-3xl mb-6">Register</h1>
        {/* actual form this comes from react router */}
        <Form method="POST" className="flex  flex-col gap-y-6">
          {/* this form contains 2 divs for inputs and labels
          and 2 buttons for login and guest */}

          {/* username input */}
          <FormInput
            id="username"
            type="text"
            defaultValue="itadoriyuji1fdafasdfsad"
          />

          {/* email input */}
          <FormInput
            id="email"
            type="email"
            defaultValue="itadoriyuji1dfsadfsafd@gmail.com"
          />

          {/* passwrod input */}
          <FormInput id="password" type="password" defaultValue="itadoriyuji" />

          {/* gues and submit btn */}
          <SubmitBtn btnText="Register" />
        </Form>
        {/* above is end of the form  */}
        {/* below is flex for ones who are not registered */}
        {/* below div is for centering and grping not member register */}
        <div className="flex mt-3 justify-center gap-x-2 normal-case">
          <p>Already a user?</p>
          <button className="text-primary">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>

      {/* //below is the end of main div that contains all content of the pages  */}
    </div>
  );
};

export default Register;
