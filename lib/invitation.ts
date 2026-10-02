export type InvitationData = {
  slug: string;
  bride: string;
  groom: string;
  date: string;
  dateLabel: string;
  venue: string;
  city: string;
  mapsUrl: string;
  nikkahTime: string;
  receptionTime: string;
  parents: {
    bride: string;
    groom: string;
  };
  quote: string;
  musicFile: string;
};

export const demoInvitation: InvitationData = {
  slug: "ayesha-danish",
  bride: "Ayesha",
  groom: "Danish",
  date: "2027-01-10T19:00:00+05:30",
  dateLabel: "10 January 2027",
  venue: "Taj Palace",
  city: "Mumbai, India",
  mapsUrl: "https://maps.google.com/?q=Taj+Palace+Mumbai",
  nikkahTime: "7:00 PM",
  receptionTime: "8:30 PM",
  parents: {
    bride: "Mr. & Mrs. Rahman",
    groom: "Mr. & Mrs. Khan"
  },
  quote: "Two souls, one beautiful beginning.",
  musicFile: "/music/wedding.mp3"
};
