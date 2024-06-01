import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface DropdownMenuProps {
  ipcount: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ ipcount }) => {
  const [open, setOpen] = useState(false);

  const openActionsHandle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col relative">
      <button
        onClick={openActionsHandle}
        className={`${
          open ? "text-primary_blue" : "text-black"
        } w-20 flex gap-2 justify-center items-center border shadow-md p-1 rounded-md relative`}
      >
        <div className=" font-medium text-[10px]">Actions</div>
        {!open ? <FaAngleDown /> : <FaAngleUp />}
      </button>

      {open && (
        <div className="w-20 flex flex-col rounded-md border pr-1 absolute top-7 z-10 bg-white shadow-lg">
          <button
            onClick={() => console.log(ipcount)}
            className="text-[8px] hover:bg-gray-200 rounded"
          >
            Processing
          </button>
          <button
            onClick={() => console.log(ipcount)}
            className="text-[8px] hover:bg-gray-200 rounded"
          >
            In Progress
          </button>
          <button
            onClick={() => console.log(ipcount)}
            className="text-[8px] hover:bg-gray-200 rounded"
          >
            Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
