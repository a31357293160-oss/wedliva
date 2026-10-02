"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { demoInvitation } from "@/lib/invitation";
import { Reveal } from "./Reveal";
import Countdown from "./Countdown";
import MusicButton from "./MusicButton";
import ScratchReveal from "./ScratchReveal";

export default function InvitationPage({ slug }: { slug: string }) {
  const data = useMemo(() => {
    // Replace this with a database lookup when you add Supabase.
    return { ...demoInvitation, slug };
  }, [slug]);

  const whatsappText = encodeURIComponent(
    `You're invited to the wedding of ${data.bride} & ${data.groom} ❤️\n\n${typeof window !== "undefined" ? window.location.href : `https://wedliva.com/invite/${data.slug}`}`
  );

  return (
    <main className="mx-auto min-h-screen max-w-[680px] overflow-hidden bg-ivory shadow-2xl">
      <MusicButton src={data.musicFile} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden luxury-bg px-6 py-20">
        <div className="ornament absolute inset-0 opacity-50" />
        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-champagneLight/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-blush/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-md text-center"
        >
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-champagne/50 bg-white/35 shadow-xl backdrop-blur-sm float">
            <div className="font-display text-3xl text-espresso">A&nbsp; ♥ &nbsp;D</div>
          </div>

          <p className="text-[10px] uppercase tracking-[0.42em] text-espresso/55">Together with their families</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.82] text-espresso sm:text-7xl">
            Ayesha
            <span className="my-3 block text-3xl italic text-champagne">&amp;</span>
            Danish
          </h1>

          <div className="mx-auto my-8 h-px w-28 bg-gradient-to-r from-transparent via-champagne to-transparent" />

          <p className="font-display text-xl italic text-espresso/75">{data.quote}</p>

          <motion.a
            href="#invitation"
            whileTap={{ scale: 0.97 }}
            className="shimmer mx-auto mt-10 inline-flex rounded-full border border-espresso/20 bg-espresso px-7 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory shadow-xl"
          >
            Open Invitation
          </motion.a>

          <p className="mt-5 text-[9px] uppercase tracking-[0.24em] text-espresso/40">Scroll to explore</p>
        </motion.div>
      </section>

      {/* INVITATION */}
      <section id="invitation" className="luxury-bg px-6 py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">In the name of love</p>
            <h2 className="mt-4 font-display text-5xl text-espresso">You are invited</h2>
            <div className="mx-auto mt-5 gold-line w-24" />
            <p className="mx-auto mt-7 max-w-sm font-display text-xl leading-relaxed text-espresso/70">
              With joyful hearts, our families invite you to celebrate the beginning of our forever.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-[2rem] border border-champagne/25 bg-white/45 p-8 text-center paper-shadow">
            <p className="text-[10px] uppercase tracking-[0.3em] text-espresso/50">With blessings from</p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-2xl text-espresso">{data.parents.bride}</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-champagne">Bride&apos;s family</p>
              </div>
              <div>
                <p className="font-display text-2xl text-espresso">{data.parents.groom}</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-champagne">Groom&apos;s family</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DATE REVEAL */}
      <section className="bg-espresso px-6 py-20 text-ivory">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-champagneLight">A date to remember</p>
            <h2 className="mt-4 font-display text-5xl">The Date</h2>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-ivory/65">
              A little surprise before the celebration begins.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ScratchReveal hiddenText={data.dateLabel.toUpperCase()} />
        </Reveal>
      </section>

      {/* EVENTS */}
      <section className="luxury-bg px-6 py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">Save the evening</p>
            <h2 className="mt-4 font-display text-5xl text-espresso">The Celebration</h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-md">
          <div className="absolute left-4 top-5 h-[calc(100%-40px)] w-px bg-champagne/30" />
          <Reveal className="relative mb-8 pl-12">
            <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/50 bg-ivory text-sm">✦</div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-champagne">7:00 PM</p>
            <h3 className="mt-2 font-display text-3xl text-espresso">Nikkah Ceremony</h3>
            <p className="mt-2 text-sm leading-6 text-espresso/60">A sacred beginning surrounded by family and loved ones.</p>
          </Reveal>

          <Reveal delay={0.08} className="relative pl-12">
            <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/50 bg-ivory text-sm">✦</div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-champagne">8:30 PM</p>
            <h3 className="mt-2 font-display text-3xl text-espresso">Dinner &amp; Celebration</h3>
            <p className="mt-2 text-sm leading-6 text-espresso/60">Join us for dinner, laughter, photographs and celebration.</p>
          </Reveal>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="bg-[#EFE5D6] px-6 py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">Counting every moment</p>
            <h2 className="mt-4 font-display text-5xl text-espresso">Until we say I do</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-md">
          <Countdown date={data.date} />
        </Reveal>
      </section>

      {/* VENUE */}
      <section className="luxury-bg px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-md rounded-[2rem] border border-champagne/25 bg-white/55 p-8 text-center paper-shadow">
            <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">The venue</p>
            <h2 className="mt-4 font-display text-4xl text-espresso">{data.venue}</h2>
            <p className="mt-3 text-sm text-espresso/60">{data.city}</p>
            <a
              href={data.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full border border-espresso/20 bg-espresso px-6 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory"
            >
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </section>

      {/* RSVP */}
      <section className="bg-espresso px-6 py-20 text-center text-ivory">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.35em] text-champagneLight">We would love to have you</p>
          <h2 className="mt-4 font-display text-5xl">Will you join us?</h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-ivory/65">
            Please let us know so we can make the celebration even more special.
          </p>

          <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3">
            <a
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-champagne px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso"
            >
              RSVP on WhatsApp
            </a>
            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="rounded-full border border-ivory/20 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory"
            >
              Copy Invitation Link
            </button>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#18130f] px-6 py-10 text-center text-ivory">
        <p className="font-display text-3xl">Ayesha &amp; Danish</p>
        <div className="mx-auto my-4 h-px w-16 bg-champagne/60" />
        <p className="text-[9px] uppercase tracking-[0.3em] text-ivory/35">Created with WedLiva</p>
      </footer>
    </main>
  );
}
