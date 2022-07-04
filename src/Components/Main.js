import React from "react";
import Menu from "./Menu";
import MainNavBar from "./MainNavBar";
import Protected from "./Protected";
import AlertPage from './AlertPage';

const Main = () => {

  return (
    <div>
    <Protected>
        <AlertPage />
      </Protected>
    </div>
  );
};

export default Main;
