"use client";
import { API } from "@/api/api";
import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    if (localStorage.getItem("token")) {
      API.get("get-info").then((res) => console.log(res.data));
    }
  }, []);

  return (
    <div className="bg-primary h-screen">
      {isClient ? (
        <div className="flex">
          <SideBar />
          <hr className="border border-1 h-screen border-[#E6E8EB] mr-4" />
          <Content />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Dashboard;
