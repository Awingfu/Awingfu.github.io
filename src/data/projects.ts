export interface Project {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tech?: string[];
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Finance App',
    description: 'A paycheck & personal finance calculator.',
    image: '/images/calculator.png',
    href: '/web-finance-app',
  },
  {
    title: 'Cloud Cost & Carbon Dashboard',
    description: 'Visualizing cloud spend alongside estimated carbon impact.',
    comingSoon: true,
  },
  {
    title: 'Spotify-Style Recommender',
    description: 'A small recommendation-engine demo over a public music dataset.',
    comingSoon: true,
  },
];
