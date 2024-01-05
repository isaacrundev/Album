"use client";

import Image from "next/image";
import bookmarkIcon from "@/app/assets/bookmark-icon.png";
import { useStateContext } from "@/app/context/context";
import { v4 } from "uuid";
import Link from "next/link";
import { Fragment } from "react";

const Album = ({
  params: { albumId },
}: {
  params: {
    albumId: string;
  };
}) => {
  const { state } = useStateContext();
  const album = state.albums.filter((i) => i.id === albumId);

  return (
    <>
      {album.map((i) => (
        <Fragment key={v4()}>
          <section className="flex flex-col items-center py-5">
            <div className="flex flex-col gap-[10px]">
              <p className="text-4xl">{i.title}</p>
            </div>
          </section>
          <section className="p-5">
            <div className="flex flex-col gap-3">
              <div className="md:grid grid-cols-4 gap-[20px]">
                {i.images.map((img, index) => (
                  <Link key={v4()} href={`/albums/${i.id}/${index}`}>
                    <Image src={img} alt="" width={455} height={293} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Fragment>
      ))}
    </>
  );
};

export default Album;
