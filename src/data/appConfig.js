import heroBackground from '../assets/images/hero/hero.jpg';
import profilePicture from '../assets/images/description/profile.jpg';

export const appConfig = {
  hero: {
    emoji: '👋',
    title1: 'CQQ - Camilo Quiceno Quintero',
    title2: '💻 🟪 Data-Powered Software Engineer | 🎓 MSc Data Science',
    title3: 'Nu Colombia',
    backgroundImage: heroBackground,
  },
  about: {
    title: '- About -',
  },
  description: {
    image: profilePicture,
    description: (
      <>
        With 2 years of experience as a <strong>Software Developer</strong> and a <strong>Master's in Data Science</strong>, I specialize in backend development and building data-driven solutions. Currently, I work as a Backend Developer in the Data In Team at Talent.com, where I transform unstructured job listings into valuable, structured data, enhancing platform functionality and user experience.
        <br></br>
        <br></br>
        Over the past year, I joined the full migration of Talent.com's website from PHP to a modern microservices architecture using Go and TypeScript, deployed on Kubernetes and AWS. This migration not only improved scalability but also enabled the integration of AI-driven capabilities, setting the foundation for more dynamic and efficient platform performance. Additionally, I integrated real-time monitoring with Prometheus and Grafana to ensure optimal performance and resource utilization.        
        <br></br>
        <br></br>
        Before joining Talent.com, I worked at Materialise, where I led the <strong>Plastic Design Team</strong>, focusing on quality assurance in the design of customized surgical guides, ensuring they met the highest standards of precision and functionality.      </>
    )
  },
  companies: [
    {
      name: "Nu Colombia",
      positions: [
        {
          title: "Software Engineer",
          date: "Mar 2025 - Present",
          tasks: [
            "Develop innovative software solutions in the fintech sector",
            "Work with modern technologies in an agile environment",
            "Collaborate with multidisciplinary teams to create digital financial products",
            "Implement software development and architecture best practices"
          ]
        }
      ]
    },
    {
      name: "Talent.com",
      positions: [
        {
          title: "Back-end Developer",
          date: "Nov 2022 - Feb 2025",
          tasks: [
            "Migrate Talent.com's website from PHP to a modern microservices architecture using Go and TypeScript, deployed on Kubernetes and AWS, enabling AI-driven capabilities and better scalability",
            "Integrated real-time monitoring using Prometheus and Grafana to ensure platform stability, performance, and optimized resource utilization",
            "Researched and tested new methodologies for capturing job attributes, refining data collection processes for greater precision and performance",
            "Implemented continuous improvements and optimizations to data extraction scripts, enhancing efficiency, accuracy, and overall data quality",
            "Developed a unified data platform to transform unstructured job listings into valuable, structured data, improving platform functionality and user experience across Talent.com"
          ]
        }
      ]
    },
    {
      name: "Materialise",
      positions: [
        {
          title: "Team Leader",
          date: "Sep 2021 - Nov 2022",
          tasks: [
            "Hold the end-accountability for the quality, timely delivery, and cost-efficiency of all services performed in the CMF - MatCol Plastic Team",
            "Calculate, Analyze & Present the Key Performance Indicators of the Team",
            "Take a pro-active approach to improve the processes, services and operational efficiency",
            "Manage team motivation and resolve conflicts"
          ]
        },
        {
          title: "Trainer & Technical Leader",
          date: "Jan 2021 - Sep 2021",
          tasks: [
            "Provide trainings to newcomers",
            "Provide intra-office trainings",
            "Support the team resolving all the technical questions",
            "Quality Engineer Tasks"
          ]
        },
        {
          title: "Quality Engineer",
          date: "Jan 2019 - Jan 2021",
          tasks: [
            "Checked the quality of customized surgical guides for use by orthopedic surgeons during actual surgeries",
            "Continue with Conversion & Designer Engineer Tasks"
          ]
        },
        {
          title: "Conversion & Designer Engineer",
          date: "Jan 2018 - Jan 2019",
          tasks: [
            "Utilized Materialise software to convert 2D medical images into precise 3D bone models",
            "Conducted pre-surgery planning using 3D bone models to enhance surgical precision",
            "Designed and crafted customized surgical guides for orthopedic surgeons"
          ]
        }
      ]
    }
  ],
  education: [
    {
      background: "MSc Data Science",
      place: "University of Aberdeen",
      completion: "2024"
    },
    {
      background: "Bachelor's Degree in Bioengineering",
      place: "University of Antioquia",
      completion: "2016"
    },
    {
      background: "High School",
      place: "Normal Superior Copacabana",
      completion: "2009"
    }
  ],
  contact: {
    title: "Contact me!",
    location: {
      icon: "📍",
      text: "Medellin, Antioquia"
    },
    phone: {
      icon: "📞",
      label: "Phone:",
      text: "319 249 4403"
    },
    email: {
      icon: "📩",
      label: "Email:",
      text: "camilo.quiceno.q@gmail.com"
    }
  }
}; 