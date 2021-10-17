import React, { useState, useEffect } from "react";
import Login from "./Login";
// import Test from '../test';
import Search from "./Search";
import Header from "../static/Header";
import { BACKEND_URL } from "../constants";
import { Link, Redirect } from "react-router-dom";


const Landing = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch(`https://capstone-movie.herokuapp.com/users/login`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        setAuthState(json.hasOwnProperty("id"));
      });
  };

  return (
    <div>
      {authState ? <Header /> : <div></div>}
      {authState ? <Redirect to="/search" /> : <Login />}
    </div>
  );
};

export default Landing;
