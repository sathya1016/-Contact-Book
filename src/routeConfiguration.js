import React from "react";
import { LoginPage, ProfilePage, SignupPage } from "./containers";

import Home from "./components/Home";

export default function routeConfiguration() {
  return [
    {
      name: "SignupPage",
      path: "/signup",
      component: props => <SignupPage {...props} />,
    },
    {
      name: "LoginPage",
      path: "/login",
      component: props => <LoginPage {...props} />,
    },
    {
      name: "HomePage",
      path: "/home",
      component: props => <Home {...props} />,
      auth: true,
    },
  ];
}
