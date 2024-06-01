import React from "react";
import Home from "./Home";

interface ContentProps {
  menu: string;
}

const Content: React.FC<ContentProps> = ({ menu }) => {
  return (
    <div className="flex-1">
      {menu === "home" && <Home />}
      {menu === "user" && <div>user page</div>}
      {menu === "card" && <div>card page</div>}
    </div>
  );
};

export default Content;
