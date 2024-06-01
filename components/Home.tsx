import React, { useState } from "react";
import Status from "./Status";
import TransactionTable from "./TransactionTable";
import SnackBar from "@/components/compounds/SnackBar";
import Graph from "./Graph";

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
              className={`${
                selected === "proxies" &&
                "text-secondary_blue border-b-2 border-secondary_blue"
              } "text-xl font-medium pb-4`}
            >
              My Proxies
            </button>
            <button
              onClick={() => setSelected("dashboard")}
              className={`${
                selected === "dashboard" &&
                "text-secondary_blue border-b-2 border-secondary_blue"
              } "text-xl font-medium pb-4`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-1 w-full border-[#E6E8EB] " />
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
