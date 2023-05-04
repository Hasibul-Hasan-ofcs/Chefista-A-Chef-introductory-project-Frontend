import React from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import TopChefs from "../components/TopChefs";

const Home = () => {
  const loader = useLoaderData();

  return (
    <>
      <Header></Header>
      <TopChefs loader={loader}></TopChefs>
    </>
  );
};

export default Home;
