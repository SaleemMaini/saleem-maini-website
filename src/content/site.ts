// All website copy lives here. Edit this file to update the site —
// components only render what is defined below.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://saleem-maini.vercel.app";

export const profile = {
  name: "Saleem Maini",
  initials: "SM",
  role: "Senior Frontend Engineer",
  specialty: "React Native & Expo",
  location: "Cairo, Egypt",
  availability: "Available for remote opportunities",
  email: "saleem.maini4@gmail.com",
  linkedin: "https://www.linkedin.com/in/saleem-maini",
  github: "https://github.com/SaleemMaini",
  // Drop the PDF at public/saleem-maini-cv.pdf — the "Download CV"
  // buttons appear automatically once the file exists.
  cvPath: "/saleem-maini-cv.pdf",
};

export const seo = {
  title: "Saleem Maini — Senior Frontend Engineer (React Native, Expo & Next.js)",
  description:
    "Senior Frontend Engineer with 5+ years building production mobile and web apps with React Native, Expo, React and Next.js, for fintech and SaaS products. Available for remote roles.",
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  intro:
    "I build production-grade mobile and web apps with React Native, Expo, React and Next.js. Today I lead the mobile app at a Saudi fintech. Before that, I spent four years building a multi-tenant SaaS platform and an offline-first POS used by 50+ merchants.",
};

export const metrics = [
  { value: "5+", label: "years shipping production apps" },
  { value: "3+", label: "React Native & Expo apps shipped to App Store & Google Play" },
  { value: "50+", label: "merchants running my offline-first POS" },
  { value: "100%", label: "KYC compliance via Saudi Nafath integration" },
];

export type Role = { title: string; period: string };

export type Job = {
  company: string;
  location: string;
  period: string;
  roles: Role[];
  promotionNote?: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    company: "Gamma Assets",
    location: "Saudi Arabia · Remote",
    period: "2024 – Present",
    roles: [
      { title: "Senior Frontend Developer (React & React Native)", period: "2024 – Present" },
    ],
    summary: "Fintech mobile app for digital asset investment and portfolio management.",
    highlights: [
      "Lead development of the company's React Native/Expo investment app, from architecture to store release.",
      "Integrated the **Dhamen payment gateway** for secure in-app transactions that recover from failures.",
      "Implemented government-grade identity verification with **Saudi Nafath**, reaching **100% KYC compliance**.",
      "Built seamless **crypto wallet connection** flows with Reown WalletKit and Wagmi on mobile.",
      "Turned complex Figma prototypes into pixel-perfect React Native interfaces.",
      "Own **App Store and Google Play releases** with Expo EAS, Xcode and Android Studio.",
    ],
    tags: ["React Native", "Expo", "EAS", "TypeScript", "Wagmi", "Reown WalletKit", "Payments", "KYC"],
  },
  {
    company: "Mini & More",
    location: "Türkiye · Remote",
    period: "2020 – 2024",
    roles: [
      { title: "Senior Frontend Developer", period: "2023 – 2024" },
      { title: "Mid-Level Frontend Developer", period: "2021 – 2023" },
      { title: "Junior Frontend Developer", period: "2020 – 2021" },
    ],
    promotionNote: "Promoted from Junior to Senior over four years",
    summary: "Restaurant-focused SaaS company.",
    highlights: [
      "Led frontend development of a **multi-tenant restaurant SaaS platform** handling real-time orders, payments and daily operations.",
      "Designed and built an **offline-first POS on PouchDB**. It kept **100% data integrity** through network outages for **50+ active merchants**.",
      "Built and maintained **3+ production mobile apps** with React Native and Expo.",
      "Owned the iOS and Android release cycle: build configuration, versioning and hotfix deployments.",
      "Improved production stability with crash monitoring, debugging and a structured issue-resolution process.",
      "Refactored legacy codebases to reduce technical debt and make them easier to maintain.",
      "Ran code reviews and **mentored junior developers**. Worked in Agile sprints with backend, product and UI/UX teams.",
    ],
    tags: ["React", "Next.js", "React Native", "Expo", "Electron", "PouchDB", "Redux Toolkit", "React Query"],
  },
];

export type CaseStudy = {
  title: string;
  company: string;
  kind: string;
  challenge: string;
  action: string;
  outcome: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Digital Asset Investment App",
    company: "Gamma Assets",
    kind: "Fintech · Mobile",
    challenge:
      "A regulated Saudi fintech app that needed secure payments, verified identities and crypto wallet access, all on mobile.",
    action:
      "Led the React Native/Expo build and integrated Dhamen payments, Nafath identity checks and Reown/Wagmi wallets.",
    outcome: "100% KYC compliance and live releases on iOS and Android.",
    tags: ["React Native", "Expo", "Dhamen", "Nafath", "Wagmi"],
  },
  {
    title: "Multi-Tenant Restaurant SaaS",
    company: "Mini & More",
    kind: "SaaS · Web",
    challenge:
      "One platform serving many restaurants, each with its own real-time orders, payments and daily operations.",
    action: "Led the frontend architecture and delivery with the backend and product teams.",
    outcome: "A production SaaS used by restaurants every day.",
    tags: ["React", "Next.js", "Multi-tenant", "Real-time"],
  },
  {
    title: "Offline-First POS",
    company: "Mini & More",
    kind: "SaaS · Desktop & Mobile",
    challenge: "Restaurants can't stop selling when the internet drops.",
    action: "Designed an offline-first POS on PouchDB that syncs when the connection returns.",
    outcome: "100% data integrity and uninterrupted operations for 50+ active merchants.",
    tags: ["PouchDB", "Offline-first", "Sync"],
  },
  {
    title: "Mobile App Suite",
    company: "Mini & More",
    kind: "Mobile",
    challenge: "Several production apps that had to stay stable across frequent iOS and Android releases.",
    action:
      "Built and maintained three or more production React Native/Expo apps and owned their full release lifecycle, from builds and versioning to hotfixes and crash monitoring.",
    outcome: "3+ apps live on the App Store and Google Play.",
    tags: ["React Native", "Expo", "EAS", "Release management"],
  },
];

export const skills = [
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Expo EAS", "Xcode", "Android Studio", "App Store & Google Play releases"],
  },
  { group: "Web & Desktop", items: ["React", "Next.js", "Electron"] },
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { group: "State & Data", items: ["Redux Toolkit", "React Query", "Zustand", "PouchDB", "Firebase"] },
  { group: "UI", items: ["Tailwind CSS", "Material UI", "Bootstrap", "Figma to pixel-perfect UI"] },
  {
    group: "Fintech & Integrations",
    items: ["Payment gateways (Dhamen)", "Nafath identity verification / KYC", "Web3 wallets (Reown WalletKit, Wagmi)"],
  },
  {
    group: "Quality & Workflow",
    items: ["Jest", "Code reviews", "Mentoring", "Agile / Scrum", "Git", "Bitbucket", "Jira"],
  },
  { group: "AI-Assisted Development", items: ["Claude Code", "Cursor", "Spec Kit"] },
];

export const about = [
  "I'm a Senior Frontend Engineer who has spent 5+ years turning product ideas into reliable mobile and web apps. I started as a junior developer at Mini & More and grew into a senior role there over four years. Along the way I led a multi-tenant restaurant SaaS and built an offline-first POS that keeps merchants running when the internet doesn't.",
  "Today I lead React Native development at Gamma Assets, a Saudi fintech, where I work on payments, government identity verification and crypto wallets. That work is regulated and has no room for bugs.",
  "I care about clean architecture, pixel-perfect UI and stable releases. I also enjoy mentoring and code reviews. I work fully remote across time zones and communicate in English (advanced) and Arabic (native).",
];

export const education = [
  { degree: "Bachelor of Information Technology", school: "Syrian Virtual University", period: "2018 – 2022" },
  { degree: "Diploma in Software Engineering", school: "Albaath University", period: "2016 – 2018" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
];

export const contact = {
  heading: "Let's build your next product.",
  body: "I'm open to **Senior Frontend / React Native** roles, remote or relocation. If your team is building a mobile or SaaS product, I'd love to hear about it.",
};
