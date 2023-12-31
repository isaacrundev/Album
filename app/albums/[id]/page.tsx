"use client";

import Image from "next/image";
import vector from "@/app/assets/Vector.png";
import bookmarkIcon from "@/app/assets/bookmark-icon.png";
import { useStateContext } from "@/app/context/context";

const Album = ({ params }: { params: { id: string } }) => {
  const { state, setState } = useStateContext();

  return (
    <>
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
            {/* <button className="" onClick={() => {}}>
              <Image src={albumImg1} alt="" width={455} height={293} />
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;
