import React from "react";
import SnackBar from "./SnackBar";
import Status from "./Status";
import Graph from "./Graph";
import TransactionTable from "./TransactionTable";

const Home = () => {
  return (
    <>
      <SnackBar />
      <div className="max-w-4xl mx-auto pt-28">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-3xl pl-[70px]">
            Proxies & Scraping Infrastructure
          </h1>
          <div className="flex gap-10 pl-[70px]">
            <button className="text-xl font-medium">My Proxies</button>
            <button className="text-xl font-medium ">Dashboard</button>
          </div>
        </div>
      </div>
      <hr className="border border-1 w-full border-[#E6E8EB] mt-4" />
      <Status />
      <Graph />
      <TransactionTable />
    </>
  );
};

export default Home;
