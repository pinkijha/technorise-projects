import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSignIn } from "../../../hooks/auth/useSignIn";
import SignInUpBtn from "./SignInUpBtn";
import { registerValidationSchema } from "../../../utils/constant";

const RegisterForm = () => {
  const { registerUser, loading } = useSignIn();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      registerUser(
        values.fullname,
        values.username,
        values.email,
        values.password,
        values.confirmPassword
      );
    },
  });

  return (
    //  {/* Right side: Registration Form */}
    <div className="bg-blue">
      <div
        className="flex flex-col md:w-[600px] md:h-[550px] rounded-tl-[100px]  justify-center
         bg-white"
      >
        <div className=" flex flex-col md:ml-[130px] md:w-[330px] ">
          <SignInUpBtn />

          <div className="flex bg-customBlue z-5 -translate-y-3 md:h-[450px] shadow-lg  border rounded-3xl ">
            <form
              onSubmit={formik.handleSubmit}
              className="text-[#447BFF] text-[16px] space-y-2
            md:px-6 md:py-4 font-poppins  "
            >
              <div className="space-y-2 border-b-2 focus-within:border-gray-800">
                <label>Full Name</label>
                <input
                  type="fullname"
                  className="border-none bg-transparent outline-none 
                    text-gray-500 font-poppins   text-sm w-full"
                  placeholder=""
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.fullname && formik.errors.fullname ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.fullname}
                </div>
              ) : null}

              <div className="space-y-2 border-b-2 focus-within:border-gray-800">
                <label>Username</label>
                <input
                  type="username"
                  className="border-none bg-transparent outline-none 
                    text-gray-500 font-poppins   text-sm w-full"
                  placeholder=""
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.username}
                </div>
              ) : null}

              <div className="space-y-2 border-b-2 focus-within:border-gray-800">
                <label>Create Password</label>
                <input
                  type="password"
                  className="border-none bg-transparent outline-none 
                    text-gray-500 font-poppins py-1 text-sm w-full"
                  placeholder=""
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>
              ) : null}

              <div className="space-y-2 border-b-2 focus-within:border-gray-800">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="border-none bg-transparent outline-none 
                    text-gray-500 font-poppins py-1 text-sm w-full"
                  placeholder=""
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}

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
                    <h2>Sign Up</h2>
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

export default RegisterForm;
