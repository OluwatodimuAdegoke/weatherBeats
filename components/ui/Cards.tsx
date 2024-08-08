"use client";
import { Track } from "@/lib/track";
import { ChevronsRight, ExternalLink, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "./button";

const TrackCard = ({ track }: { track: Track }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => {
    if (audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const pause = () => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  return (
    <section className="flex flex-row items-center max-w-sm rounded-lg bg-primary-foreground justify-between p-2 max-h-20">
      <div className="flex flex-row items-center w-full">
        <div className="">
          <Image
            className="rounded-lg p-1"
            alt={"Track Picture"}
            src={track.image_url}
            height={100}
            width={100}
          />
        </div>
        <div className="items-start flex flex-col justify-start  w-full">
          <div className="flex flex-row justify-between w-full">
            <span className="flex flex-row gap-2">
              <p className="text-sm font-bold">Track:</p>
              <p className="flex text-sm font-semibold">
                {track.title.substring(0, 30)}
                {track.title.length > 30 && "..."}
              </p>
            </span>

            {isPlaying && (
              <p className="text-end text-xs text-red-600">Playing</p>
            )}
          </div>
          <span className="flex flex-row gap-2">
            <p className="text-sm font-bold">Artist:</p>
            <p className="flex text-sm">{track.artist_name}</p>
          </span>
          <div className="flex items-center gap-2 flex-row justify-between w-full">
            <div>
              {track?.song_uri && (
                <div className="flex flex-row items-center gap-2">
                  <audio ref={audioRef} src={track?.song_uri}></audio>
                  <Button onClick={play} size={"sm"} variant={"outline"}>
                    <Play></Play>
                  </Button>
                  <Button onClick={pause} size={"sm"} variant={"outline"}>
                    <Pause></Pause>
                  </Button>
                </div>
              )}
            </div>
            <Link href={track?.song_url} className="flex ">
              <ExternalLink className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackCard;
