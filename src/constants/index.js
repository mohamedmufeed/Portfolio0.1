export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Aspivo - Job Application Platform',
    desc: 'Aspivo is a full-stack job portal offering real-time messaging, video interviews, and premium subscriptions via Stripe. Built with React, TypeScript, Node.js, and MongoDB, it features AI resume generation and Docker-based deployment for scalability.',
    subdesc:
      'Aspivo is a full-stack job portal featuring real-time chat, video interviews, and AI-powered resumes. Built with React, Node.js, and Stripe, it ensures scalability, seamless hiring, and premium subscription access.',
    href: 'https://www.aspivo.site/',
    texture: '/textures/project/project1.mov',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: 'assets/MongoDB.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Node js',
        path: '/assets/Nodejs.png',
      },
    ],
  },
  {
    title: 'Armani Floorings  Flooring Store Application',
    desc: 'A responsive and visually engaging website built for Armani Floorings using Next.js for SEO optimization and performance. Featuring GSAP ScrollTrigger animations, it delivers smooth interactions and elegantly showcases the brand’s flooring products.',
    subdesc:
      'Armani Floorings’ website, built with Next.js and GSAP ScrollTrigger, delivers a seamless, high-performance browsing experience with smooth animations, optimized SEO, and a modern interface that highlights the brand’s premium flooring products.',
    href: 'https://www.armanifloorings.com/',
    texture: '/textures/project/project2.mov',
    logo: '/assets/projectlogo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/Nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

      {
        id: 4,
        name: 'GSAP',
        path: '/assets/gsap.png',
      },
    ],
  },
  
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: '369 Degree',
    pos: 'Full Stack Developer',
    duration: '2025 - present',
    title: "I am currently working as a Full-Stack Developer at 369 Degree, contributing to building and maintaining features, enhancing user experience, and implementing scalable full-stack solutions",
    icon: '/assets/369.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Brototype',
    pos: 'Full Stack Developer',
    duration: '2024 - 2025',
    title: "I worked as a Full-Stack Developer Intern at Brototype, a 28-week self-learning platform. I contributed to building and maintaining features, enhancing user experience, and implementing scalable full-stack solutions.",
    icon: '/assets/brototype.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];


