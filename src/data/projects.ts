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
    title: 'Climate Impact Calculator',
    description: 'A calculator for estimating the climate impact of everyday choices.',
    href: '/climate-impact-visualizer/',
  },
  {
    title: 'Android App',
    description: 'A mobile app for Android. Details coming soon.',
    comingSoon: true,
  },
];
