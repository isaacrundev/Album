"use client";

import Image from "next/image";
import searchIcon from "@/app/assets/search-icon.png";
import addNewIcon from "@/app/assets/add-new-icon.png";
import notifications from "@/app/assets/notifications.png";
import vector from "@/app/assets/Vector.png";
import bookmarkIcon from "@/app/assets/bookmark-icon.png";

const Album = () => {
  return (
    <main>
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
      <section className="flex flex-col items-center py-5">
        <div className="flex flex-col gap-[10px]">
          <p className="text-4xl">ALBUM TITLE</p>
        </div>
      </section>
      <section className="p-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-[10px]">
            <Image
              src={bookmarkIcon}
              alt="bookmark-icon"
              width={20}
              height={20}
            />
            <button onClick={() => {}}>
              <p className="text-[18px]">ALBUM NAME</p>
            </button>
          </div>
          <div className="md:grid grid-cols-4 gap-[20px]">
            <button className="" onClick={() => {}}>
              {/* <Image src={albumImg1} alt="" width={455} height={293} /> */}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Album;
