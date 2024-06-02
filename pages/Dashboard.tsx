"use client";
import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerCircular } from "spinners-react";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<string>("home");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoading(false);
    } else {
      toast.error("Login Sayfasına Yönlendiriliyorsunuz...");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, []);

  return (
    <div className="bg-primary  min-h-screen flex flex-col">
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
      {!loading ? (
        <div className="flex flex-1">
          <SideBar setMenu={setMenu} menu={menu} />
          <div className="border border-1 border-white_secondary mx-4"></div>
          <Content menu={menu} />
        </div>
      ) : (
        <div className="flex justify-center py-10">
          <SpinnerCircular color="logo_orange_color" secondaryColor="gray" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
