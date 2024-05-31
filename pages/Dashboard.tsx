import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-primary h-screen ">
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
