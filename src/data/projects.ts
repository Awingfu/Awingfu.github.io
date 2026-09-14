export interface Project {
  title: string;
  description?: string;
  icon?: string;
  href?: string;
  tags?: string[];
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Finance App',
    description: 'A paycheck & personal finance calculator.',
    icon: 'ri-calculator-line',
    href: '/web-finance-app',
    tags: ['TypeScript', 'React', 'Tailwind'],
  },
  {
    title: 'Climate Impact Calculator',
    description: 'A calculator for estimating the climate impact of everyday choices.',
    icon: 'ri-leaf-line',
    href: '/climate-impact-visualizer/',
    tags: ['React', 'TypeScript', 'Chart.js'],
  },
  {
    title: 'Android App',
    description: 'A mobile app for Android. Details coming soon.',
    icon: 'ri-android-line',
    comingSoon: true,
  },
];
