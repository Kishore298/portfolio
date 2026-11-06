// src/data/projects.js
// Portfolio Projects & Case Studies with Verified GitHub & Live Links
// Tailored for Junior Full-Stack Developer profile with concise descriptions for uniform cards.

export const PROJECTS = [
  // ===== 1. FLAGSHIP CASE STUDIES =====
  {
    id: 1,
    title: 'Fulupo — Quick-Commerce Grocery & Multi-Store POS Platform',
    slug: 'fulupo',
    badge: 'CASE STUDY',
    category: 'Backend Development',
    projectType: 'flagship',
    presentation: 'Multi-Store POS & Delivery Dispatch',
    domain: 'Backend Development · Quick Commerce · Retail POS · Payments',
    description: 'Cloud backend powering a quick-commerce grocery app and multi-store retail POS billing with real-time inventory guard.',
    longDescription: 'Fulupo is a cloud-based backend system connecting online grocery ordering with offline retail store operations. Built payment processing, concurrent inventory checks, store-level data access, WebSocket delivery dispatch, and automated settlement cron jobs.',
    icon: '⚡',
    color: '#00f3ff', // Electric cyan
    colorDim: 'rgba(0, 243, 255, 0.2)',
    stats: {
      metric: 'POS & Order Dispatch',
      perf: 'Concurrent Inventory Guard',
    },
    deployment: 'Cloud Backend Infrastructure & AWS S3 Object Storage',
    architecture: {
      type: 'Multi-Store POS & Backend Services',
      summary: 'Express 5 backend handling online orders, offline retail POS checkout, WebSockets delivery dispatch, and background cron jobs.',
    },
    modules: [
      {
        title: 'POS Billing and Payment Processing',
        points: [
          'Developed POS billing APIs supporting both cash transactions and online UPI payments.',
          'Integrated Cashfree dynamic QR code payments for offline retail counter checkouts.',
          'Handled payment status workflows for successful, pending, and failed states.',
          'Connected payment processing with customer billing and receipt flows.',
        ],
      },
      {
        title: 'Inventory Management & Overselling Prevention',
        points: [
          'Built an inventory guard check to prevent overselling across online and offline channels.',
          'Synchronized stock availability across online grocery orders and offline store counters.',
          'Added atomic stock deduction checks to maintain inventory accuracy during simultaneous orders.',
        ],
      },
      {
        title: 'Cashfree Payment Webhook Integration',
        points: [
          'Integrated Cashfree payment webhooks into backend routes.',
          'Implemented secure webhook signature verification using cryptographic HMAC-SHA256.',
          'Handled asynchronous payment events to ensure consistent transaction records.',
        ],
      },
      {
        title: 'Multi-Store Data Access Control',
        points: [
          'Implemented store-level data access restrictions across queries.',
          'Ensured cashiers and store admins can only view and update data for their assigned store.',
          'Developed backend access logic supporting multi-store operations.',
        ],
      },
      {
        title: 'Real-Time Delivery Dispatch',
        points: [
          'Implemented real-time delivery order dispatch using WebSockets (Socket.IO).',
          'Integrated Firebase Admin SDK push notifications to alert nearby delivery partners for open orders.',
        ],
      },
      {
        title: 'Automated Financial Operations',
        points: [
          'Created scheduled background cron jobs (Node-Cron) for daily store settlements.',
          'Calculated merchant commissions and automated recovery workflows for pending payments.',
        ],
      },
      {
        title: 'Customer-Side APIs & Loyalty Systems',
        points: [
          'Developed customer-facing REST APIs for browsing and order placement.',
          'Built store-wise credit management and loyalty point calculations during checkout.',
        ],
      },
    ],
    features: [
      'POS billing APIs supporting Cash and UPI with Cashfree dynamic QR codes',
      'Inventory guard check preventing overselling between online cart and store counter',
      'Cryptographically verified Cashfree webhook listener with signature validation',
      'Store-level access control ensuring cashiers access only authorized store records',
      'Real-time WebSocket dispatch engine integrated with Firebase push notifications',
      'Automated daily store settlement background jobs using Node-Cron',
    ],
    tech: [
      'Node.js',
      'Express.js 5',
      'MongoDB',
      'Mongoose',
      'Redis',
      'Socket.IO',
      'Cashfree Gateway',
      'Firebase Admin SDK',
      'AWS S3',
      'Node-Cron',
      'JWT',
    ],
    techCategories: {
      'Runtime & Backend': ['Node.js', 'Express.js 5', 'Bottleneck'],
      'Database & Cache': ['MongoDB', 'Mongoose', 'Redis', 'ioredis'],
      'Real-Time & Push': ['Socket.IO', 'WebSockets', 'Firebase Admin SDK'],
      'Payments & Billing': ['Cashfree Payment Gateway', 'QRCode Generator'],
      'Cloud & Storage': ['AWS S3', 'Multer S3'],
      'Security & Workers': ['JWT', 'bcryptjs', 'Crypto', 'Node-Cron'],
    },
    url: 'https://fulupo.ai',
    github: 'https://github.com/doubletapinnovations/fulupo-backend',
    githubPrivate: true,
  },

  {
    id: 2,
    title: 'Infysec — Enterprise CRM & EdTech Management Platform',
    slug: 'infysec',
    badge: 'CASE STUDY',
    category: 'Full-Stack CRM',
    projectType: 'flagship',
    presentation: 'CRM Dashboard + Lead Pipeline + Cloud Telephony',
    domain: 'Full-Stack Development · CRM · Cloud Telephony · Payment Integration',
    description: 'Full-stack enterprise CRM platform featuring multi-channel lead funnels, Exotel cloud telephony, and Cashfree payments.',
    longDescription: 'Infysec is an enterprise CRM and educational management platform built for a cybersecurity training organization. Centralizes lead management, Kanban sales pipelines, Exotel cloud telephony call-tracking, Cashfree billing with GST invoice generation, and student course management.',
    icon: '🛡️',
    color: '#a855f7', // Vibrant violet
    colorDim: 'rgba(168, 85, 247, 0.2)',
    stats: {
      metric: 'Exotel Telephony & Leads',
      perf: 'Automated Invoicing & GST',
    },
    deployment: 'Collaborated with DevOps team for application deployment and production verification',
    devopsNote: 'Docker configuration, Jenkins pipelines, and CI/CD implementation were handled by the dedicated DevOps team. Kishore collaborated directly with the DevOps team for application deployment and production verification.',
    architecture: {
      type: 'Full-Stack CRM Development',
      summary: 'React 19 single-page application with Redux Toolkit coupled to an Express 5 REST API, Exotel webhook ingestion, and Cashfree payment integration.',
    },
    modules: [
      {
        title: 'Lead Management & CRM Sales Workflows',
        points: [
          'Developed lead management modules to organize leads from multiple acquisition channels.',
          'Built responsive Kanban and table-based lead management views with quick status updates.',
          'Implemented lead assignment, reassignment, deduplication, and follow-up scheduling.',
        ],
      },
      {
        title: 'Exotel Cloud Telephony Integration',
        points: [
          'Integrated Exotel cloud telephony webhooks into the CRM for live call logging.',
          'Associated calls with existing leads to prevent duplicate records.',
          'Added call recording playback with React H5 Audio Player and FFmpeg audio conversion.',
        ],
      },
      {
        title: 'Cashfree Payment Integration & GST Billing',
        points: [
          'Integrated Cashfree checkout for cybersecurity courses and certification vouchers.',
          'Implemented secure webhook verification for real-time payment confirmation.',
          'Developed GST calculation logic and automated PDF invoice generation.',
        ],
      },
      {
        title: 'Course & Bootcamp Management',
        points: [
          'Built course catalog and bootcamp curriculum administration screens.',
          'Developed voucher management functionality and student enrollment views.',
        ],
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        points: [
          'Implemented role-based access control across sales agents, counselors, and admins.',
          'Protected sensitive lead data through permission-based field authorization.',
        ],
      },
      {
        title: 'Background Jobs & Automation',
        points: [
          'Developed scheduled background jobs using Node-Cron for periodic tasks.',
          'Built automated weekly lead export to Excel/CSV with email dispatch via Nodemailer.',
        ],
      },
    ],
    features: [
      'Interactive Kanban lead pipeline with automated lead ingestion and assignment',
      'Real-time Exotel cloud telephony integration with call recording playback',
      'Cashfree payment gateway integration with webhooks and automated GST invoicing',
      'Course, bootcamp, and examination voucher management modules',
      'Role-based access control (RBAC) with team activity tracking',
      'Automated background jobs (Node-Cron) for weekly CSV/Excel reports',
      'Collaborated with DevOps team for Docker container deployment',
    ],
    tech: [
      'React 19',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js 5',
      'MongoDB',
      'Mongoose',
      'Cashfree',
      'Exotel Telephony',
      'AWS S3',
      'FFmpeg',
      'Node-Cron',
    ],
    techCategories: {
      'Frontend & UI': ['React 19', 'Redux Toolkit', 'Tailwind CSS', 'React Router'],
      'Backend & APIs': ['Node.js', 'Express.js 5', 'REST APIs', 'Axios'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Telephony & Audio': ['Exotel Cloud Telephony', 'FFmpeg', 'React H5 Audio Player'],
      'Payments & Billing': ['Cashfree Gateway', 'PDFKit Invoicing', 'GST Calculations'],
      'Automation & Cloud': ['Node-Cron', 'AWS S3', 'ExcelJS', 'Nodemailer'],
    },
    url: 'https://infysec.org',
    github: 'https://github.com/doubletapinnovations/infysec-backend',
    githubPrivate: true,
  },

  // ===== 2. FREELANCE PRODUCTION E-COMMERCE PLATFORMS =====
  // Shared Setup:
  // - Customer Panel: Customer-facing storefront
  // - Admin Panel: Separate management dashboard
  // - Unified Backend: Single Express/Node backend serving both apps via REST APIs
  // - Database: MongoDB
  // - Deployment: Production cPanel deployment, MilesWeb domain configuration & hosting
  {
    id: 3,
    title: 'V Crackers — E-commerce Platform',
    slug: 'v-crackers',
    badge: 'FREELANCE',
    category: 'Freelance E-Commerce',
    projectType: 'freelance',
    presentation: 'Storefront + Product Catalogue',
    domain: 'E-commerce Storefront · Admin Panel · Unified Backend',
    description: 'Full-stack seasonal e-commerce platform with customer storefront and separate admin panel deployed via cPanel.',
    longDescription: 'Developed an online e-commerce platform for V Crackers, providing customers with a dedicated shopping interface to explore products and place orders. Includes a separate admin application for managing products, categories, pricing, and orders, connected to a unified Express.js backend and MongoDB database deployed via cPanel on MilesWeb hosting.',
    icon: '🎆',
    color: '#ec4899', // Vibrant magenta
    colorDim: 'rgba(236, 72, 153, 0.2)',
    stats: {
      metric: 'Storefront + Admin Panel',
      perf: 'cPanel & MilesWeb Deployed',
    },
    deployment: 'cPanel production server deployment, MilesWeb domain configuration, and DNS setup',
    architecture: {
      type: 'Dual-Application Setup + Unified Backend',
      summary: 'Dedicated Customer Storefront and separate Admin Dashboard connected to a single Express REST API backend and MongoDB database.',
    },
    modules: [
      {
        title: 'Customer-Facing Storefront',
        points: [
          'Developed a customer storefront with product listings and category navigation.',
          'Built product browsing and intuitive shopping workflows.',
          'Created responsive, mobile-friendly layouts across devices.',
        ],
      },
      {
        title: 'Independent Administrative Panel',
        points: [
          'Built a separate admin panel to manage products, categories, and pricing.',
          'Added incoming order review and customer order lifecycle tracking.',
        ],
      },
      {
        title: 'Unified Backend & MongoDB',
        points: [
          'Connected customer and admin frontends through a shared Express.js REST API.',
          'Structured product, category, and order data in MongoDB with Mongoose.',
          'Implemented authentication with JWT and bcrypt password hashing.',
        ],
      },
      {
        title: 'Production Hosting Deployment',
        points: [
          'Managed cPanel production deployment, file structures, and MilesWeb hosting.',
          'Configured custom domain routing, DNS records, and SSL certificates.',
        ],
      },
    ],
    features: [
      'Customer-facing storefront with category-based navigation and order placement',
      'Separate admin panel for managing products, categories, pricing, and orders',
      'Unified Express.js backend providing REST APIs to both frontend applications',
      'MongoDB database with Mongoose models for product and order management',
      'Secure admin authentication using JWT tokens and bcrypt encryption',
      'Responsive UI built with React.js and modern Tailwind CSS',
      'Production deployment configured via cPanel with MilesWeb domain setup',
    ],
    tech: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Axios',
      'JWT',
      'bcrypt',
      'cPanel / MilesWeb',
    ],
    techCategories: {
      'Frontend (Storefront & Admin)': ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Auth & Security': ['JWT', 'bcrypt'],
      'Hosting & Deployment': ['cPanel Deployment', 'MilesWeb Hosting', 'Domain & DNS Setup'],
    },
    url: 'https://vcrackers.in',
    github: 'https://github.com/Kishore298/crackers-mern',
    githubPrivate: false,
  },

  {
    id: 4,
    title: 'Leo Crackers — Online Shopping & Order Management Platform',
    slug: 'leo-crackers',
    badge: 'FREELANCE',
    category: 'Freelance E-Commerce',
    projectType: 'freelance',
    presentation: 'Shopping Interface + Order Management',
    domain: 'Online Shopping · Order Management · Dual-App Setup',
    description: 'Online shopping and order management platform with dual customer and admin interfaces built with MERN stack.',
    longDescription: 'Built an e-commerce platform for Leo Crackers, focusing on creating a smooth shopping experience while providing administrators with a dedicated interface to manage store operations. Synchronized REST APIs connect both applications to a centralized MongoDB database, deployed on MilesWeb.',
    icon: '🛒',
    color: '#3b82f6', // Neon blue
    colorDim: 'rgba(59, 130, 246, 0.2)',
    stats: {
      metric: 'Order Lifecycle Sync',
      perf: 'cPanel & MilesWeb Deployed',
    },
    deployment: 'cPanel production server deployment, MilesWeb domain configuration, and DNS setup',
    architecture: {
      type: 'Dual-Application Setup + Unified Backend',
      summary: 'Customer shopping application and dedicated admin management dashboard talking to one shared Node.js/Express backend with MongoDB.',
    },
    modules: [
      {
        title: 'Customer Shopping Interface',
        points: [
          'Developed the customer application for browsing the available product catalogue.',
          'Implemented category-based product organization for easy discovery.',
          'Built shopping cart and checkout request interfaces.',
        ],
      },
      {
        title: 'Administrative Order Management',
        points: [
          'Created a dedicated administrative application for managing the online store.',
          'Implemented authentication and protected access to admin functionality.',
          'Designed reusable frontend components to maintain UI consistency.',
        ],
      },
      {
        title: 'Synchronized Backend APIs',
        points: [
          'Developed backend APIs to synchronize product and order information between both apps.',
          'Integrated frontend applications with a centralized MongoDB database.',
        ],
      },
      {
        title: 'Production Deployment',
        points: [
          'Handled deployment via cPanel and configured MilesWeb domain hosting.',
        ],
      },
    ],
    features: [
      'Customer application for exploring catalog items with category navigation',
      'Dedicated admin panel for order management, pricing updates, and inventory tracking',
      'Unified Express.js backend with synchronized REST APIs connecting both applications',
      'Centralized MongoDB database management with optimized query handling',
      'Protected admin routes using JWT authentication and encrypted session tokens',
      'Reusable modular React components styled with modern Tailwind CSS',
      'Production deployment and hosting management via cPanel and MilesWeb',
    ],
    tech: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Axios',
      'JWT',
      'bcrypt',
      'cPanel / MilesWeb',
    ],
    techCategories: {
      'Frontend (Storefront & Admin)': ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Auth & Security': ['JWT', 'bcrypt'],
      'Hosting & Deployment': ['cPanel Deployment', 'MilesWeb Hosting', 'Domain & DNS Setup'],
    },
    url: 'https://leocrackers.com',
    github: 'https://github.com/Kishore298/leo-crackers',
    githubPrivate: false,
  },

  {
    id: 5,
    title: 'Paapi Crackers — Product Catalogue & E-commerce Management',
    slug: 'paapi-crackers',
    badge: 'FREELANCE',
    category: 'Freelance E-Commerce',
    projectType: 'freelance',
    presentation: 'Product Catalogue + Admin Management',
    domain: 'Product Catalogue · Admin Management · Centralized Backend',
    description: 'Product catalogue and shopping platform with independent admin dashboard for pricing and stock management.',
    longDescription: 'Developed a full-stack e-commerce platform for Paapi Crackers, combining a customer shopping experience with an independent administration interface. Centralizes product catalogue details, categories, pricing, and store management through a shared Express.js backend deployed on MilesWeb.',
    icon: '📦',
    color: '#10b981', // Emerald neon
    colorDim: 'rgba(16, 185, 129, 0.2)',
    stats: {
      metric: 'Product Taxonomy Engine',
      perf: 'cPanel & MilesWeb Deployed',
    },
    deployment: 'cPanel production server deployment, MilesWeb domain configuration, and DNS setup',
    architecture: {
      type: 'Dual-Application Setup + Unified Backend',
      summary: 'Two distinct client interfaces (Customer Web App and Admin Dashboard) communicating with a unified Express API backed by MongoDB.',
    },
    modules: [
      {
        title: 'Customer Product Catalogue',
        points: [
          'Developed customer-facing product catalogue with item filtering and pricing displays.',
          'Built shopping cart and checkout order placement workflows.',
          'Focused on responsive mobile design for smooth festival shopping.',
        ],
      },
      {
        title: 'Independent Admin Management',
        points: [
          'Built administrative functionality for maintaining product details and price lists.',
          'Implemented category hierarchy management and stock availability toggles.',
        ],
      },
      {
        title: 'Centralized Infrastructure',
        points: [
          'Connected customer and admin panels to the same backend infrastructure.',
          'Implemented database operations for maintaining data integrity with MongoDB.',
        ],
      },
      {
        title: 'Hosting & Deployment',
        points: [
          'Executed production deployment using cPanel and MilesWeb domain hosting.',
        ],
      },
    ],
    features: [
      'Customer-facing product catalogue with instant category filtering and price breakdown',
      'Independent admin dashboard for product creation, category updates, and order handling',
      'Shared Express.js REST API providing consistent data contracts across both web clients',
      'Centralized MongoDB database management ensuring reliable data storage',
      'Secure administrative authentication with JWT tokens and bcrypt password hashing',
      'Mobile-first responsive design ensuring seamless shopping across all viewports',
      'Production deployment and domain setup executed via cPanel and MilesWeb',
    ],
    tech: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Axios',
      'JWT',
      'bcrypt',
      'cPanel / MilesWeb',
    ],
    techCategories: {
      'Frontend (Storefront & Admin)': ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Auth & Security': ['JWT', 'bcrypt'],
      'Hosting & Deployment': ['cPanel Deployment', 'MilesWeb Hosting', 'Domain & DNS Setup'],
    },
    url: 'https://paapicrackers.com',
    github: 'https://github.com/Kishore298/paapi-crackers',
    githubPrivate: false,
  },

  {
    id: 6,
    title: "Muthu's Petals — Online Retail E-commerce Platform",
    slug: 'muthus-petals',
    badge: 'FREELANCE',
    category: 'Freelance E-Commerce',
    projectType: 'freelance',
    presentation: 'Retail Storefront + Product Presentation',
    domain: 'Retail Storefront · Product Presentation · Centralized Data',
    description: 'Retail e-commerce storefront with categorized collections, product catalogue presentation, and dedicated admin panel.',
    longDescription: "Created an online retail platform for Muthu's Petals, providing a digital storefront for customers alongside a dedicated administration system. Uses a unified backend to connect both applications and centralize store inventory, customer orders, and product presentation on MilesWeb.",
    icon: '🌸',
    color: '#f43f5e', // Rose neon
    colorDim: 'rgba(244, 63, 94, 0.2)',
    stats: {
      metric: 'Retail Product Showcase',
      perf: 'cPanel & MilesWeb Deployed',
    },
    deployment: 'cPanel production server deployment, MilesWeb domain configuration, and DNS setup',
    architecture: {
      type: 'Dual-Application Setup + Unified Backend',
      summary: 'Public customer storefront paired with an independent administrator dashboard communicating over REST APIs to a shared Express server and MongoDB.',
    },
    modules: [
      {
        title: 'Customer-Facing Retail Website',
        points: [
          'Developed customer website with a structured product browsing experience.',
          'Created product presentation interfaces with categorized collections.',
          'Built shopping and order placement flows optimized for visual clarity.',
        ],
      },
      {
        title: 'Catalogue Administration Panel',
        points: [
          'Built separate admin panel for managing catalogue information and stock visibility.',
          'Implemented controls for updating retail pricing, discounts, and item specifications.',
        ],
      },
      {
        title: 'Unified Backend & MongoDB',
        points: [
          'Implemented backend APIs for data exchange between customer and admin apps.',
          'Integrated MongoDB for centralized data storage and retrieval.',
        ],
      },
      {
        title: 'Deployment & Setup',
        points: [
          'Configured production hosting on cPanel and mapped custom MilesWeb domain with SSL.',
        ],
      },
    ],
    features: [
      'Customer-facing retail storefront with high-clarity product presentation and category filtering',
      'Separate admin portal for managing catalogue listings, product descriptions, and pricing',
      'Unified Express REST API connecting both storefront and administrative clients',
      'Centralized MongoDB database management with Mongoose schemas for products and orders',
      'JWT-authenticated administrator portal with password protection via bcrypt',
      'Responsive, component-driven UI built with React.js and modern Tailwind CSS',
      'Production deployment managed via cPanel with custom MilesWeb domain and DNS setup',
    ],
    tech: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Axios',
      'JWT',
      'bcrypt',
      'cPanel / MilesWeb',
    ],
    techCategories: {
      'Frontend (Storefront & Admin)': ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Auth & Security': ['JWT', 'bcrypt'],
      'Hosting & Deployment': ['cPanel Deployment', 'MilesWeb Hosting', 'Domain & DNS Setup'],
    },
    url: 'https://muthuspetals.com',
    github: 'https://github.com/Kishore298/muthus-petals',
    githubPrivate: false,
  },

  {
    id: 7,
    title: 'Pretty Glitz — Fashion Accessories E-commerce Platform',
    slug: 'pretty-glitz',
    badge: 'FREELANCE',
    category: 'Freelance E-Commerce',
    projectType: 'freelance',
    presentation: 'Fashion Accessories Storefront + Catalogue',
    domain: 'Fashion Storefront · Accessories Catalogue · Admin Dashboard',
    description: 'Fashion accessories online storefront with category navigation and independent store management admin panel.',
    longDescription: 'Developed an e-commerce platform for Pretty Glitz, focused on presenting fashion accessories through an online storefront supported by a dedicated administrative application. Provides a unified backend to manage product variations, inventory, pricing, and orders across both apps, hosted on MilesWeb via cPanel.',
    icon: '✨',
    color: '#eab308', // Amber gold neon
    colorDim: 'rgba(234, 179, 8, 0.2)',
    stats: {
      metric: 'Fashion Accessories Grid',
      perf: 'cPanel & MilesWeb Deployed',
    },
    deployment: 'cPanel production server deployment, MilesWeb domain configuration, and DNS setup',
    architecture: {
      type: 'Dual-Application Setup + Unified Backend',
      summary: 'Fashion accessories storefront and dedicated store management application served by a unified Express API and MongoDB database.',
    },
    modules: [
      {
        title: 'Customer-Facing Fashion Storefront',
        points: [
          'Developed storefront for displaying and exploring fashion accessory products.',
          'Implemented product catalogue and category-based navigation for rapid browsing.',
          'Designed visually appealing product showcase cards and mobile-friendly ordering.',
        ],
      },
      {
        title: 'Independent Admin Dashboard',
        points: [
          'Built an independent admin panel for managing product information and pricing.',
          'Enabled store administrators to review incoming customer orders and adjust item statuses.',
        ],
      },
      {
        title: 'Unified Backend',
        points: [
          'Developed REST APIs to connect both frontend applications with the backend.',
          'Implemented centralized database operations using MongoDB and Mongoose.',
        ],
      },
      {
        title: 'Deployment & Setup',
        points: [
          'Executed production deployment using cPanel and configured MilesWeb domain routing.',
        ],
      },
    ],
    features: [
      'Customer-facing fashion accessories storefront with category navigation and quick ordering',
      'Independent admin dashboard for managing product collections, prices, and customer orders',
      'Unified Express.js backend delivering consistent RESTful APIs to both frontends',
      'Centralized MongoDB database management with Mongoose ODM for reliable order records',
      'Secure authentication with JWT and bcrypt password encryption for administrative users',
      'Reusable component structure built with React.js, JavaScript, and Tailwind CSS',
      'Production deployment configured via cPanel and MilesWeb domain hosting infrastructure',
    ],
    tech: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Axios',
      'JWT',
      'bcrypt',
      'cPanel / MilesWeb',
    ],
    techCategories: {
      'Frontend (Storefront & Admin)': ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs'],
      'Database': ['MongoDB', 'Mongoose ODM'],
      'Auth & Security': ['JWT', 'bcrypt'],
      'Hosting & Deployment': ['cPanel Deployment', 'MilesWeb Hosting', 'Domain & DNS Setup'],
    },
    url: 'https://pretty-glitz-z22x.vercel.app/',
    github: 'https://github.com/Kishore298/pretty-glitz',
    githubPrivate: false,
  },
];

// Professional Identity Roles for Showcase & Hero
export const IDENTITY_ROLES = [
  {
    id: 'fullstack',
    title: 'FULL-STACK DEVELOPER',
    tagline: 'From frontend interfaces to backend systems.',
    accent: '#00f3ff',
    icon: '⚡',
    description: 'Building cohesive web products with React frontends, Node.js/Express APIs, and MongoDB databases.',
  },
  {
    id: 'backend',
    title: 'BACKEND DEVELOPMENT',
    tagline: 'APIs, payments, real-time WebSockets & background tasks.',
    accent: '#3b82f6',
    icon: '🛡️',
    description: 'Building POS billing endpoints, Cashfree QR payment workflows, Exotel telephony integrations, inventory guard checks, and background cron jobs.',
  },
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    tagline: 'Creating responsive, interactive, and clean user experiences.',
    accent: '#ec4899',
    icon: '🎨',
    description: 'Developing responsive customer storefronts, Kanban sales pipelines, and administrative management portals using React, Redux Toolkit, and Tailwind CSS.',
  },
  {
    id: 'freelance-arch',
    title: 'DUAL-APP E-COMMERCE SETUP',
    tagline: 'Storefront + Admin Panel unified by Express & MongoDB.',
    accent: '#10b981',
    icon: '🛍️',
    description: 'Building dual-panel web applications: customer shopping interfaces and independent administrative dashboards sharing a unified backend, deployed via cPanel & MilesWeb.',
  },
  {
    id: 'devops-collab',
    title: 'DEPLOYMENT & HOSTING',
    tagline: 'cPanel server hosting, MilesWeb domain setup & DevOps collaboration.',
    accent: '#a855f7',
    icon: '🚀',
    description: 'Hands-on hosting and domain routing via cPanel / MilesWeb for freelance projects, and collaborating with DevOps teams for Docker & pipeline delivery.',
  },
];

// Technology Network & Dataflow Pipeline
export const TECH_DATAFLOW = [
  { step: 1, node: 'Customer Storefront / CRM UI', role: 'React 19 · Tailwind CSS · Redux Toolkit', tag: 'UI LAYER', color: '#00f3ff' },
  { step: 2, node: 'API Gateway & Authentication', role: 'Express 5 · JWT · REST Endpoints', tag: 'REST API', color: '#ec4899' },
  { step: 3, node: 'Business Logic & Services', role: 'Inventory Guard · HMAC Webhooks', tag: 'SERVICES', color: '#3b82f6' },
  { step: 4, node: 'Telephony & Live Dispatch', role: 'Exotel Telephony · Cashfree · Socket.IO', tag: 'REAL-TIME', color: '#facc15' },
  { step: 5, node: 'Data Persistence & Caching', role: 'MongoDB Atlas · Mongoose · Redis', tag: 'DATABASE', color: '#a855f7' },
  { step: 6, node: 'Production Hosting & Deploy', role: 'cPanel · MilesWeb · DevOps Delivery', tag: 'HOSTED', color: '#10b981' },
];

export const SKILLS = {
  'Backend Development': [
    'Node.js',
    'Express.js 5',
    'RESTful APIs',
    'WebSockets (Socket.IO)',
    'Redis & ioredis',
    'Node-Cron Background Jobs',
    'Inventory Guard Checks',
    'JWT & bcrypt Authentication',
  ],
  'Frontend & UI': [
    'React 19 / React.js',
    'Redux Toolkit',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'React Router',
    'Kanban Pipelines',
    'HTML5 & Modern CSS3',
    'Framer Motion',
  ],
  'Database & Cloud Storage': [
    'MongoDB',
    'Mongoose ODM',
    'Schema Design',
    'Aggregation Pipelines',
    'AWS S3 & Multer S3',
    'Store-Level Access Control',
  ],
  'Integrations & Services': [
    'Cashfree Payment Gateway & Webhooks',
    'Exotel Cloud Telephony & Webhooks',
    'Firebase Admin SDK (Push Notifications)',
    'FFmpeg Audio Conversion',
    'Nodemailer & Email Reports',
    'ExcelJS / PDFKit Exporting',
  ],
  'Hosting, Deployment & Tools': [
    'cPanel Server Deployment',
    'MilesWeb Domain & DNS Configuration',
    'Git & GitHub Version Control',
    'Postman API Testing',
    'DevOps Collaboration (Docker / CI-CD Delivery)',
    'Vite & Build Tools',
  ],
};