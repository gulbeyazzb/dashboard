import React, { useState } from "react";
import SnackBar from "./SnackBar";
import Status from "./Status";
import Graph from "./Graph";
import TransactionTable from "./TransactionTable";

const Home = () => {
  const [selected, setSelected] = useState<string>("dashboard");
  return (
    <>
      <SnackBar />
      <div className="max-w-4xl mx-auto pt-28">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-3xl pl-[70px]">
            Proxies & Scraping Infrastructure
          </h1>
          <div className="flex gap-10 pl-[70px]">
            <button
              onClick={() => setSelected("proxies")}
              className="text-xl font-medium"
            >
              My Proxies
            </button>
            <button
              onClick={() => setSelected("dashboard")}
              className="text-xl font-medium "
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-1 w-full border-[#E6E8EB] mt-4" />
      {selected === "dashboard" ? (
        <>
          <Status />
          <Graph />
          <TransactionTable />
        </>
      ) : (
        <div>My Proxies</div>
      )}
    </>
  );
};

export default Home;
