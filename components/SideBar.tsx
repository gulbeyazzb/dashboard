import { FaHome } from "react-icons/fa";
import { BsFillCreditCardFill, BsPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { cn } from "@/utils/tailwind-util";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-6">
      <button>
        <img className="w-[54px] h-[55px]" src="images/Rising Logo.svg"></img>
      </button>
      <button className="sideBar-btn">
        <FaHome color="#7E868C" className="sideBar-icons" />
      </button>
      <button className="sideBar-btn">
        <BsFillCreditCardFill color="#7E868C" className="sideBar-icons" />
      </button>
      <button className="sideBar-btn">
        <BsPersonFill color="#7E868C" className="sideBar-icons" />
      </button>
      <button className="sideBar-btn">
        <HiOutlineLogout color="#7E868C" className="sideBar-icons" />
      </button>
    </div>
  );
};

export default SideBar;
