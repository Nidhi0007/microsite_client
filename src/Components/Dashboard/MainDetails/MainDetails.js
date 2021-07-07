import React, { useEffect, useState } from "react";
import "./MainDetails.css";
import { Link, Route, Switch, useLocation } from "react-router-dom";
// import Chart from "../charts/Chart";

const MainDetails = ({ user }) => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src="/dashboardAssets/hello.svg" alt="hello" />
          <div className="main__greeting">
            <h1>Hello {user.firstName}</h1>
            <p>Welcome to your dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}

        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Your Orders</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <div className="main__cards">
              {user?.userOrders?.map((order, index) => {
                return (
                  <div className="row">
                    <div className="col">
                      <div className="card card-2">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body my-auto text-right">
                              <div className="row my-auto flex-column flex-md-row">
                                <div className="col-auto my-auto">
                                  <h6 className="mb-0">{order.productName}</h6>
                                </div>
                                <div className="col my-auto">
                                  {" "}
                                  <small>orderId: {order.orderId} </small>
                                </div>

                                <div className="col my-auto">
                                  {" "}
                                  <small>Qty : 1</small>
                                </div>
                                <div className="col my-auto">
                                  <h6 className="mb-0">{order.price}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Profile Information</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <div className="main__cards">
              <div className="card">
                <i
                  className="fa fa-user-o fa-2x text-lightblue"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">
                    Name: {user.firstName} {user.lastName}
                  </p>
                  {/*     <span className="font-bold text-title">578</span>*/}
                </div>
              </div>

              <div className="card">
                <i
                  className="fa fa-calendar fa-2x text-red"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">Email: {user.email}</p>
                  {/*    <span className="font-bold text-title">2467</span>*/}
                </div>
              </div>

              <div className="card">
                <i
                  className="fa fa-video-camera fa-2x text-yellow"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">
                    Phone Number: {user.phoneNumber}
                  </p>
                  {/*    <span className="font-bold text-title">340</span>*/}
                </div>
              </div>

              <div className="card">
                <i
                  className="fa fa-thumbs-up fa-2x text-green"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <Link to="/changePassword">
                    <button className="btn lg btn-warning mt-3" type="submit">
                      Change Password
                    </button>
                  </Link>
                  {/*   <span className="font-bold text-title">645</span>*/}
                </div>
              </div>
            </div>
            {/*<div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>
              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
  </div>*/}
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default MainDetails;
