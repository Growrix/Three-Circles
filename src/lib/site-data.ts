export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  summary: string;
  details: string[];
  segments: string[];
  image: string;
  alt: string;
};

export type Project = {
  title: string;
  category: string;
  location: string;
  summary: string;
  image: string;
  alt: string;
};

export const siteData = {
  brand: {
    name: "Three Circles",
    email: "info@threecircles.design",
    phone: "+1 (555) 000-0000",
    address: ["123 Design Avenue, Suite 100", "New York, NY 10001"],
    responseTime: "Replies within one business day",
    hours: [
      "Monday - Friday: 9 AM - 6 PM",
      "Saturday: By appointment",
      "Sunday: Closed",
    ],
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavLink[],
  home: {
    eyebrow: "Interior Design Studio",
    title: "Designing spaces with warmth, drama, and precision.",
    accent: "warmth, drama, and precision.",
    description:
      "Three Circles shapes residential, commercial, and hospitality environments that feel tailored from the first impression to the final detail.",
    trustPoints: [
      "Residential and commercial expertise",
      "Concept through installation management",
      "Design systems for consistent execution",
    ],
    stats: [
      { value: "60+", label: "Spaces transformed" },
      { value: "12", label: "Years of combined design leadership" },
      { value: "96%", label: "Clients returning or referring" },
    ],
    heroImages: [
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
        alt: "Modern living room with sculptural furniture and soft daylight.",
      },
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        alt: "Contemporary kitchen interior with natural textures and warm tones.",
      },
    ],
    testimonial: {
      quote:
        "They took a difficult mixed-use brief and turned it into a space that feels both elevated and genuinely livable.",
      author: "Mina Patel",
      role: "Founder, Atelier North",
    },
  },
  about: {
    eyebrow: "Our Story",
    title: "A studio built around clarity, collaboration, and layered interiors.",
    description:
      "We combine architecture-minded planning with a tactile, editorial point of view so each space feels intentional at every scale.",
    story:
      "Three Circles works at the intersection of function, feeling, and identity. We help homeowners and brands translate ambition into spaces that hold up operationally while still leaving a visual impression.",
    mission:
      "Create interiors that are deeply personal, operationally sound, and visually distinct.",
    vision:
      "Build a design practice known for thoughtful process, bold restraint, and environments that improve how people gather, work, and live.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  },
  values: [
    {
      name: "Creative Restraint",
      desc: "Every element earns its place. The result feels rich without slipping into noise.",
    },
    {
      name: "Operational Clarity",
      desc: "We design for flow, maintenance, and real-world use, not only presentation-day photography.",
    },
    {
      name: "Material Honesty",
      desc: "Palettes, textures, and finishes are selected for longevity as much as visual impact.",
    },
    {
      name: "Collaborative Delivery",
      desc: "Clients, contractors, and vendors stay aligned through explicit milestones and shared context.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery",
      desc: "We map goals, use cases, budget, and the emotional tone the space should carry.",
    },
    {
      step: "02",
      title: "Concept",
      desc: "Mood, material direction, and layout options are developed into a clear creative route.",
    },
    {
      step: "03",
      title: "Detailing",
      desc: "Selections, specifications, and visuals are refined so implementation has no ambiguity.",
    },
    {
      step: "04",
      title: "Delivery",
      desc: "We coordinate sourcing, installs, and finishing so the final result lands as designed.",
    },
  ],
  services: [
    {
      title: "Interior Design",
      summary:
        "Full-scope design for homes, retail, workspaces, and hospitality environments.",
      details: [
        "Concept direction and design storytelling",
        "Material, lighting, and finish specification",
        "FF&E selection and installation guidance",
      ],
      segments: ["Residential", "Commercial", "Hospitality"],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
      alt: "Elegant lounge with layered textures and warm lighting.",
    },
    {
      title: "Space Planning",
      summary:
        "Layouts that improve movement, comfort, and utility without sacrificing atmosphere.",
      details: [
        "Circulation and zoning strategy",
        "Furniture planning and adjacencies",
        "High-use room optimization",
      ],
      segments: ["Residential", "Commercial"],
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Contemporary office interior with clean lines and layered seating.",
    },
    {
      title: "Furniture Selection",
      summary:
        "Curated sourcing that balances statement pieces, custom work, and practical lead times.",
      details: [
        "Trade and custom furniture sourcing",
        "Accessory styling and finishing layers",
        "Procurement aligned to budget targets",
      ],
      segments: ["Residential", "Commercial"],
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      alt: "Living room with low-profile sectional and sculptural lighting.",
    },
    {
      title: "Color Consultation",
      summary:
        "Palettes designed to shape mood, depth, light response, and visual cohesion.",
      details: [
        "Whole-home palette planning",
        "Finish and textile harmonization",
        "Light-responsive testing for key rooms",
      ],
      segments: ["Residential", "Hospitality"],
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      alt: "Refined kitchen palette with stone surfaces and dark cabinetry.",
    },
    {
      title: "Project Management",
      summary:
        "Hands-on coordination across trades, timelines, and procurement checkpoints.",
      details: [
        "Vendor and contractor alignment",
        "Budget and milestone tracking",
        "Install-day oversight and issue resolution",
      ],
      segments: ["Residential", "Commercial", "Hospitality"],
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      alt: "Design workspace with plans, samples, and collaborative tools.",
    },
  ] satisfies Service[],
  portfolio: {
    eyebrow: "Selected Work",
    title: "Spaces built for real life, then refined until they feel cinematic.",
    description:
      "A mix of residential, commercial, and hospitality projects that demonstrate our range without losing our point of view.",
    categories: ["All", "Residential", "Commercial", "Hospitality"],
  },
  projects: [
    {
      title: "Modern Loft Renovation",
      category: "Residential",
      location: "Brooklyn, NY",
      summary: "Soft industrial detailing with warm stone, smoked oak, and sculptural lighting.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      alt: "Open-plan loft living area with neutral furniture and high ceilings.",
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Manhattan, NY",
      summary: "A hospitality-inspired office balancing focus work, client hosting, and team flow.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern corporate office lounge with curated seating.",
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Miami, FL",
      summary: "Layered textures, custom joinery, and a dramatic arrival sequence for guests.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
      alt: "Boutique hospitality lounge with dramatic seating and ambient light.",
    },
    {
      title: "Penthouse Suite",
      category: "Residential",
      location: "Los Angeles, CA",
      summary: "Quiet luxury expressed through tactile finishes, artful contrast, and tailored storage.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      alt: "Bedroom suite with layered neutrals and minimalist styling.",
    },
    {
      title: "Tech Studio Workspace",
      category: "Commercial",
      location: "San Francisco, CA",
      summary: "Flexible collaboration zones with warm materials to counter the usual office sterility.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      alt: "Creative studio workspace with design boards and natural light.",
    },
    {
      title: "Chef's Table Dining Room",
      category: "Hospitality",
      location: "Chicago, IL",
      summary: "An intimate dining setting that uses tone, shadow, and contrast to heighten the experience.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      alt: "High-end dining space with a warm palette and polished surfaces.",
    },
  ] satisfies Project[],
  contact: {
    eyebrow: "Start a Project",
    title: "Tell us what the space needs to do, and what it should make people feel.",
    description:
      "Share the scale, timeline, and intent for your project. We will come back with the right next step instead of a generic reply.",
    serviceOptions: [
      "Interior Design",
      "Space Planning",
      "Furniture Selection",
      "Color Consultation",
      "Project Management",
    ],
    budgetRanges: [
      "Under $10,000",
      "$10,000 - $25,000",
      "$25,000 - $50,000",
      "$50,000 - $100,000",
      "$100,000+",
    ],
    projectTypes: ["Residential", "Commercial", "Hospitality", "Other"],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    assurances: [
      "A clear response within one business day",
      "A scope-first conversation, not a sales script",
      "Recommendations matched to budget and timeline realities",
    ],
  },
  footer: {
    blurb:
      "Interior design for spaces that need to perform beautifully and feel unmistakably their own.",
  },
};