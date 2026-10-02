"use client";

import { useEffect, useRef, useState } from "react";

export default function ScratchReveal({
  hiddenText = "10 JAN 2027"
}: {
  hiddenText?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.fillStyle = "#C8A66A";
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,.16)";
    for (let x = 0; x < rect.width; x += 12) {
      for (let y = 0; y < rect.height; y += 12) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalCompositeOperation = "destination-out";

    const scratch = (event: PointerEvent) => {
      if (!drawing.current) return;
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      ctx.beginPath();
      ctx.arc(x, y, 24, 0, Math.PI * 2);
      ctx.fill();
    };

    const start = (event: PointerEvent) => {
      drawing.current = true;
      canvas.setPointerCapture(event.pointerId);
      scratch(event);
    };

    const end = () => {
      drawing.current = false;
    };

    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointermove", scratch);
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);

    return () => {
      canvas.removeEventListener("pointerdown", start);
      canvas.removeEventListener("pointermove", scratch);
      canvas.removeEventListener("pointerup", end);
      canvas.removeEventListener("pointercancel", end);
    };
  }, []);

  return (
    <div className="relative mx-auto h-28 w-full max-w-sm overflow-hidden rounded-3xl border border-champagne/30 bg-ivory paper-shadow">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-espresso/50">Our wedding date</p>
        <p className="mt-2 font-display text-3xl font-semibold tracking-wide text-espresso">{hiddenText}</p>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 touch-none cursor-crosshair"
        onPointerEnter={() => setRevealed(true)}
        aria-label="Scratch to reveal the wedding date"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {!revealed && (
          <span className="rounded-full bg-espresso/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory">
            Scratch to reveal
          </span>
        )}
      </div>
    </div>
  );
}
