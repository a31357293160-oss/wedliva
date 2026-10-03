"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const templates = [
  { id: "royal", name: "Royal Ivory", tone: "ivory", description: "Timeless, elegant and refined" },
  { id: "midnight", name: "Midnight Gold", tone: "midnight", description: "Modern evening luxury" },
  { id: "blush", name: "Floral Blush", tone: "blush", description: "Soft romantic celebration" },
  { id: "heritage", name: "Heritage", tone: "heritage", description: "Indian classic with a premium feel" },
];

export default function CreatePage() {
  const [step, setStep] = useState(1);
  const [template, setTemplate] = useState("royal");
  const [form, setForm] = useState({
    bride: "",
    groom: "",
    date: "",
    city: "",
    venue: "",
    nikkah: "7:00 PM",
    dinner: "8:30 PM",
    rsvp: "",
  });

  const selected = useMemo(() => templates.find((item) => item.id === template) ?? templates[0], [template]);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const validBasics = form.bride.trim() && form.groom.trim() && form.date;

  function submit(event: FormEvent) {
    event.preventDefault();
    if (step < 3) setStep(step + 1);
  }

  return (
    <main className="create-page">
      <style>{`
        .create-page{min-height:100vh;background:#f7f3ec;color:#211e1b;font-family:Arial,Helvetica,sans-serif}
        .create-shell{width:min(1120px,calc(100% - 32px));margin:0 auto}
        .create-header{height:82px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(33,30,27,.1)}
        .create-brand{display:flex;align-items:center;gap:10px;font:600 23px Georgia,serif;letter-spacing:-.04em}
        .create-mark{width:34px;height:34px;border:1px solid rgba(33,30,27,.3);border-radius:50%;display:grid;place-items:center;font-style:italic}
        .back-link{font-size:12px;color:#756e67}
        .create-hero{text-align:center;padding:62px 0 38px}
        .eyebrow{margin:0 0 15px;color:#8a7c6c;text-transform:uppercase;font-size:10px;letter-spacing:.18em}
        .create-hero h1{margin:0;font:400 clamp(44px,7vw,72px)/.95 Georgia,serif;letter-spacing:-.055em}
        .create-hero h1 em{color:#8e7354}
        .create-hero p{max-width:610px;margin:20px auto 0;color:#756e67;font-size:14px;line-height:1.8}
        .progress{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:18px 0 36px}
        .progress-item{padding:12px;border-bottom:2px solid #d9d0c3;color:#9b9188;font-size:10px;text-transform:uppercase;letter-spacing:.12em}
        .progress-item.active{border-color:#211e1b;color:#211e1b}
        .create-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:start;padding-bottom:70px}
        .panel{background:#fffdf9;border:1px solid rgba(33,30,27,.1);padding:28px;box-shadow:0 18px 50px rgba(55,45,34,.06)}
        .panel h2{margin:0 0 7px;font:400 30px Georgia,serif;letter-spacing:-.04em}
        .panel-sub{margin:0 0 24px;color:#817870;font-size:12px;line-height:1.6}
        .template-choices{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:26px}
        .template-choice{border:1px solid rgba(33,30,27,.12);padding:12px;background:#fff;cursor:pointer;text-align:left}
        .template-choice.selected{border:2px solid #211e1b;padding:11px}
        .mini-template{height:150px;display:flex;align-items:center;justify-content:center;text-align:center;border:1px solid rgba(100,75,48,.25);font:italic 29px Georgia,serif}
        .mini-ivory{background:#f4ecdf;color:#5b4936}.mini-midnight{background:#292723;color:#e6d3ad}.mini-blush{background:#f0ded8;color:#76574e}.mini-heritage{background:#e5dac2;color:#5e4a2d}
        .choice-name{display:block;margin-top:10px;font:18px Georgia,serif}.choice-desc{display:block;margin-top:4px;color:#8b8178;font-size:10px}
        .fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}.field-full{grid-column:1/-1}
        label{display:block;margin-bottom:7px;color:#665e57;font-size:10px;text-transform:uppercase;letter-spacing:.1em}
        input{width:100%;height:46px;border:1px solid rgba(33,30,27,.16);background:#fff;padding:0 13px;outline:none;font-size:13px;color:#211e1b}input:focus{border-color:#8e7354}
        .actions{display:flex;justify-content:space-between;gap:10px;margin-top:25px}.button{border:0;border-radius:999px;padding:13px 21px;font-size:11px;letter-spacing:.05em;cursor:pointer}.dark{background:#211e1b;color:#fff}.light{background:#eee6da;color:#211e1b}
        .preview-wrap{position:sticky;top:20px}.preview-label{margin-bottom:12px;color:#8a7c6c;text-transform:uppercase;font-size:9px;letter-spacing:.15em}
        .preview{min-height:560px;padding:18px;background:#e7d8c2;box-shadow:0 22px 60px rgba(55,45,34,.12)}
        .preview-paper{height:100%;min-height:524px;border:1px solid rgba(101,77,48,.35);background:radial-gradient(circle at 50% 40%,#fffdfa,#eee2d1);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:35px 25px;position:relative;overflow:hidden}.preview-paper:before{content:"";position:absolute;width:250px;height:250px;border:1px solid rgba(155,121,77,.22);border-radius:50%;top:-145px;left:-100px}.preview-paper:after{content:"✦";position:absolute;right:24px;bottom:20px;color:#b59469;font-size:18px}
        .preview-mark{width:44px;height:44px;border:1px solid rgba(125,96,61,.45);border-radius:50%;display:grid;place-items:center;color:#927044;font:italic 23px Georgia,serif;margin-bottom:38px}.preview-kicker{color:#88735b;text-transform:uppercase;font-size:7px;letter-spacing:.2em}.preview-names{margin:12px 0 18px;font:400 48px/.88 Georgia,serif;letter-spacing:-.055em}.preview-names span{color:#b59469;font-size:.65em;font-style:italic}.preview-line{width:46px;height:1px;background:#b99a70;margin-bottom:16px}.preview-date{font:11px Georgia,serif;letter-spacing:.13em}.preview-place{margin-top:7px;color:#827466;font-size:7px;letter-spacing:.16em}
        .summary{display:grid;gap:10px;margin-top:18px;padding:15px;background:#f6f0e7;font-size:11px;color:#665e57}.summary strong{color:#211e1b}.success{padding:20px;background:#f0e7d9;border:1px solid #d6c5aa;margin-bottom:18px}.success h3{margin:0 0 7px;font:400 24px Georgia,serif}.success p{margin:0;color:#756e67;font-size:12px;line-height:1.6}
        @media(max-width:800px){.create-grid{grid-template-columns:1fr}.preview-wrap{position:static}.template-choices{grid-template-columns:1fr 1fr}}@media(max-width:520px){.fields{grid-template-columns:1fr}.field-full{grid-column:auto}.create-shell{width:min(100% - 22px,600px)}.panel{padding:20px}.preview{min-height:470px}.preview-paper{min-height:434px}.preview-names{font-size:40px}}
      `}</style>

      <div className="create-shell">
        <header className="create-header">
          <Link href="/" className="create-brand"><span className="create-mark">W</span><span>WedLiva</span></Link>
          <Link href="/" className="back-link">← Back to home</Link>
        </header>

        <section className="create-hero">
          <p className="eyebrow">Create your invitation</p>
          <h1>Make it <em>beautifully yours.</em></h1>
          <p>Choose a design, add your wedding details and preview your invitation. This first version saves your details in the browser and prepares the flow for the full customer dashboard.</p>
        </section>

        <div className="progress">
          <div className={`progress-item ${step >= 1 ? "active" : ""}`}>01 · Design</div>
          <div className={`progress-item ${step >= 2 ? "active" : ""}`}>02 · Details</div>
          <div className={`progress-item ${step >= 3 ? "active" : ""}`}>03 · Preview</div>
        </div>

        <div className="create-grid">
          <form className="panel" onSubmit={submit}>
            {step === 1 && <>
              <h2>Choose your design</h2><p className="panel-sub">Start with the mood that feels right for your celebration.</p>
              <div className="template-choices">
                {templates.map((item) => <button type="button" key={item.id} className={`template-choice ${template === item.id ? "selected" : ""}`} onClick={() => setTemplate(item.id)}>
                  <div className={`mini-template mini-${item.tone}`}>W<br />{item.name.split(" ")[0]}</div><span className="choice-name">{item.name}</span><span className="choice-desc">{item.description}</span>
                </button>)}
              </div>
              <div className="actions"><Link href="/" className="button light">Cancel</Link><button className="button dark" type="submit">Continue to details →</button></div>
            </>}

            {step === 2 && <>
              <h2>Your wedding details</h2><p className="panel-sub">These details will appear in your invitation preview.</p>
              <div className="fields">
                <div><label>Bride / Partner 1</label><input value={form.bride} onChange={(e) => update("bride", e.target.value)} placeholder="Ayesha" required /></div>
                <div><label>Groom / Partner 2</label><input value={form.groom} onChange={(e) => update("groom", e.target.value)} placeholder="Danish" required /></div>
                <div><label>Wedding date</label><input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required /></div>
                <div><label>City</label><input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Mumbai" /></div>
                <div className="field-full"><label>Venue</label><input value={form.venue} onChange={(e) => update("venue", e.target.value)} placeholder="Taj Palace" /></div>
                <div><label>Main ceremony time</label><input value={form.nikkah} onChange={(e) => update("nikkah", e.target.value)} /></div>
                <div><label>Dinner / reception time</label><input value={form.dinner} onChange={(e) => update("dinner", e.target.value)} /></div>
                <div className="field-full"><label>RSVP contact / WhatsApp</label><input value={form.rsvp} onChange={(e) => update("rsvp", e.target.value)} placeholder="+91 ..." /></div>
              </div>
              <div className="actions"><button type="button" className="button light" onClick={() => setStep(1)}>← Back</button><button className="button dark" type="submit" disabled={!validBasics}>Preview invitation →</button></div>
            </>}

            {step === 3 && <>
              <div className="success"><h3>Your invitation is ready to preview.</h3><p>Next phase will connect this flow to a database, payments and a unique public URL for every customer.</p></div>
              <h2>Review your details</h2><p className="panel-sub">Selected design: <strong>{selected.name}</strong></p>
              <div className="summary"><div><strong>Couple:</strong> {form.bride} & {form.groom}</div><div><strong>Date:</strong> {form.date || "Not added"}</div><div><strong>Venue:</strong> {form.venue || "Not added"}{form.city ? `, ${form.city}` : ""}</div><div><strong>Events:</strong> {form.nikkah} · {form.dinner}</div><div><strong>RSVP:</strong> {form.rsvp || "Not added"}</div></div>
              <div className="actions"><button type="button" className="button light" onClick={() => setStep(2)}>← Edit details</button><Link className="button dark" href="/invite/ayesha-danish">Open demo invitation ↗</Link></div>
            </>}
          </form>

          <aside className="preview-wrap">
            <div className="preview-label">Live invitation preview · {selected.name}</div>
            <div className={`preview preview-${selected.tone}`}><div className="preview-paper"><div className="preview-mark">W</div><div className="preview-kicker">Together with their families</div><div className="preview-names">{form.bride || "Ayesha"}<br /><span>&amp;</span> {form.groom || "Danish"}</div><div className="preview-line" /><div className="preview-date">{form.date ? new Date(`${form.date}T12:00:00`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase() : "YOUR WEDDING DATE"}</div><div className="preview-place">{form.venue || "YOUR VENUE"}{form.city ? ` · ${form.city.toUpperCase()}` : ""}</div></div></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
