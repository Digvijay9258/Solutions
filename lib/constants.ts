// Site-wide configuration
export const siteConfig = {
  name: "GURUVANTA ITs SOLUTION PVT LTD",
  shortName: "GURUVANTA",
  description:
    "Transform ideas into digital solutions. Websites, Vibe-Coded Solutions, CRM, ERP, E-Commerce and Custom Software built for modern businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruvanta.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: "contact@guruvanta.com",
  phone: "+91-XXXXXXXXXX",
  address: "India",
  socials: {
    linkedin: "#",
    twitter: "#",
    github: "#",
    instagram: "#",
  },
};

// Navigation links
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// Services data
export const services = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription: "Custom responsive business websites.",
    description:
      "We build custom, responsive websites tailored to your business needs. From single-page landing sites to multi-page corporate platforms, every website is crafted with modern technologies and optimized for performance.",
    icon: "Globe",
    features: [
      "Custom responsive design",
      "Mobile-first approach",
      "Fast page load speeds",
      "Content management",
      "Contact forms & lead capture",
      "Analytics integration",
      "SSL & security",
      "Deployment & hosting setup",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "vibe-coded-websites",
    title: "Vibe-Coded Websites",
    shortDescription: "AI-assisted development workflows with developer review and testing.",
    description:
      "Leverage the power of AI-assisted development to accelerate your project timeline. Our vibe-coded approach combines AI code generation with thorough developer review, testing, and quality assurance for rapid, reliable results.",
    icon: "Sparkles",
    features: [
      "AI-assisted rapid development",
      "Developer review & QA",
      "Faster delivery timelines",
      "Modern code architecture",
      "Full testing coverage",
      "Production-ready output",
      "Cost-effective development",
      "Iterative refinement",
    ],
    technologies: ["AI Tools", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    shortDescription: "Custom customer and lead management systems.",
    description:
      "Streamline your customer relationships with a custom-built CRM system. Track leads, manage contacts, automate follow-ups, and gain insights into your sales pipeline with a solution designed for your workflow.",
    icon: "Users",
    features: [
      "Lead management pipeline",
      "Contact organization",
      "Deal tracking",
      "Task & follow-up automation",
      "Email integration",
      "Reporting & analytics",
      "Role-based access",
      "Custom dashboards",
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Node.js"],
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    shortDescription: "Business management and workflow automation.",
    description:
      "Centralize your business operations with a tailored ERP solution. From inventory to HR to finance, our ERP systems connect every department into one unified platform for maximum efficiency.",
    icon: "Building2",
    features: [
      "Multi-module architecture",
      "Inventory management",
      "HR & payroll",
      "Financial tracking",
      "Workflow automation",
      "Reporting dashboards",
      "Multi-user access",
      "Scalable design",
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Node.js"],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    shortDescription: "Online stores with product, cart and order functionality.",
    description:
      "Launch your online store with a fully functional e-commerce platform. We build custom shopping experiences with product catalogs, secure checkout, order management, and inventory tracking.",
    icon: "ShoppingCart",
    features: [
      "Product catalog management",
      "Shopping cart & wishlist",
      "Secure checkout flow",
      "Order management",
      "Inventory tracking",
      "Payment gateway integration",
      "Customer accounts",
      "Mobile-responsive storefront",
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe/Razorpay", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "seo-friendly-websites",
    title: "SEO-Friendly Websites",
    shortDescription: "Websites developed using technical SEO best practices.",
    description:
      "Every website we build follows technical SEO best practices from the ground up. Proper meta tags, semantic HTML, structured data, fast page speeds, and clean URLs help your site get discovered organically.",
    icon: "Search",
    features: [
      "Technical SEO audit",
      "Meta tags & Open Graph",
      "Semantic HTML structure",
      "Schema markup",
      "Page speed optimization",
      "Mobile responsiveness",
      "XML sitemap & robots.txt",
      "Core Web Vitals optimization",
    ],
    technologies: ["Next.js", "React", "Google Search Console", "Analytics"],
  },
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    shortDescription: "Business-specific web applications.",
    description:
      "Need something unique? We develop custom web applications tailored to your specific business processes. From internal tools to customer-facing platforms, we build exactly what you need.",
    icon: "Code",
    features: [
      "Custom business logic",
      "User authentication & roles",
      "Database design",
      "API development",
      "Third-party integrations",
      "Real-time features",
      "Admin dashboards",
      "Scalable architecture",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "REST/GraphQL"],
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDescription: "Bug fixing, updates, optimization and support.",
    description:
      "Keep your website running smoothly with our maintenance and support services. We handle bug fixes, security updates, performance optimization, content updates, and ongoing technical support.",
    icon: "Wrench",
    features: [
      "Bug fixing & troubleshooting",
      "Security updates & patches",
      "Performance optimization",
      "Content updates",
      "Backup management",
      "Uptime monitoring",
      "Technical support",
      "Monthly reports",
    ],
    technologies: ["Various", "Depends on existing stack"],
  },
];

// Pricing plans
export const pricingPlans = [
  {
    name: "Starter",
    price: "₹5,999",
    suffix: "+",
    description: "Perfect for individuals and small businesses getting started online.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Deployment assistance",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "₹14,999",
    suffix: "+",
    description: "For growing businesses that need a professional online presence.",
    features: [
      "Up to 10 pages",
      "Custom UI design",
      "Responsive design",
      "SEO-friendly structure",
      "Lead capture form",
      "Analytics integration",
      "Deployment & setup",
    ],
    highlighted: true,
    cta: "Start Your Project",
  },
  {
    name: "E-Commerce",
    price: "₹24,999",
    suffix: "+",
    description: "Full-featured online store to start selling products.",
    features: [
      "Product management",
      "Shopping cart",
      "Checkout flow",
      "Order management",
      "Responsive UI",
      "Basic SEO",
    ],
    highlighted: false,
    cta: "Launch Your Store",
  },
  {
    name: "CRM / ERP",
    price: "Custom",
    suffix: "",
    description: "Enterprise solutions tailored to your business processes.",
    features: [
      "Custom modules",
      "Multi-user access",
      "Third-party integrations",
      "Workflow automation",
      "Hosting setup",
      "Scope-based pricing",
    ],
    highlighted: false,
    cta: "Request Quote",
  },
];

// Why Choose Us data
export const whyChooseUs = [
  {
    title: "Custom Solutions",
    description: "Every project is built specifically for your business needs. No cookie-cutter templates.",
    icon: "Puzzle",
  },
  {
    title: "Modern Technology",
    description: "We use the latest frameworks and tools to build fast, secure, and scalable applications.",
    icon: "Cpu",
  },
  {
    title: "Responsive Development",
    description: "Every website and application works flawlessly across all devices and screen sizes.",
    icon: "Smartphone",
  },
  {
    title: "SEO-Friendly",
    description: "Built with technical SEO best practices to help your business get discovered online.",
    icon: "Search",
  },
  {
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your business without requiring complete rebuilds.",
    icon: "TrendingUp",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest communication throughout the project.",
    icon: "MessageSquare",
  },
  {
    title: "Post-Launch Support",
    description: "We do not disappear after deployment. Ongoing support and maintenance available.",
    icon: "Headphones",
  },
  {
    title: "AI-Assisted Development",
    description: "Leveraging AI tools for faster development while maintaining quality through human review.",
    icon: "Sparkles",
  },
];

// Development process steps
export const developmentProcess = [
  {
    step: "01",
    title: "Requirement",
    description: "Understanding your business goals, target audience, and project requirements in detail.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating project roadmap, technical architecture, and defining milestones.",
  },
  {
    step: "03",
    title: "UI/UX",
    description: "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, maintainable, and well-tested code.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing across devices, browsers, and scenarios to ensure quality.",
  },
  {
    step: "06",
    title: "Client Review",
    description: "Presenting the solution for your feedback and incorporating refinements.",
  },
  {
    step: "07",
    title: "Deployment",
    description: "Launching your solution to production with proper configuration and monitoring.",
  },
  {
    step: "08",
    title: "Support",
    description: "Ongoing maintenance, updates, and technical support post-launch.",
  },
];

// Technologies
export const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Vercel", category: "Hosting" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Zod", category: "Validation" },
];

// FAQ data
export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes 2-4 weeks depending on the scope and complexity. E-commerce and custom web applications may take 4-8 weeks. We provide a detailed timeline during the planning phase.",
  },
  {
    question: "Do you provide hosting and deployment?",
    answer:
      "Yes, we assist with deployment and hosting setup. We typically deploy on platforms like Vercel for optimal performance. Hosting costs are separate from development costs.",
  },
  {
    question: "Can I update the website content myself?",
    answer:
      "Depending on your plan, we can integrate a content management system (CMS) that allows you to update text, images, and other content without technical knowledge.",
  },
  {
    question: "What is a Vibe-Coded website?",
    answer:
      "Vibe-Coded websites use AI-assisted development workflows to accelerate the building process. Every line of code is reviewed, tested, and refined by our developers to ensure production-quality output.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, we offer website maintenance packages that include bug fixes, security updates, performance optimization, and content updates. Details are discussed based on your specific needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (NEFT/IMPS/UPI), and other standard payment methods. Payment terms are discussed during project onboarding.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes, all our websites are built with technical SEO best practices including proper meta tags, semantic HTML, fast page speeds, and mobile responsiveness. Note: We do not guarantee search engine rankings.",
  },
  {
    question: "Can I see some of your previous work?",
    answer:
      "Yes, please visit our Portfolio page to see our projects. Note that some projects are concept/demo projects created to showcase our capabilities.",
  },
];

// Budget options for lead form
export const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1 Lakh",
  "₹1 Lakh+",
];

// Contact methods
export const contactMethods = ["Email", "Phone", "WhatsApp"];
