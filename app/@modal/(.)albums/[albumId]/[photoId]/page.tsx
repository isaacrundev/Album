"use client";

import Image from "next/image";
import closeIcon from "@/app/assets/close-icon.png";
import downloadIcon from "@/app/assets/download-icon.png";
import shareIcon from "@/app/assets/share-icon.png";
import infoIcon from "@/app/assets/info-icon.png";
import likeIcon from "@/app/assets/like-icon.png";
import bookmarkIcon from "@/app/assets/bookmark-icon.png";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/app/context/context";
import { useEffect, useRef } from "react";

const Popup = ({
  params: { albumId, photoId },
}: {
  params: { albumId: string; photoId: string };
}) => {
  const { state } = useStateContext();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const albumOrder = state.albums.findIndex((album) => album.id === albumId);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className=" bg-primary w-full "
    >
      <div className="relative flex flex-col w-full h-full">
        <button className="absolute right-0 top-0" onClick={handleClose}>
          <Image src={closeIcon} alt="close-icon" width={32} height={32} />
        </button>
        <div className="flex justify-center p-8">
          <div className="flex gap-5">
            <p className="text-white">Download</p>
            <Image
              src={downloadIcon}
              alt="download-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="flex gap-5">
            <p className="text-white">Share</p>
            <Image src={shareIcon} alt="share-icon" width={20} height={20} />
          </div>
          <div className="flex gap-5">
            <p className="text-white">Info</p>
            <Image src={infoIcon} alt="info-icon" width={20} height={20} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={state.albums[albumOrder].images[+photoId]}
            alt=""
            width={543}
            height={700}
          />
        </div>
        <div className="flex justify-between pt-5">
          <div className="flex flex-col">
            <p className="text-[#FFFFFF99]">Title</p>
            <p className="text-white">{state.albums[albumOrder].title}</p>
          </div>
          <div className="flex gap-5">
            <button className="flex border-[1px] items-center justify-center px-[10px] gap-[10px] text-white">
              <p className="text-[18px]">Like</p>
              <Image src={likeIcon} alt="like-icon" width={20} height={20} />
            </button>
            <button className="text-white flex border-[1px] items-center justify-center px-[10px] gap-[10px]">
              <p className="text-[18px]">Save</p>
              <Image
                src={bookmarkIcon}
                alt="bookmark-icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;
