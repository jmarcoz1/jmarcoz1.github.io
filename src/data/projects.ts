export interface BlogEntry {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  description: string[];
  tags: string[];
  status: 'in-progress' | 'released' | 'planning';
  links?: {
    label: string;
    url: string;
  }[];
}

export const projects: BlogEntry[] = [
  {
    id: 'stark',
    slug: 'stark',
    title: 'STARK',
    date: 'February 2025 - Ongoing',
    summary: 'A fitness iOS/Android/web app designed to help users track their workouts, monitor progress, and stay motivated.',
    description: [
      'Stark started from the personal frustration of having to track workouts on an Excel sheet. On February 2025 at 3 in the morning I was debating between driving 4 hours to run the Barcelona Half Marathon or starting the project. I stayed home and powered on my computer.',
      'The app is intended for regular gym-goers to be able to track their progress seamlessly, and for fitness coaches to keep track of their trainees and prescribe workout routines rapidly.',
      'Key features include workout logging with customizable exercises, progress tracking with visual charts, and a clean interface that stays out of your way. The goal was always simplicity over feature bloat.',
      'I used Python (Django) for the backend, React + Capacitor for the frontend and a PostgreSQL database, everything behind a reverse proxy.',
      'The app is deployed in a VPS using Docker. It also has observability (Prometheus + Grafana dashboards). Not all containers are in the same network to ensure security.',
      'I am not a frontend engineer, even though I have some experience using React from my times in Hyperloop UPV and Maxlinear. AI has really helped developing the web/mobile version, and has sped up the process tremendously.',
      'I am currently finishing a PRE-production deployment to be able to test new features without affecting production. I also want to deploy a Jenkins and Argo instance to improve deployment speed, maybe tinker with Kubernetes just for fun.',
      'Regarding features, I am adding some requested functionality, like saving exercises as favourites, and implementing frontend caching to make it feel native.',
      'I wanted to thank Anna, Emanuel, Jaime, Pedro and Edu for introducing me to software development and taking the time to guide me in my first months of my professional career. To Jose Luis and Marcos for being critical with the app and making crucial suggestions. To Jaime A, Sergio and Ceci for cheering me up when I wanted to abandon the project and making me notice when I wandering, focusing on minutia instead of making progress. Also, to my father, who has used the app since day 1, when it was barely usable. This project would not have come to life without you.',
    ],
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'VPS', 'Prometheus', 'Argo'],
    status: 'released',
    links: [
      {
        label: 'DOWNLOAD ON APP STORE',
        url: 'https://apps.apple.com/es/app/stark-ltd/id6749888405',
      },
    ],
  },
];

export const statusConfig = {
  'in-progress': { label: 'IN PROGRESS', bg: 'bg-yellow-400', text: 'text-black' },
  'released': { label: 'RELEASED', bg: 'bg-green-500', text: 'text-black' },
  'planning': { label: 'PLANNING', bg: 'bg-gray-600', text: 'text-white' },
};

export function getProjectBySlug(slug: string): BlogEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
