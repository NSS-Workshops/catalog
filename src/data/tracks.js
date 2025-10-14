import { BookOpen, Users, Award, Bot, Code, Server } from 'lucide-react';

export const tracks = {
  beginner: { name: "Career Starter", color: "track-beginner", icon: BookOpen },
  ai: { name: "AI Engineering", color: "track-ai", icon: Bot },
  fullstack: { name: "Full-Stack Development", color: "track-fullstack", icon: Code },
  devops: { name: "DevOps & Infrastructure", color: "track-devops", icon: Server },
  leadership: { name: "Technical Leadership", color: "track-leadership", icon: Users },
  all: { name: "All Workshops", color: "track-all", icon: Award }
};