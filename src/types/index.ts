export interface Player {
  number: number;
  name: string;
  position: string;
  academicYear: string;
  height: string;
  hometown: string;
  lastSchool: string;
  bio: string;
  photoUrl?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date?: string;
  excerpt?: string;
}

export interface StatItem {
  player: string;
  games: number;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
}