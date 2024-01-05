"use client";

import Image from "next/image";
import bookmarkIcon from "../assets/bookmark-icon.png";
import shareIcon from "../assets/share-icon.png";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Link from "next/link";
import { useStateContext } from "../context/context";
import Popup from "../@modal/(.)albums/[albumId]/[photoId]/page";

const Albums = () => {
  // const [modal, setModal] = useState(false);
  const { state } = useStateContext();

  return (
    <>
      <section className="flex flex-col items-center py-5">
        <div className="flex flex-col gap-[10px]">
          <p className="text-4xl">USERNAME</p>
          <div className="flex justify-start gap-5">
            <Image src={shareIcon} alt="vector-icon" width={20} height={20} />
            <p className="text-[18px]">EMAIL</p>
          </div>
        </div>
      </section>
      <section className="p-5">
        {state.albums.map((i) => (
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
            <div className="flex gap-[20px] relative">
              {i.images.slice(0, 4).map((img, index) => (
                <Link
                  key={v4()}
                  className="basis-1/4"
                  href={`/albums/${i.id}/${index}`}
                >
                  <Image src={img} alt="" width={455} height={293} />
                </Link>
                // <button
                //   key={v4()}
                //   className="basis-1/4"
                //   onClick={() => setModal(true)}
                // >
                //   <Image src={img} alt="" width={455} height={293} />
                // </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Albums;
