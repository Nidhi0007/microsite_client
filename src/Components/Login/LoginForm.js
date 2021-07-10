import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import swal from "sweetalert2";
axios.defaults.withCredentials = true;
export const LoginForm = (props) => {
  let history = useHistory();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        Axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, values)
          .then((response) => {
            history.push("/dashboard");
          })
          .catch((error) => {
            console.log("err", error);
            swal.fire(
              "Incorrect email or password!",
              "Make sure your password is correct ."
            );
          });
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />

            <button className="btn btn-dark mt-3" type="submit">
              Login
            </button>
            {/*  <button
              className="btn btn-info mt-3 ml-3"
              onClick={() => setChangePassword(true)}
            >
              Change Password
         </button>*/}
          </Form>
        </div>
      )}
    </Formik>
  );
};
