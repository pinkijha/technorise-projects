import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSignIn } from "../../../hooks/auth/useSignIn";
import { useFormik } from "formik";
import * as Yup from "yup";
import validator from "validator";
import SignInUpBtn from "./SignInUpBtn";
import { loginValidationSchema } from "../../../utils/constant";

const LoginForm = () => {
  const { superAdminLogin, loading, sAdminResponse, resetSuperAdmin } =
    useSignIn();

  const handleSuperAdminSubmit = async (values) => {
    try {
      const sanitizedEmail = validator.trim(values.email);
      const sanitizedPassword = validator.trim(values.password);

      if (!sanitizedEmail.startsWith("users")) {
        // Call the login API function
        const response = await superAdminLogin(
          sanitizedEmail,
          sanitizedPassword
        );

        // Handle API response and token storage
        if (response?.token) {
          sessionStorage.setItem("token", response.token);

          // If "Remember Me" is checked, store credentials in localStorage
          if (values.rememberMe) {
            localStorage.setItem("email", values.email);
            localStorage.setItem("password", values.password);
            localStorage.setItem("rememberMe", "true");
          } else {
            // Clear stored credentials if "Remember Me" is unchecked
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("rememberMe");
          }

          // Redirect to dashboard
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Error logging in super admin:", error);
    }
  };

  const superAdminFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleSuperAdminSubmit,
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (storedEmail && storedPassword && rememberMe) {
      // Automatically fill the form fields with stored credentials
      superAdminFormik.setValues({
        email: storedEmail,
        password: storedPassword,
        rememberMe: rememberMe,
      });
    }
  }, []);
  return (
    //  {/* Right side: Login Form */}
    <div className="bg-blue">
      <div
        className="flex flex-col md:w-[600px] md:h-[550px] rounded-tl-[100px]  justify-center
     bg-white"
      >
        <div className=" flex flex-col md:ml-[130px] md:w-[330px] ">
          <SignInUpBtn />

          <div className="flex bg-customBlue z-5 -translate-y-3 md:h-[350px] shadow-lg  border rounded-3xl ">
            <form
              onSubmit={superAdminFormik.handleSubmit}
              className="text-[#447BFF] text-[16px] space-y-4
        md:px-6 md:py-4 font-poppins  "
            >
              <div className="space-y-3 border-b-2 focus-within:border-gray-800">
                <label>Username</label>
                <input
                  type="email"
                  className="border-none bg-transparent outline-none 
                text-gray-500 font-poppins   text-sm w-full"
                  placeholder=""
                  name="email"
                  value={superAdminFormik.values.email}
                  onChange={superAdminFormik.handleChange}
                  onBlur={superAdminFormik.handleBlur}
                />
              </div>

              {superAdminFormik.touched.email &&
              superAdminFormik.errors.email ? (
                <div className="text-red-500 text-xs">
                  {superAdminFormik.errors.email}
                </div>
              ) : null}

              <div className="space-y-3 border-b-2 focus-within:border-gray-800">
                <label>Password</label>
                <input
                  type="password"
                  className="border-none bg-transparent outline-none 
                text-gray-500 font-poppins py-1 text-sm w-full"
                  placeholder=""
                  name="password"
                  value={superAdminFormik.values.password}
                  onChange={superAdminFormik.handleChange}
                  onBlur={superAdminFormik.handleBlur}
                />
              </div>
              {superAdminFormik.touched.password &&
              superAdminFormik.errors.password ? (
                <div className="text-red-500 text-xs">
                  {superAdminFormik.errors.password}
                </div>
              ) : null}

              <div className=" flex space-x-2 ">
                <input
                  className=" "
                  type="checkbox"
                  name="rememberMe"
                  onChange={superAdminFormik.handleChange}
                  checked={superAdminFormik.values.rememberMe}
                />
                <label>Remember Me </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center items-center text-[16px] text-center font-poppins md:w-full bg-[#447BFF]
               text-white
               h-[40px] rounded-xl hover:bg-blue hover:shadow-md w-[120px] disabled:bg-[#D3D3D3]"
                  disabled={loading}
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    <h2>Sign In</h2>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
