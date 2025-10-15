import { BookOpen, Users, Award, Bot, Code, Server, Database } from 'lucide-react';

export const tracks = {
  ai: { name: "AI Engineering", color: "track-ai", icon: Bot },
  fullstack: { name: "Full-Stack Development", color: "track-fullstack", icon: Code },
  devops: { name: "DevOps & Infrastructure", color: "track-devops", icon: Server },
  data: { name: "Data Engineering", color: "track-data", icon: Database },
  leadership: { name: "Technical Leadership", color: "track-leadership", icon: Users },
  all: { name: "All Workshops", color: "track-all", icon: Award }
};