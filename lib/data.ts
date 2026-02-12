export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: '14 Fevrier 2022',
    title: 'Notre Premiere Rencontre',
    description:
      'Ce jour-la, tout a change. Un simple regard a suffi pour commencer une histoire qui nous ressemble: douce, sincere et infiniment lumineuse.',
    image: '/images/rencontre.svg',
  },
  {
    date: '02 Avril 2022',
    title: 'Notre Premier Rendez-vous',
    description:
      'Un cafe devenu promenade, puis confidences. Le temps est passe sans bruit, comme si le monde s etait arrete juste pour nous.',
    image: '/images/premier-rendezvous.svg',
  },
  {
    date: '20 Aout 2022',
    title: 'Notre Premier Voyage',
    description:
      'Des rires, des photos improvisees et des couchers de soleil. Chaque instant partage a construit encore plus notre complicite.',
    image: '/images/voyage.svg',
  },
  {
    date: '14 Fevrier 2023',
    title: 'Une Annee d Amour',
    description:
      'Un an de tendresse, de soutien et de promesses. Une annee qui a confirme que nous sommes plus forts a deux.',
    image: '/images/anniversaire.svg',
  },
  {
    date: 'Aujourd hui',
    title: 'Toujours Nous',
    description:
      'Notre histoire continue de s ecrire avec patience, passion et gratitude. Le plus beau chapitre est encore devant nous.',
    image: '/images/promesse.svg',
  },
];

export const galleryItems: GalleryItem[] = [
  { src: '/images/souvenir-1.svg', alt: 'Souvenir 1' },
  { src: '/images/souvenir-2.svg', alt: 'Souvenir 2' },
  { src: '/images/souvenir-3.svg', alt: 'Souvenir 3' },
  { src: '/images/souvenir-4.svg', alt: 'Souvenir 4' },
  { src: '/images/souvenir-5.svg', alt: 'Souvenir 5' },
  { src: '/images/souvenir-6.svg', alt: 'Souvenir 6' },
  { src: '/images/souvenir-7.svg', alt: 'Souvenir 7' },
  { src: '/images/souvenir-8.svg', alt: 'Souvenir 8' },
];

export const loveLetterText = `Mon amour,\n\nDepuis que tu es entree dans ma vie, chaque jour a une saveur differente.\nTu as transforme mes silences en serenite, mes doutes en confiance, et mes reves en horizons possibles.\n\nJ aime ta douceur, ta force, et cette lumiere que tu apportes partout ou tu passes.\nAvec toi, j ai compris que l amour, ce n est pas seulement les grands moments...\nC est aussi les petits gestes, les regards complices, les mains qui se cherchent sans y penser.\n\nMerci d etre ma plus belle histoire.\nEt si je pouvais choisir encore, je te choisirais, toi, chaque jour.\n\nPour toujours.`;
