import React from "react";
import validate from "./validate";
import {useFormik} from "formik"

function Form() {
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
        validate,
        onSubmit: () => {
          console.log();
        },
      });
    
  return (
    <form onSubmit = {formik.handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Registration </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              placeholder="First Name"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}


            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
            />           
              {formik.touched.lastName && formik.errors.lastName ? (<div>{formik.errors.lastName}</div>) : null}


            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"           
              {...formik.getFieldProps("email")}   
            />
              {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}


            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password (5 characters and above)"
              {...formik.getFieldProps("password")}
            />
              {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>): null}

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account 
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}


export default Form;
