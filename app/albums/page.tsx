"use client";

import Image from "next/image";
import searchIcon from "../assets/search-icon.png";
import addNewIcon from "../assets/add-new-icon.png";
import notifications from "../assets/notifications.png";
import vector from "../assets/Vector.png";
import bookmarkIcon from "../assets/bookmark-icon.png";
import Popup from "../components/Popup";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

type Data = {
  albums: { title: string; images: string[] }[];
};
const Albums = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/isaacrundev/Album/data"
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
        {data?.albums.map((i) => (
          <div key={v4()} className="flex flex-col gap-3">
            <div className="flex gap-[10px]">
              <Image
                src={bookmarkIcon}
                alt="bookmark-icon"
                width={20}
                height={20}
              />
              <button onClick={() => {}}>
                <p className="text-[18px]">{i.title}</p>
              </button>
            </div>
            <div className="flex gap-[20px]">
              {i.images.slice(0, 3).map(
                (img) => console.log(img)

                // <button key={v4()} className="basis-1/4" onClick={() => {}}>
                //   <Image src={img} alt="" width={455} height={293} />
                // </button>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Albums;
