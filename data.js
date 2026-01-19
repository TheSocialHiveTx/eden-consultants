// Data constants for Eden Consultants website

const SERVICES = [
  {
    id: 'feasibility',
    title: 'Feasibility & Site Selection',
    description: 'Critical early-stage evaluation to ensure your project is viable before significant capital is committed.',
    includes: [
      'Site constraints review (utilities, access, grading, drainage)',
      'High-level due diligence checklists',
      'Go/no-go decision support'
    ],
    deliverables: ['Feasibility notes', 'Risk list', 'Recommended next steps']
  },
  {
    id: 'entitlements',
    title: 'Entitlements & Permitting Strategy',
    description: 'Navigating complex municipal approvals and permitting roadmaps with precision.',
    includes: [
      'Identify approvals needed by location',
      'Coordination plan with civil/architect/municipality',
      'Timeline risk identification'
    ],
    deliverables: ['Permitting roadmap', 'Milestone timeline']
  },
  {
    id: 'coordination',
    title: 'Consultant Team Coordination',
    description: 'Acting as the central hub to align architects, engineers, and owners.',
    includes: [
      'Align architect/civil/MEP priorities',
      'Scope gap identification',
      'Meeting facilitation and decision logs'
    ],
    deliverables: ['Meeting notes', 'Action tracker']
  },
  {
    id: 'budget-schedule',
    title: 'Budget & Schedule Advisory',
    description: 'Providing realism in planning through ROM (Rough Order of Magnitude) guidance.',
    includes: [
      'Early budgeting guidance',
      'Phasing strategy for active sites',
      'Schedule logic review'
    ],
    deliverables: ['Budget assumptions', 'Schedule review notes']
  }
];

const INDUSTRIES = [
  {
    id: 'Shopping Center',
    label: 'Shopping Centers',
    icon: '🛒',
    description: 'Large-scale commercial developments requiring complex site planning.',
    focusPoints: ['Tenant mix phasing', 'Civil/site constraints', 'Utility coordination']
  },
  {
    id: 'QSR',
    label: 'Fast Food / QSR',
    icon: '🍔',
    description: 'High-velocity sites where traffic flow and drive-thru efficiency are paramount.',
    focusPoints: ['Drive-thru stacking', 'High-impact scheduling', 'Brand standards']
  },
  {
    id: 'Restaurant',
    label: 'Restaurants',
    icon: '🍽️',
    description: 'Complex utility requirements and intense permitting needs.',
    focusPoints: ['MEP intensity', 'Grease/waste permitting', 'Opening alignment']
  },
  {
    id: 'Office Condo',
    label: 'Office Condos',
    icon: '🏢',
    description: 'Professional workspace developments with repeatable unit strategies.',
    focusPoints: ['Condo docs coordination', 'Common area planning', 'Unit repeatability']
  },
  {
    id: 'Medical Condo',
    label: 'Medical Condos',
    icon: '🏥',
    description: 'Specialized healthcare environments requiring high technical oversight.',
    focusPoints: ['TI readiness', 'MEP flexibility', 'Schedule risk reduction']
  }
];

const CASE_STUDIES = [
  {
    slug: 'representative-qsr-site-feasibility',
    title: 'Representative QSR Site Feasibility',
    subtitle: 'De-risking sites before capital is committed',
    industry: 'QSR',
    location: 'TBD',
    year: '2025',
    imageUrl: 'https://picsum.photos/seed/qsr/800/600',
    overview: 'We provide early-stage feasibility and entitlement guidance for quick-service restaurant developments, helping teams identify fatal flaws before design dollars are spent. Our approach evaluates site constraints, utility capacity, access, permitting risk, and jurisdictional hurdles—so decisions are made with clarity, not assumptions.',
    what_we_did: [
      'Evaluated site constraints and utility capacity',
      'Assessed access and permitting risks',
      'Identified jurisdictional hurdles',
      'Provided early-stage entitlement guidance'
    ],
    outcomes: [
      'Faster go/no-go decisions',
      'Reduced redesign risk',
      'Stronger confidence moving into acquisition'
    ],
    timeline: '2–3 weeks',
    tags: ['feasibility', 'permitting', 'risk reduction']
  },
  {
    slug: 'medical-condo-utility-alignment',
    title: 'Medical Condo Utility Alignment',
    subtitle: 'Coordinating complex systems for healthcare tenants',
    industry: 'Medical Condo',
    location: 'TBD',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/medical/800/600',
    overview: 'Medical condo developments require precise alignment of utilities, MEP systems, and tenant requirements. We coordinate early with design teams, ownership, and providers to ensure infrastructure supports medical use without costly downstream modifications. Our process anticipates tenant improvement needs, future flexibility, and compliance considerations.',
    what_we_did: [
      'Coordinated with design teams and ownership',
      'Aligned MEP systems with tenant requirements',
      'Anticipated future flexibility needs',
      'Ensured compliance considerations'
    ],
    outcomes: [
      'Fewer change orders',
      'Smoother tenant build-outs',
      'Infrastructure that supports long-term value'
    ],
    tags: ['MEP', 'coordination', 'medical']
  },
  {
    slug: 'shopping-center-redevelopment-study',
    title: 'Shopping Center Phasing Strategy',
    subtitle: 'Redeveloping without disrupting revenue',
    industry: 'Shopping Center',
    location: 'TBD',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/shopping/800/600',
    overview: 'Redeveloping an active shopping center demands strategic phasing that protects tenants while advancing construction. We analyze site logistics, tenant operations, utilities, and access to develop phased plans that maintain continuity and minimize disruption. Our strategies balance speed, cost control, and tenant retention.',
    what_we_did: [
      'Analyzed site logistics and tenant operations',
      'Developed phased construction plans',
      'Maintained utility and access continuity',
      'Balanced speed with tenant retention'
    ],
    outcomes: [
      'Preserved cash flow',
      'Reduced tenant conflict',
      'Executable redevelopment plans'
    ],
    tags: ['phasing', 'logistics', 'redevelopment']
  }
];
