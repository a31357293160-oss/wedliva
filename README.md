# WedLiva — Luxury Digital Wedding Invitation

A mobile-first interactive wedding invitation built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open:

http://localhost:3000/invite/ayesha-danish

## 3. Add music

Put a licensed MP3 at:

```text
public/music/wedding.mp3
```

## 4. Customize the demo

Edit:

```text
lib/invitation.ts
```

The first template currently includes:

- Luxury opening screen
- Animated couple names
- Open Invitation button
- Background music control
- Family names
- Scratch-to-reveal wedding date
- Event timeline
- Countdown
- Venue and Google Maps button
- WhatsApp RSVP/share
- Copy invitation link
- Responsive mobile-first layout

## 5. Deploy to Vercel

Push this folder to GitHub, then import the repository into Vercel.

No environment variables are required for this demo.

## Next production phase

For a real WedLiva SaaS, add:

1. Supabase database
2. Customer authentication
3. Template database
4. Image storage
5. Invitation editor
6. Payment gateway
7. Unique invitation URLs
8. RSVP dashboard
9. Admin dashboard
10. Analytics
11. Custom domains
12. Multiple languages
