import { FaHome } from "react-icons/fa";
import { BsFillCreditCardFill, BsPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useRouter } from "next/router";
import { useState } from "react";

interface SideBarProps {
  setMenu: (menu: string) => void;
  menu: string;
}

const SideBar: React.FC<SideBarProps> = ({ setMenu, menu }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const targetId = (e.currentTarget as HTMLElement).id;
    setMenu(targetId);
    if (targetId === "logout") {
      localStorage.removeItem("token");
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center p-6">
      <button>
        <img
          className="w-[54px] h-[55px]"
          src="images/Rising Logo.svg"
          alt="Rising Logo"
        />
      </button>
      <button
        onClick={handleClick}
        className={`${
          menu === "home" ? "bg-[#78B6FF33]" : "hover:bg-[#78B6FF33]"
        } sideBar-btn`}
        id="home"
      >
        <FaHome
          className={`${
            menu === "home" ? "text-secondary_blue" : "text-gray_secondary"
          } sideBar-icons`}
        />
      </button>
      <button
        onClick={handleClick}
        className={`${
          menu === "card" ? "bg-[#78B6FF33]" : "hover:bg-[#78B6FF33]"
        } sideBar-btn`}
        id="card"
      >
        <BsFillCreditCardFill
          className={`${
            menu === "card" ? "text-secondary_blue" : "text-gray_secondary"
          } sideBar-icons`}
        />
      </button>
      <button
        onClick={handleClick}
        className={`${
          menu === "user" ? "bg-[#78B6FF33]" : "hover:bg-[#78B6FF33]"
        } sideBar-btn`}
        id="user"
      >
        <BsPersonFill
          className={`${
            menu === "user" ? "text-secondary_blue" : "text-gray_secondary"
          } sideBar-icons`}
        />
      </button>
      <button
        onClick={handleClick}
        className={`${
          menu === "logout" ? "bg-[#78B6FF33]" : "hover:bg-[#78B6FF33]"
        } sideBar-btn`}
        id="logout"
      >
        <HiOutlineLogout
          className={`${
            menu === "logout" ? "text-secondary_blue" : "text-gray_secondary"
          } sideBar-icons`}
        />
      </button>
    </div>
  );
};

export default SideBar;
