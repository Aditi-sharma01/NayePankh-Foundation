export const siteConfig = {
  name: "NayePankh Foundation",
  tagline: "Giving Wings To Hope",
  description:
    "A youth-led NGO in India creating education, dignity, and hope for underserved communities — from Covid relief to nationwide impact.",
  url: "https://nayepankh.org",
  email: "hello@nayepankh.org",
  phone: "+91 98765 43210",
  location: "India",
  social: {
    instagram: "https://instagram.com/nayepankhfoundation",
    facebook: "https://facebook.com/nayepankhfoundation",
    linkedin: "https://linkedin.com/company/nayepankh-foundation",
    youtube: "https://youtube.com/@nayepankhfoundation",
    twitter: "https://twitter.com/nayepankh",
  },
};

export const images = {
  logo: "/logo.png",
  hero: "/photo6.jpg",
  aboutMain: "/photo7.jpg",
  aboutFloat1: "/photo3.jpg",
  aboutFloat2: "/photo8.jpg",
  whatIsBg: "/photo9.jpg",
  story: "/photo4.jpg",
  impactAccent: "/photo5.jpg",
  joinUs: "/teamphoto.jpg",
  getInTouch: "/teamphoto2.jpg",
  certificates: ["/certificate1.png", "/certificate2.png", "/certificate3.png"],
  donationCollage: ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg", "/photo5.jpg"],
  gallery: [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo9.jpg",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Story", href: "#story" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Volunteer", href: "#join-us" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact Us", href: "#contact" },
];

export const heroStats = [
  { display: "2 Lakh+", label: "Lives Impacted" },
  { display: "500+", label: "Volunteers" },
];

export const storyTimeline = [
  { year: "2020", title: "Covid Relief", description: "When the world stopped, we started — delivering food, essentials, and hope to families who had nowhere to turn." },
  { year: "2021", title: "NGO Registration", description: "Officially registered as a society, turning a student initiative into a trusted organisation." },
  { year: "2022", title: "Education Programs", description: "Launched tutoring, scholarships, and school support for children who dream of a better tomorrow." },
  { year: "2023", title: "Women Empowerment", description: "Self-defense, literacy, and livelihood programs that help women stand on their own feet." },
];

export const impactStats = [
  { display: "2 Lakh+", label: "Lives Impacted", icon: "Heart" },
  { display: "500+", label: "Volunteers", icon: "Users" },
  { display: "50+", label: "Programs", icon: "BookOpen" },
  { display: "30+", label: "Communities Served", icon: "MapPin" },
];

export const programs = [
  { id: "education", title: "Education", description: "Books, tutoring, and scholarships so every child can learn without barriers.", icon: "BookOpen" },
  { id: "youth", title: "Youth Empowerment", description: "Building confident young leaders who will shape India's tomorrow.", icon: "Users" },
  { id: "skills", title: "Skill Development", description: "Practical training that turns potential into employment and independence.", icon: "Wrench" },
  { id: "women", title: "Women Empowerment", description: "Safety, literacy, and opportunity for women and girls in every community.", icon: "Sparkles" },
  { id: "community", title: "Community Welfare", description: "Food drives, health camps, and relief when families need us most.", icon: "Heart" },
  { id: "awareness", title: "Social Awareness", description: "Campaigns that open eyes, change minds, and inspire collective action.", icon: "Megaphone" },
];

export const certificates = [
  {
    image: "/certificate1.png",
    title: "Society Registration",
    description: "Officially registered under the Societies Registration Act — a verified, legitimate NGO.",
  },
  {
    image: "/certificate2.png",
    title: "12A Certificate",
    description: "Tax exemption certificate — every rupee goes directly to those who need it most.",
  },
  {
    image: "/certificate3.png",
    title: "80G Certificate",
    description: "Donors receive tax benefits under Section 80G. Your kindness is rewarded.",
  },
];

export const galleryItems = [
  { id: "1", src: "/photo1.jpg", title: "Team Together", category: "Our Family" },
  { id: "2", src: "/photo2.jpg", title: "Community Outreach", category: "Our Work" },
  { id: "3", src: "/photo3.jpg", title: "Moments of Joy", category: "Smiles" },
  { id: "4", src: "/photo4.jpg", title: "Changing Lives", category: "Hope" },
  { id: "5", src: "/photo5.jpg", title: "Education Drive", category: "Education" },
  { id: "6", src: "/photo6.jpg", title: "Volunteer Activity", category: "Volunteers" },
  { id: "7", src: "/photo7.jpg", title: "On Ground Work", category: "Field Work" },
  { id: "8", src: "/photo8.jpg", title: "Community Support", category: "Impact" },
  { id: "9", src: "/photo9.jpg", title: "Food Distribution", category: "Relief" },
];

export const joinRoles = [
  { title: "Volunteer", description: "Give your time on the ground and see change happen before your eyes." },
  { title: "Internship", description: "Learn, grow, and contribute through structured NGO experience." },
  { title: "Campus Ambassador", description: "Bring NayePankh to your college and inspire fellow students." },
  { title: "Social Leader", description: "Lead initiatives in your city and multiply our impact." },
];

export const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Story", href: "#story" },
  { label: "About Us", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Donate", href: "#donate" },
  { label: "Contact Us", href: "#contact" },
];

// Legacy compat
export const heroCollage = images.donationCollage as unknown as string[];
export const impactCards = impactStats;
export const volunteerRoles = joinRoles;
export const donationTiers = [];
export const paymentMethods = ["UPI", "Card", "Net Banking"];
export const mediaOutlets = [];
export const footerColumns = { about: { title: "About", links: footerLinks } };
