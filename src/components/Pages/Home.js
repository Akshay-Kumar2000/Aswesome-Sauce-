import React from "react";
import DataCards from '../Contexts/Cards';
import Corousel from '../Contexts/HomeCorousel';
// import  { Footer }  from "../MainFooter/Footer/Footer";

export const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Corousel />
      <DataCards />
      {/* <Footer /> */}
    </div>
    
  );
};
