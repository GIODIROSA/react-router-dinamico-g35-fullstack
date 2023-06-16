import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-2">Loading....!</div>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPublic;
