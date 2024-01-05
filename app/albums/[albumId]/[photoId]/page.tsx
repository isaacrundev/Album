"use client";

import { useStateContext } from "@/app/context/context";
import Image from "next/image";

const Page = ({
  params: { albumId, photoId },
}: {
  params: { albumId: string; photoId: string };
}) => {
  const { state } = useStateContext();

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <Image
        src={state.albums[+albumId].images[+photoId]}
        alt=""
        width={543}
        height={700}
      />
    </div>
  );
};

export default Page;
