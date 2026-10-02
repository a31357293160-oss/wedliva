"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onError = () => setAvailable(false);
    audio.addEventListener("error", onError);
    return () => audio.removeEventListener("error", onError);
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        onClick={toggle}
        disabled={!available}
        aria-label={available ? "Toggle wedding music" : "Add a music file to enable music"}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-ivory/90 text-espresso shadow-lg backdrop-blur disabled:opacity-40"
      >
        <span className={playing ? "animate-pulse" : ""}>{playing ? "❚❚" : "♫"}</span>
      </button>
    </>
  );
}
