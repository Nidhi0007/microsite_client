import "./Navbar.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
const Navbar = () => {
  let history = useHistory();
  const logoutFunc = () => {
    swal
      .fire({
        title: "Are you sure?",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#39447a",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.get(`${process.env.REACT_APP_SERVER}/auth/logout`)
            .then((response) => {
              history.push("/login");
            })
            .catch((error) => {
              console.log("err", error);
            });
        }
      });
  };
  return (
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        {/* <a className="active_link" href="#">
          Welcome name
  </a>*/}
      </div>
      <div className="navbar__right">
        <button
          className="btn lg btn-warning "
          type="submit"
          onClick={logoutFunc}
        >
          Logout
        </button>

        <a href="#!">
          <img width="30" src="/dashboardAssets/avatar.svg" alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
