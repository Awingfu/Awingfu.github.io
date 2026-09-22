export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  skills: string[];
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
    skills: ['React.js', 'Figma', 'GCP'],
  },
  {
    company: 'Amazon',
    role: 'Backend Engineer, Alexa Shopping',
    start: 'Jan 2022',
    end: 'Oct 2022',
    location: 'Seattle, WA',
    skills: ['AWS Step Functions', 'Amazon ECS'],
  },
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Streaming Data & Platform Engineer, Kinesis Data Analytics',
    start: 'Jan 2021',
    end: 'Jan 2022',
    location: 'Seattle, WA (Remote)',
    skills: ['Streaming Data', 'Kubernetes', 'Apache Flink'],
  },
  {
    company: 'Capital One',
    role: 'Frontend Engineer, Card Tech',
    start: 'Sep 2019',
    end: 'Jan 2021',
    location: 'Chicago, IL',
    skills: ['Angular', 'React.js', 'Amazon CloudFront', 'Amazon Route 53'],
  },
  {
    company: 'Capital One',
    role: 'Data Engineer, Strategy',
    start: 'Feb 2018',
    end: 'Sep 2019',
    location: 'McLean, VA',
    skills: ['Apache Spark', 'Amazon EMR'],
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
