"use client";
import SideBar from "@/components/SideBar";
import { API } from "../api/api";
import React, { useEffect, useState } from "react";

const DashboardPage: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    if (localStorage.getItem("token")) {
      API.get("get-info").then((res) => console.log(res.data));
    }
  }, []);

  return <div className="flex">{isClient ? <SideBar /> : "Loading..."}</div>;
};

export default DashboardPage;
