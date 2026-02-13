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
    date: '06 Juin 2025',
    title: 'Notre Premiere Rencontre',
    description:
      'Tout a commencé le jour où ton avion a touché le sol à Nice. Le ciel s’est illuminé, la mer nous observait, et quelque part entre les feux d’artifice et des tacos sur la plage, quelque chose d’évident est né.',
    image: '/images/rencontre.svg',
  },
  {
    date: '07 Juin 2025',
    title: 'Notre Premier Rendez-vous',
    description:
      'Un café devenu promenade, une promenade devenue confidences.\nD’Antibes à la Baie des Milliardaires, la journée nous a porté avec une douceur inattendue. Le soir, sous les lumières de Villefranche-sur-Mer, ton regard brillait plus fort que la mer elle-meme. Et sur la route du retour, Blue Love résonnait doucement tandis que tes yeux disaient deja ce que les mots n’osaient pas encore.',
    image: '/images/premier-rendezvous.svg',
  },
  {
    date: '20 Aout 2022',
    title: 'Notre Premier Voyage',
    description:
      'Cinque Terre, Pisa, Firenze et Verona.\nUne semaine de découvertes où chaque ville, chaque pas et chaque paysage a tissé un peu plus notre histoire. Des rires qui résonnent, des photos prises au hasard, des couchers de soleil qui s’attardent.\nTout semblait dire que ce voyage n’était pas seulement un itinéraire, mais le début d’un “nous” qui prenait forme.',
    image: '/images/voyage.svg',
  },
  {
    date: '14 Fevrier 2023',
    title: 'Deuxième Voyage : Marrakech',
    description:
      'Marrakech après le Nouvel An : les rues en fête, les matchs du Maroc et la ville entière qui vibrait.\nEntre Jemaa el Fna, ses couleurs d’un côté, et la tangia, la Night Life de l’autre.\nUn voyage cette fois vivant, avec ses éclats, ses moments suspendus, mais aussi ses hauts et ses bas vers la fin.\nUn voyage où chaque instant, lumineux ou plus fragile, ajoutait un fil de plus à notre histoire.',
    image: '/images/anniversaire.svg',
  },
  {
    date: 'Aujourd hui',
    title: 'Toujours Nous',
    description:
      'La distance entre nous n’efface rien : elle affine, elle renforce et elle démontre ce qui compte vraiment.\nNotre histoire s’écrit au rythme de la patience, et avance avec du cœur une page après l’autre.\nEt quelque part, comme une évidence encore discrète: Ce que nous avons de plus précieux est encore devant nous.\n Jusqu’à ce que l’amour nous rapproche.',
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
