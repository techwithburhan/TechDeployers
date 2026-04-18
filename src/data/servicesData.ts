import {
  BarChart3,
  Code2,
  Globe,
  Mail,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export type PricingPlan = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  features: string[];
  overview: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  idealFor: string[];
  technologies: string[];
  pricing: PricingPlan[];
};

export const servicesData: ServiceItem[] = [
  {
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    shortDescription:
      'We build high-performance, scalable, and secure websites using the latest technologies like React, Next.js, and Node.js. Our websites are designed to convert visitors into customers.',
    heroDescription:
      'Tailor-made websites engineered for speed, scalability, and business growth. From landing pages to enterprise platforms, we create digital experiences that look premium and perform flawlessly.',
    icon: Code2,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    features: ['Responsive Design', 'SEO Optimized', 'Speed Optimized', 'Custom UI/UX'],
    overview:
      'Our custom website development service is built for businesses that need more than a template. We design and develop modern, responsive websites aligned with your brand identity, user journey, and conversion goals. Every build focuses on performance, maintainability, and a smooth customer experience across devices.',
    benefits: [
      'Unique website tailored to your business goals and brand style',
      'Fast-loading pages with modern frontend architecture',
      'SEO-friendly structure for better search visibility',
      'Scalable codebase ready for future enhancements and integrations',
    ],
    deliverables: [
      'Custom UI/UX design implementation',
      'Responsive development for mobile, tablet, and desktop',
      'Contact forms, lead funnels, and call-to-action sections',
      'Performance optimization and technical SEO setup',
      'Deployment and launch support',
    ],
    process: [
      'Requirement gathering and business discovery',
      'Wireframes, design direction, and approval',
      'Frontend and backend development',
      'Testing, optimization, and revisions',
      'Deployment, monitoring, and post-launch support',
    ],
    idealFor: [
      'Startups launching a professional online presence',
      'Businesses replacing outdated websites',
      'Brands that need custom features or integrations',
      'Companies focused on conversions and long-term growth',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    pricing: [
      {
        name: 'Starter',
        price: '₹15,000',
        priceNote: 'one-time',
        description: 'Perfect for small businesses needing a clean, professional online presence.',
        features: [
          'Up to 5 custom pages',
          'Mobile responsive design',
          'Basic SEO setup',
          'Contact form integration',
          '1 round of revisions',
          '15 days delivery',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹35,000',
        priceNote: 'one-time',
        description: 'Ideal for growing businesses that need advanced functionality and design.',
        features: [
          'Up to 12 custom pages',
          'Advanced UI/UX design',
          'Complete SEO optimization',
          'CMS integration',
          'Blog setup',
          'Speed optimization',
          '3 rounds of revisions',
          '30 days delivery',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'Enterprise',
        price: '₹75,000+',
        priceNote: 'custom quote',
        description: 'Full-scale custom web platforms with advanced features and integrations.',
        features: [
          'Unlimited pages',
          'Custom web application',
          'API & third-party integrations',
          'Advanced security setup',
          'Database integration',
          'Admin dashboard',
          'Priority support',
          'Dedicated project manager',
        ],
        cta: 'Request Quote',
      },
    ],
  },
  {
    slug: 'wordpress-website',
    title: 'WordPress Website',
    shortDescription:
      'Get a professional and easy-to-manage WordPress website. We specialize in custom theme development, plugin integration, and website maintenance.',
    heroDescription:
      'Professional WordPress solutions that combine ease of content management with premium design, flexibility, and strong business performance.',
    icon: Globe,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    features: ['Easy Content Management', 'Custom Themes', 'Plugin Integration', 'E-commerce Ready'],
    overview:
      'We create WordPress websites that are visually polished, easy to manage, and built around your business needs. Whether you need a company profile website, blog, service portal, or WooCommerce store, we deliver WordPress solutions that empower your team to update content without technical complexity.',
    benefits: [
      'Simple dashboard for managing pages, blogs, and media',
      'Custom design instead of generic off-the-shelf templates',
      'Flexible plugin integrations for forms, SEO, payment, and more',
      'Secure and maintainable WordPress setup',
    ],
    deliverables: [
      'Custom WordPress theme setup or development',
      'Plugin configuration and third-party integrations',
      'Page builder or Gutenberg optimization',
      'Speed, security, and backup configuration',
      'Admin training and maintenance guidance',
    ],
    process: [
      'Business analysis and content planning',
      'Theme selection or custom design setup',
      'Development and plugin integration',
      'Content population and testing',
      'Launch and administrator handover',
    ],
    idealFor: [
      'Businesses that want easy self-management',
      'Content-heavy websites and blogs',
      'Service companies needing a quick but premium site',
      'WooCommerce stores and lead-generation websites',
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL', 'Yoast SEO'],
    pricing: [
      {
        name: 'Basic',
        price: '₹10,000',
        priceNote: 'one-time',
        description: 'A clean WordPress site for small businesses and personal brands.',
        features: [
          'Up to 5 pages',
          'Premium theme setup',
          'Mobile responsive',
          'Basic plugins setup',
          'Contact form',
          '10 days delivery',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹25,000',
        priceNote: 'one-time',
        description: 'Custom WordPress design with advanced features and SEO.',
        features: [
          'Up to 10 pages',
          'Custom theme design',
          'SEO optimization (Yoast)',
          'Blog & CMS setup',
          'Speed optimization',
          'Security hardening',
          '20 days delivery',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'WooCommerce',
        price: '₹50,000+',
        priceNote: 'custom quote',
        description: 'Complete e-commerce store with payment gateway and product management.',
        features: [
          'Unlimited products',
          'Custom WooCommerce setup',
          'Payment gateway integration',
          'Inventory management',
          'Order tracking system',
          'Shipping configuration',
          'Admin training',
          '30 days delivery',
        ],
        cta: 'Request Quote',
      },
    ],
  },
  {
    slug: 'android-application',
    title: 'Android Application',
    shortDescription:
      'Develop powerful and engaging Android applications that provide a seamless experience for your users on all Android devices.',
    heroDescription:
      'User-focused Android applications built for reliability, performance, and smooth experiences across smartphones and tablets.',
    icon: Smartphone,
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    features: ['Native & Hybrid Apps', 'Modern UI/UX', 'API Integration', 'App Store Submission'],
    overview:
      'Our Android application service helps businesses build mobile products that connect directly with users. We focus on clean interfaces, robust functionality, secure data handling, and scalable app architecture so your application is ready for both launch and long-term growth.',
    benefits: [
      'Mobile-first customer engagement and accessibility',
      'Smooth app performance with intuitive user flows',
      'Integration with APIs, payment systems, and notifications',
      'Support for publishing and maintaining your app',
    ],
    deliverables: [
      'Android app UI/UX implementation',
      'Authentication, dashboard, and feature workflows',
      'API and backend connectivity',
      'Play Store preparation and deployment support',
      'Bug fixing and post-launch iteration',
    ],
    process: [
      'Feature planning and app architecture',
      'Prototype and design approval',
      'Application development and API integration',
      'Testing on multiple Android devices',
      'Publishing and optimization updates',
    ],
    idealFor: [
      'Startups launching mobile products',
      'Businesses digitizing internal processes',
      'Brands that need booking, ordering, or service apps',
      'Companies wanting stronger mobile engagement',
    ],
    technologies: ['Kotlin', 'Java', 'Flutter', 'Firebase', 'REST APIs', 'Push Notifications'],
    pricing: [
      {
        name: 'MVP App',
        price: '₹40,000',
        priceNote: 'one-time',
        description: 'A minimum viable Android app to validate your business idea quickly.',
        features: [
          'Up to 5 screens',
          'Basic UI/UX design',
          'User authentication',
          'API integration (basic)',
          'Play Store submission',
          '30 days delivery',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹85,000',
        priceNote: 'one-time',
        description: 'Full-featured Android app with custom UI and backend integration.',
        features: [
          'Up to 12 screens',
          'Custom UI/UX design',
          'Authentication & profiles',
          'Database integration',
          'Push notifications',
          'Payment gateway',
          'Admin panel',
          '60 days delivery',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'Enterprise App',
        price: '₹2,00,000+',
        priceNote: 'custom quote',
        description: 'Complex enterprise-grade Android app with advanced architecture.',
        features: [
          'Unlimited screens',
          'Native + cross-platform',
          'Advanced backend system',
          'Real-time features',
          'Third-party integrations',
          'Analytics & reporting',
          'Dedicated team',
          'Maintenance support',
        ],
        cta: 'Request Quote',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription:
      'Drive more traffic and sales to your business with our data-driven digital marketing strategies, including SEO, SEM, and social media marketing.',
    heroDescription:
      'Growth-focused digital marketing strategies designed to improve visibility, generate leads, and turn traffic into revenue.',
    icon: BarChart3,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    features: ['SEO Optimization', 'PPC Management', 'Social Media Marketing', 'Content Strategy'],
    overview:
      'We help businesses reach the right audience through a combination of search engine optimization, paid campaigns, social media strategy, and content marketing. Every campaign is guided by data so you can make better decisions, improve ROI, and build long-term digital visibility.',
    benefits: [
      'Increased website traffic and better lead quality',
      'Improved brand visibility across search and social',
      'Data-backed campaign decisions and optimization',
      'Clear reporting and measurable performance growth',
    ],
    deliverables: [
      'SEO audit and on-page optimization',
      'Paid ad campaign strategy and management',
      'Social media planning and content direction',
      'Monthly reports with KPI tracking',
      'Conversion-focused landing page recommendations',
    ],
    process: [
      'Market and competitor analysis',
      'Channel strategy and campaign planning',
      'Execution across SEO, ads, and social media',
      'Monitoring, A/B testing, and optimization',
      'Monthly review and scaling plan',
    ],
    idealFor: [
      'Businesses wanting more leads and online visibility',
      'Brands launching new services or products',
      'Companies that need measurable marketing ROI',
      'Organizations competing in crowded digital markets',
    ],
    technologies: ['Google Ads', 'Meta Ads', 'SEO Tools', 'Google Analytics', 'Search Console', 'Content Strategy'],
    pricing: [
      {
        name: 'Starter',
        price: '₹8,000',
        priceNote: '/month',
        description: 'Essential digital marketing for small businesses starting their growth journey.',
        features: [
          'Basic SEO (10 keywords)',
          'Social media management (2 platforms)',
          '8 posts per month',
          'Monthly performance report',
          'Google Business Profile setup',
          'Email support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹20,000',
        priceNote: '/month',
        description: 'Comprehensive marketing strategy for businesses ready to scale.',
        features: [
          'Advanced SEO (25 keywords)',
          'Social media (4 platforms)',
          '20 posts per month',
          'Google Ads management',
          'Meta Ads management',
          'Content marketing',
          'Bi-weekly reporting',
          'Priority support',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'Enterprise',
        price: '₹45,000+',
        priceNote: '/month',
        description: 'Full-scale marketing campaigns with dedicated strategy and execution.',
        features: [
          'Enterprise SEO (50+ keywords)',
          'All social platforms',
          'Unlimited posts & creatives',
          'Multi-channel ad campaigns',
          'Influencer marketing',
          'Email marketing automation',
          'Weekly reports & calls',
          'Dedicated account manager',
        ],
        cta: 'Request Quote',
      },
    ],
  },
  {
    slug: 'business-email-setup',
    title: 'Business Email Setup',
    shortDescription:
      'Establish professional credibility with custom business email addresses (e.g., name@yourcompany.com) using secure and reliable email providers.',
    heroDescription:
      'Professional business email solutions that improve trust, communication, and brand credibility with secure and reliable delivery.',
    icon: Mail,
    color: 'bg-red-50',
    iconColor: 'text-red-600',
    features: ['Professional Identity', 'Secure Email Hosting', 'Spam Protection', 'Easy Setup'],
    overview:
      'A professional email address is essential for trust and brand consistency. We configure business email solutions for your domain using trusted platforms, ensuring secure access, mailbox setup, DNS configuration, and reliable delivery across your team and devices.',
    benefits: [
      'Improves trust and professional brand presentation',
      'Secures team communication with managed email platforms',
      'Supports multiple devices and team members',
      'Reduces spam and delivery issues with proper configuration',
    ],
    deliverables: [
      'Custom business email account setup',
      'Domain DNS configuration including MX, SPF, DKIM, and DMARC',
      'Webmail and device configuration guidance',
      'Mailbox organization and alias setup',
      'Support for Google Workspace or Microsoft 365 environments',
    ],
    process: [
      'Domain and provider review',
      'Mailbox planning for your team',
      'DNS and security record configuration',
      'Testing email delivery and authentication',
      'User onboarding and support handover',
    ],
    idealFor: [
      'New businesses creating a professional identity',
      'Growing teams needing branded communication',
      'Companies migrating from free email providers',
      'Organizations improving email security and deliverability',
    ],
    technologies: ['Google Workspace', 'Microsoft 365', 'DNS Records', 'SMTP', 'IMAP', 'Email Security'],
    pricing: [
      {
        name: 'Single Mailbox',
        price: '₹2,000',
        priceNote: 'setup + provider cost',
        description: 'Professional email setup for individuals and freelancers.',
        features: [
          '1 business email account',
          'Domain DNS configuration',
          'SPF, DKIM, DMARC setup',
          'Mobile & desktop setup',
          'Webmail access',
          '7 days support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹6,000',
        priceNote: 'setup + provider cost',
        description: 'Complete email solution for small teams and growing businesses.',
        features: [
          'Up to 10 mailboxes',
          'Google Workspace or M365',
          'Complete DNS configuration',
          'Email aliases & groups',
          'Calendar & drive setup',
          'Team training session',
          '30 days support',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'Enterprise',
        price: '₹15,000+',
        priceNote: 'custom quote',
        description: 'Large-scale email infrastructure for organizations and enterprises.',
        features: [
          'Unlimited mailboxes',
          'Advanced security policies',
          'Migration from old providers',
          'Email archiving & backup',
          'Anti-spam & anti-phishing',
          'SSO integration',
          '90 days support',
          'Priority assistance',
        ],
        cta: 'Request Quote',
      },
    ],
  },
  {
    slug: 'domain-hosting-setup',
    title: 'Domain Hosting Setup',
    shortDescription:
      'Secure your online presence with fast, reliable, and secure domain registration and hosting services tailored to your needs.',
    heroDescription:
      'Reliable domain and hosting setup services that give your business a secure, stable, and performance-ready foundation online.',
    icon: Server,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    features: ['Fast Loading Speeds', '99.9% Uptime', 'SSL Certificates', '24/7 Support'],
    overview:
      'We help you establish a strong technical foundation with the right domain, hosting, SSL, and server configuration. Whether you need shared hosting, VPS, or cloud deployment, we ensure your website is fast, secure, and ready to support your business operations.',
    benefits: [
      'Improves reliability and website availability',
      'Ensures your domain and DNS are configured correctly',
      'Strengthens website security with SSL and best practices',
      'Provides a scalable base for future business growth',
    ],
    deliverables: [
      'Domain connection and DNS setup',
      'Hosting account or server configuration',
      'SSL certificate installation',
      'Backup, uptime, and security baseline setup',
      'Website deployment and environment readiness',
    ],
    process: [
      'Domain and hosting requirement review',
      'Server or hosting environment setup',
      'DNS connection and SSL configuration',
      'Performance and security checks',
      'Launch verification and technical support',
    ],
    idealFor: [
      'Businesses launching their first website',
      'Companies moving to more reliable hosting',
      'Brands needing better speed and stability',
      'Projects requiring secure launch support',
    ],
    technologies: ['cPanel', 'Cloud Hosting', 'SSL', 'DNS', 'CDN', 'Server Security'],
    pricing: [
      {
        name: 'Shared Hosting',
        price: '₹3,500',
        priceNote: '/year',
        description: 'Affordable hosting for small websites and personal blogs.',
        features: [
          'Domain registration (.com)',
          '10 GB SSD storage',
          'Free SSL certificate',
          '5 email accounts',
          'Daily backups',
          '99.9% uptime',
          'cPanel access',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Option B',
        price: '₹8,500',
        priceNote: '/year',
        description: 'High-performance hosting for business websites and growing traffic.',
        features: [
          'Domain registration',
          '50 GB SSD storage',
          'Free SSL & CDN',
          'Unlimited email accounts',
          'Daily automated backups',
          'Free website migration',
          'Priority support',
          'Staging environment',
        ],
        highlighted: true,
        cta: 'Most Popular',
      },
      {
        name: 'Cloud / VPS',
        price: '₹18,000+',
        priceNote: '/year',
        description: 'Dedicated cloud or VPS hosting for high-traffic and enterprise sites.',
        features: [
          'Custom domain setup',
          'Dedicated resources',
          'Cloud server (AWS/DO/Azure)',
          'Premium SSL certificate',
          'Advanced security & firewall',
          'CDN integration',
          'Server monitoring 24/7',
          'Dedicated support',
        ],
        cta: 'Request Quote',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesData.find((service) => service.slug === slug);
