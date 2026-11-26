export interface EventDetails {
  title: string;
  subTitle: string;
  celebrating: string;
  celebratingTamil: string;
  brandName: string;
  date: string;
  tamilDate: string;
  tamilYearDetails: string;
  time: string;
  timeSlot: string;
  venueName: string;
  venueLocation: string;
  fullVenueAddress: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  targetDateTime: string; // ISO format for countdown (IST: +05:30)
  hosts: {
    parents: string;
    brother?: string;
  };
  hostAddress: {
    line1: string;
    line2: string;
    city: string;
  };
  contact: {
    phone: string;
    formattedPhone: string;
    whatsappNumber: string;
  };
}

export const EVENT_DETAILS: EventDetails = {
  title: "பூப்புனித நீராட்டு விழா மங்கல அழைப்பு மடல்",
  subTitle: "",
  celebrating: "KS PRANAVIKA",
  celebratingTamil: "செல்வி. K.S. பிரணவிகா",
  brandName: "KS PRANAVIKA",
  date: "14 December 2026",
  tamilDate: "14-12-2026 – திங்கட்கிழமை",
  tamilYearDetails: "நிகழும் மங்களகரமான பராபவ வருடம், கார்த்திகை மாதம் 28-ஆம் நாள், 14-12-2026 திங்கட்கிழமை",
  time: "12:00 PM – 01:00 PM",
  timeSlot: "நண்பகல் 12:00 மணி முதல் 01:00 மணிக்குள் நடைபெறும் மங்கல நிகழ்வு",
  venueName: "கொங்கு மஹால்",
  venueLocation: "சென்னிமலை, தமிழ்நாடு",
  fullVenueAddress: "கொங்கு மஹால், சென்னிமலை, ஈரோடு மாவட்டம், தமிழ்நாடு.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kongu+Mahal+Chennimalai+Tamil+Nadu",
  googleMapsEmbedQuery: "Kongu+Mahal+Chennimalai+Tamil+Nadu",
  targetDateTime: "2026-12-14T12:00:00+05:30",
  hosts: {
    parents: "குமார் பழனிசுவாமி – P. சந்தியா",
    brother: "K.S. அகன்",
  },
  hostAddress: {
    line1: "ஆளாங்காட்டுத்தோட்டம்,",
    line2: "கோவில்பாளையம்,",
    city: "சென்னிமலை.",
  },
  contact: {
    phone: "9843310078",
    formattedPhone: "98433 10078",
    whatsappNumber: "919843310078",
  },
};
