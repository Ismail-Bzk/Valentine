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
    image: '/us/rencontre.JPG',
  },
  {
    date: '07 Juin 2025',
    title: 'Notre Premier Rendez-vous',
    description:
      'Un café devenu promenade, une promenade devenue confidences.\nD’Antibes à la Baie des Milliardaires, la journée nous a porté avec une douceur inattendue. Le soir, sous les lumières de Villefranche-sur-Mer, ton regard brillait plus fort que la mer elle-meme. Et sur la route du retour, Blue Love résonnait doucement tandis que tes yeux disaient deja ce que les mots n’osaient pas encore.',
    image: '/us/premier-rendezvous.JPG',
  },
  {
    date: '20 Octobre 2025',
    title: 'Notre Premier Voyage',
    description:
      'Cinque Terre, Pisa, Firenze et Verona.\nUne semaine de découvertes où chaque ville, chaque pas et chaque paysage a tissé un peu plus notre histoire. Des rires qui résonnent, des photos prises au hasard et des couchers de soleil qui s’attardent.\nTout semblait dire que ce voyage n’était pas seulement un itinéraire, mais le début d’un “nous” qui prenait forme.',
    image: '/us/voyage.JPG',
  },
  {
    date: '01 Janvier 2026',
    title: 'Deuxième Voyage : Marrakech',
    description:
      'Marrakech, cœur de nos racines. Les rues en fête, les matchs du Maroc et la ville entière qui vibrait.\nEntre Jemaa el Fna, ses couleurs d’un côté, et la tangia, la Night Life de l’autre.\nUn voyage cette fois vivant, avec ses éclats, ses moments suspendus, mais aussi ses hauts et ses bas vers la fin.\nUn voyage où chaque instant, lumineux ou plus fragile, ajoutait un fil de plus à notre histoire.',
    image: '/us/anniversaire.JPG',
  },
  {
    date: 'Aujourd hui',
    title: 'Toujours Nous',
    description:
      'La distance entre nous n’efface rien : elle affine, elle renforce et elle démontre ce qui compte vraiment.\nNotre histoire s’écrit au rythme de la patience, et avance avec du cœur une page après l’autre.\nEt quelque part, comme une évidence encore discrète: Ce que nous avons de plus précieux est encore devant nous.\n Jusqu’à ce que l’amour nous rapproche.',
    image: '/us/promesse.JPG',
  },
];

export const galleryItems: GalleryItem[] = [
  { src: '/us/souvenir1.JPG', alt: 'Souvenir 1' },
  { src: '/us/souvenir2.JPG', alt: 'Souvenir 2' },
  { src: '/us/souvenir3.JPG', alt: 'Souvenir 3' },
  { src: '/us/souvenir4.JPG', alt: 'Souvenir 4' },
  { src: '/us/souvenir5.JPG', alt: 'Souvenir 5' },
  { src: '/us/souvenir6.JPG', alt: 'Souvenir 6' },
  { src: '/us/souvenir7.JPG', alt: 'Souvenir 7' },
  { src: '/us/souvenir8.JPG', alt: 'Souvenir 8' },
];

export const loveLetterText = `Mon amour,\n\nDepuis que tu es entree dans ma vie, chaque jour a une saveur differente.\nTu as transforme mes silences en serenite, mes doutes en confiance, et mes reves en horizons possibles.\n\nJ aime ta douceur, ta force, et cette lumiere que tu apportes partout ou tu passes.\nAvec toi, j ai compris que l amour, ce n est pas seulement les grands moments...\nC est aussi les petits gestes, les regards complices, les mains qui se cherchent sans y penser.\n\nMerci d etre ma plus belle histoire.\nEt si je pouvais choisir encore, je te choisirais, toi, chaque jour.\n\nPour toujours.`;
