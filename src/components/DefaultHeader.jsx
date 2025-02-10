import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import DesktopSidebar from "./DesktopSidebar";

const DefaultHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header w-full flex items-center justify-between">
      <AnimatedLogo />
      {open ? (
        <IoClose
          className="text-gray-400 hover:cursor-pointer"
          size={"40"}
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <RxHamburgerMenu
          className=" hover:cursor-pointer"
          color="white"
          size={"40"}
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
      {<DesktopSidebar open={open} setOpen={setOpen} />}
    </header>
  );
};
export default DefaultHeader;
