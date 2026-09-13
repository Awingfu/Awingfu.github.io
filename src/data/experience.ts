export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  skills: string[];
  // Initial + color shown in a badge until a real logo is added below.
  badgeInitial: string;
  badgeColor: string;
  // Optional path to a real company logo (e.g. '/images/logos/spotify.png').
  // Renders instead of the badge once set.
  logoSrc?: string;
}

export interface Education {
  school: string;
  degree: string;
  detail?: string;
  start: string;
  end: string;
}

// Most recent first.
export const jobs: Job[] = [
  {
    company: 'Spotify',
    role: 'Full Stack Engineer, Cost & Climate Engineering',
    start: 'Oct 2022',
    end: 'Present',
    location: 'New York, NY (Remote)',
    skills: ['React.js', 'Figma'],
    badgeInitial: 'S',
    badgeColor: '#1DB954',
  },
  {
    company: 'Amazon',
    role: 'Backend Engineer, Alexa Shopping',
    start: 'Jan 2022',
    end: 'Oct 2022',
    location: 'Seattle, WA',
    skills: ['AWS Step Functions', 'Amazon ECS'],
    badgeInitial: 'a',
    badgeColor: '#FF9900',
  },
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Streaming Data & Platform Engineer, Kinesis Data Analytics',
    start: 'Jan 2021',
    end: 'Jan 2022',
    location: 'Seattle, WA (Remote)',
    skills: ['Streaming Data', 'Kubernetes'],
    badgeInitial: 'AWS',
    badgeColor: '#232F3E',
  },
  {
    company: 'Capital One',
    role: 'Frontend Engineer, Card Tech',
    start: 'Sep 2019',
    end: 'Jan 2021',
    location: 'Chicago, IL',
    skills: ['Angular', 'React.js'],
    badgeInitial: 'C1',
    badgeColor: '#D22630',
  },
  {
    company: 'Capital One',
    role: 'Data Engineer, Strategy',
    start: 'Feb 2018',
    end: 'Sep 2019',
    location: 'McLean, VA',
    skills: ['Apache Spark', 'Amazon EMR'],
    badgeInitial: 'C1',
    badgeColor: '#D22630',
  },
];

// Most recent first.
export const education: Education[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'MS, Computer Science',
    detail: 'Specialization in Machine Learning',
    start: '2019',
    end: '2022',
  },
  {
    school: 'University of Illinois Urbana-Champaign',
    degree: 'BS, Chemical Engineering',
    start: '2013',
    end: '2017',
  },
];
