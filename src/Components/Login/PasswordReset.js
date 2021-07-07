import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
export const PasswordReset = () => {
  let history = useHistory();
  const validate = Yup.object({
    oldPassword: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Old Password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        Axios.put(`${process.env.REACT_APP_SERVER}/auth/changePassword`, values)
          .then((response) => {
            swal.fire(
              "Password changed!",
              "Your password is successfully changed.",
              "success"
            );
            history.push("/dashboard");
          })
          .catch((error) => {
            swal.fire(
              "Incorrect password!",
              "Make sure your old password is correct ."
            );
          });
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Change Password</h1>
          <Form>
            <TextField
              label="Old Password"
              name="oldPassword"
              type="password"
            />
            <TextField
              label="New Password"
              name="newPassword"
              type="password"
            />
            <TextField
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Change Password
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
