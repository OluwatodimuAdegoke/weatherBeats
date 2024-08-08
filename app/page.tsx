"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Terminal } from "lucide-react";

import { useState } from "react";
import TrackCard from "@/components/ui/Cards";
import Link from "next/link";
import { LoadingSpinner } from "@/components/ui/Spinner";
interface Track {
  title: string;
  artist_name: string;
  image_url: string;
  song_url: string;
  song_uri: string;
}
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [tracks, setTracks] = useState([]);
  const [hide, setHide] = useState(true);
  const [description, setDescription] = useState("");
  const showErrorMessage = (message: any) => {
    setHide(false);
    setDescription(message);
    setTimeout(() => {
      setHide(true);
    }, 1000);
  };
  const getWeather = async () => {
    if (city !== "") {
      setLoading(true);
      const response = await fetch(`/api/tracks`, {
        method: "POST",
        body: JSON.stringify({ city: city }),
      });
      if (!response.ok) {
        showErrorMessage("City not found");
      } else {
        setTracks(await response.json());
      }
    } else {
      showErrorMessage("City cannot be empty");
    }
    setLoading(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center px-24 gap-2">
      <h1 className="font-bold text-6xl m-8 text-rose-400">Weather Beats</h1>
      <Alert hidden={hide} className="max-w-lg">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Invalid City</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>

      <div className="flex flex-row items-center gap-2 ">
        <Input
          className="w-full"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" onClick={getWeather}>
          Search
        </Button>
      </div>
      {loading && <LoadingSpinner size={100} />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tracks.length > 0 ? (
          tracks.map((track: Track, key) => (
            <TrackCard track={track} key={key} />
          ))
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
