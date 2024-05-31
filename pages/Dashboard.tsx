"use client";
import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsClient(true);
    } else {
      toast.error("Login Sayfasına Yönlendiriliyorsunuz...");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, []);

  return (
    <div className="bg-primary min-h-screen ">
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      {isClient && (
        <div className="flex">
          <SideBar />
          <div className="border border-1 border-[#E6E8EB] mr-4"></div>
          <Content />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
