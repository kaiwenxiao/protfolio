import React from "react";
import {FaReact} from "react-icons/fa";
import {FaVuejs} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import Lunrron from '@/public/Lunroo.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const;


export const headerLanguageMap = {
  Home: '首页',
  About: '关于我',
  Projects: '我的项目',
  Skills: '我的技能',
  Experiences: '我的经历',
}

export const experiencesData = [
  {
    title: "Senior Frontend Engineer",
    location: "Easyview, Shenzhen, Mainland China",
    description:
      "As an experienced developer maintain CRM and Sass system and secure user story requirements, where a Hong Kong based fintech company spreading its operations also APAC and Europe and helping with external asset managers and family offices.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 Aug - Present",
  },
  {
    title: "Frontend Developer",
    location: "Dragonpass, Guangzhou, Mainland China",
    description:
      "Maintain daily projects, start new projects from scratch and beef up facility infrastructure, totally got my hands dirty around 13 projects. All of business span across the world to provide the first class travel experience",
    icon: React.createElement(FaVuejs),
    date: "2018 Aug - 2023 Aug",
  },
  {
    title: "BA in Computer Science",
    location: "Guangzhou College of Commerce, China",
    description:
      "Graduated with a Bachelor of Computer Science, Gained foundational knowledge in Computer Science and solid my code skill.",
    icon: React.createElement(FaReact),
    date: "2015 Sep - 2019 Jun",
  },

]

export const experiencesDataZn = [
  {
    title: "Senior Frontend Engineer",
    location: "Easyview, Shenzhen, Mainland China",
    description:
      "As an experienced developer maintain CRM and Sass system and secure user story requirements, where a Hong Kong based fintech company spreading its operations also APAC and Europe and helping with external asset managers and family offices.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 Aug - Present",
  },
  {
    title: "Frontend Developer",
    location: "Dragonpass, Guangzhou, Mainland China",
    description:
      "Maintain daily projects, start new projects from scratch and beef up facility infrastructure, totally got my hands dirty around 13 projects. All of business span across the world to provide the first class travel experience",
    icon: React.createElement(FaVuejs),
    date: "2018 Aug - 2023 Aug",
  },
  {
    title: "BA in Computer Science",
    location: "Guangzhou College of Commerce, China",
    description:
      "Graduated with a Bachelor of Computer Science, Gained foundational knowledge in Computer Science and solid my code skill.",
    icon: React.createElement(FaReact),
    date: "2015 Sep - 2019 Jun",
  },
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
  {
    title: "HidingElephant",
    title_zh: 'HidingElephant',
    description:
      "HidingElephant is an ingeniously integrate with icons and text AI-driven Logo design versatility for professional designers. It's fully empowered with advanced AI design model, making it easily to transform your logo into vector and enjoy collaboration and creativity during your work.",
    desc_zh: "HidingElephant is an ingeniously integrate with icons and text AI-driven Logo design versatility for professional designers. It's fully empowered with advanced AI design model, making it easily to transform your logo into vector and enjoy collaboration and creativity during your work.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", 'TailwindCSS', 'Stripe', 'Shadcn UI', 'GSAP'],
    isVideo: true,
    projectUrl: '',
    demoUrl: 'https://www.hidingelephant.com/',
  },
  {
    title: "Lunroo",
    title_zh: 'Lunroo',
    description: "A bundle of toolsets to empower your social media marketing productivity.",
    desc_zh: "A bundle of toolsets to empower your social media marketing productivity.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", 'TailwindCSS', 'Stripe'],
    imageUrl: Lunrron,
    projectUrl: '',
    demoUrl: 'https://www.hidingelephant.com/',
  },
  {
    title: "Breddit",
    title_zh: "社交新闻论坛",
    description:
      `A modern full-stack Reddit clone features infinite scrolling, secure authentication via NextAuth and Google, and a custom feed for authenticated users. It utilizes Upstash Redis for advanced caching and React-Query for efficient data fetching, ensuring a responsive and user-friendly experience with optimistic updates.
            `,
    desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
    tags: ["JavaScript", "HTML", "CSS3"],
    imageUrl: breadditImage,
    projectUrl: 'https://github.com/Codefreyy/Breddit',
    demoUrl: 'https://joy-breddit.vercel.app/',
  },


]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Vue",
  "Node",
  "Express",
  "Nestjs",
  "Git",
  "Tailwind",
  "shadcn UI",
  "Antd Design",
  "Prisma",
  "MikroOrm",
  "PostgreSQL",
  "MySQL",
  "eCharts",
  "d3",
  "UI/UX"
] 
