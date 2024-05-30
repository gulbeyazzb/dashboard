import { FaHome } from "react-icons/fa";
import { BsFillCreditCardFill, BsPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <button className="bg-white">
        <img src="images/Rising Logo.svg"></img>
      </button>
      <button>
        <FaHome color="#7E868C" className="text-2xl" />
      </button>
      <button>
        <BsFillCreditCardFill color="#7E868C" className="text-md" />
      </button>
      <button>
        <BsPersonFill color="#7E868C" className="text-md" />
      </button>
      <button>
        <HiOutlineLogout color="#7E868C" className="text-md" />
      </button>
    </div>
  );
};

export default SideBar;
