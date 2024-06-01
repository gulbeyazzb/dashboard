import { FaHome } from "react-icons/fa";
import { BsFillCreditCardFill, BsPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useRouter } from "next/router";

interface SideBarProps {
  setMenu: (menu: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ setMenu }) => {
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
      <button onClick={handleClick} className="sideBar-btn" id="home">
        <FaHome color="#7E868C" className="sideBar-icons" />
      </button>
      <button onClick={handleClick} className="sideBar-btn" id="card">
        <BsFillCreditCardFill color="#7E868C" className="sideBar-icons" />
      </button>
      <button onClick={handleClick} className="sideBar-btn" id="user">
        <BsPersonFill color="#7E868C" className="sideBar-icons" />
      </button>
      <button onClick={handleClick} className="sideBar-btn" id="logout">
        <HiOutlineLogout color="#7E868C" className="sideBar-icons" />
      </button>
    </div>
  );
};

export default SideBar;
