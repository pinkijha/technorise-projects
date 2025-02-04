import * as Yup from "yup";

// Registration Form Validation
export const registerValidationSchema = Yup.object({
    fullname: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
        .min(3, "Full name must be at least 3 characters"),
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
        "Password must contain at least one letter, one number, and one special character"
      )
      .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
  });

  
// Login Form
 export const loginValidationSchema = Yup.object({
     email: Yup.string()
       .email("Invalid email address")
       .required("Email is required"),
     password: Yup.string()
       .min(6, "Password must be at least 6 characters")
       .required("Password is required"),
     rememberMe: Yup.boolean(),
   });

   // Function to get the text color based on status
  export const getStatusColor = (status) => {
    if (status === "Pending") return "text-red-500"; // Red for pending
    if (status === "Submitted" || status === "Handout") return "text-blue-600"; // Blue for submitted/handout
    return "text-gray-500"; // Default color
  };


  

