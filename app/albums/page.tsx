"use client";

import Image from "next/image";
import searchIcon from "../assets/search-icon.png";
import addNewIcon from "../assets/add-new-icon.png";
import notifications from "../assets/notifications.png";
import vector from "../assets/Vector.png";
import bookmarkIcon from "../assets/bookmark-icon.png";
import albumImg1 from "../assets/album-img/album-img-1.png";
import albumImg2 from "../assets/album-img/album-img-2.png";
import albumImg3 from "../assets/album-img/album-img-3.png";
import albumImg4 from "../assets/album-img/album-img-4.png";
import Popup from "../components/Popup";

// const getData = async () => {
//   const res = await fetch();
// };

const Albums = () => {
  return (
    <main className="relative">
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
          <p className="text-4xl">USERNAME</p>
          <div className="flex justify-start gap-5">
            <Image src={vector} alt="vector-icon" width={20} height={20} />
            <p className="text-[18px]">EMAIL</p>
          </div>
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
          <div className="flex gap-[20px]">
            <button className="basis-1/4" onClick={() => {}}>
              <Image src={albumImg1} alt="" width={455} height={293} />
            </button>
            <button className="basis-1/4" onClick={() => {}}>
              <Image src={albumImg2} alt="" width={455} height={293} />
            </button>
            <button className="basis-1/4" onClick={() => {}}>
              <Image src={albumImg3} alt="" width={455} height={293} />{" "}
            </button>
            <button className="basis-1/4" onClick={() => {}}>
              <Image src={albumImg4} alt="" width={455} height={293} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Albums;
