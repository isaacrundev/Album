import { ReactNode } from "react";
import Image from "next/image";
import searchIcon from "../assets/search-icon.png";
import addNewIcon from "../assets/add-new-icon.png";
import notifications from "../assets/notifications.png";

const AlbumsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="flex justify-between p-5">
        <button className="border-[1px] w-[50px] h-[50px] flex justify-center items-center">
          <Image src={searchIcon} alt="search-icon" width={20} height={20} />
        </button>
        <div className="flex gap-5">
          <button className="flex border-[1px] items-center justify-center px-[10px] gap-[10px]">
            <p className="text-[18px]">Submit a photo</p>
            <Image src={addNewIcon} alt="add-new-icon" width={20} height={20} />
          </button>
          <button className="border-[1px] w-[50px] h-[50px] flex justify-center items-center">
            <Image
              src={notifications}
              alt="notifications"
              width={20}
              height={20}
            />
          </button>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default AlbumsLayout;
