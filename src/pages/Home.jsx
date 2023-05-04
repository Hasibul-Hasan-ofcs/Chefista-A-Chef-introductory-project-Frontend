import React from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import TopChefs from "../components/TopChefs";
import Sponsors from "../components/Sponsors";
import ChefSpecialities from "../components/ChefSpecialities";

const Home = () => {
  const loader = useLoaderData();

  return (
    <>
      <Header></Header>
      <TopChefs loader={loader}></TopChefs>
      <ChefSpecialities></ChefSpecialities>
      <Sponsors></Sponsors>
    </>
  );
};

export default Home;
