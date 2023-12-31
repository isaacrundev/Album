"use client";

import Image from "next/image";
import vector from "../assets/Vector.png";
import bookmarkIcon from "../assets/bookmark-icon.png";
import Popup from "../components/Popup";
import { useEffect } from "react";
import { v4 } from "uuid";
import Link from "next/link";
import { useStateContext } from "../context/context";

const Albums = () => {
  const { state, setState } = useStateContext();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/isaacrundev/Album/data"
        );
        const result = await res.json();
        setState(result);

        // setContextData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
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
        {state?.albums?.map((i) => (
          <div key={v4()} className="flex flex-col gap-3">
            <div className="flex gap-[10px]">
              <Image
                src={bookmarkIcon}
                alt="bookmark-icon"
                width={20}
                height={20}
              />
              <Link href={`/albums/${i.id}`}>
                <p className="text-[18px]">{i.title}</p>
              </Link>
            </div>
            <div className="flex gap-[20px]">
              {i.images.slice(0, 4).map((img) => (
                <button key={v4()} className="basis-1/4" onClick={() => {}}>
                  <Image src={img} alt="" width={455} height={293} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Albums;
