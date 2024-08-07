"use client";
import { Track } from "@/lib/track";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useRef } from "react";
const TrackCard = ({ track }: { track: Track }) => {
  const audioRef = useRef();
  //   const play = () => {
  //     if(audioRef.current){
  //         audioRef.current.play();
  //     }
  //   }
  //   const pause = () => {
  //     if(audioRef.current){
  //         audioRef.current.pause();
  //     }
  //   }

  return (
    <section className="flex flex-row items-center max-w-sm rounded-lg bg-primary-foreground justify-between">
      <div className="flex flex-row items-center">
        <div className="">
          <Image
            className="rounded-lg p-1"
            alt={"Track Picture"}
            src={track.image_url}
            height={80}
            width={80}
          />
        </div>
        <div className="items-start flex flex-col justify-start align-top p-2">
          <p className="flex text-sm font-bold ">{track.title}</p>
          <p className="flex text-sm">{track.artist_name}</p>
        </div>
      </div>

      <div className="flex self-end">
        <audio src={track?.song_uri}></audio>
        <Link href={track?.song_url}>
          <ChevronsRight className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
};

export default TrackCard;
