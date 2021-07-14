import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "./Context/context";
import Axios from "axios";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  // const checkAuth = () => {

  // };
  const [isAuth, setisAuth] = useState(true);

  const [loading, setloading] = useState(true);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER}/auth/userAuth`, {
      withCredentials: true,
    })
      .then((response) => {
        console.log("response.data.isAuth", response.data.isAuth);
        if (response.data.isAuth) {
          setloading(false);
          setisAuth(true);
        } else {
          setisAuth(false);
          setloading(false);
        }
      })
      .catch((error) => {
        console.log("err", error);
        setloading(true);
        // setisAuth(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          {isAuth ? (
            <Route
              {...restOfProps}
              render={(props) => <Component {...props} />}
            />
          ) : (
            <Redirect to="/login" />
            // <></>
          )}
        </div>
      )}
    </div>
  );
}

export default ProtectedRoute;
