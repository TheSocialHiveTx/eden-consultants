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
    industry: 'QSR',
    location: 'TBD',
    year: '2025',
    imageUrl: 'https://picsum.photos/seed/qsr/800/600',
    overview: 'Provided early feasibility guidance and a permitting roadmap to reduce risk before design spend for a national franchise expansion.',
    what_we_did: [
      'Reviewed site constraints and access considerations',
      'Outlined approvals and expected permitting steps',
      'Identified schedule risks and mitigation actions'
    ],
    outcomes: [
      'Clear go/no-go decision support',
      'Reduced unknowns before contract and design commitments'
    ],
    timeline: '2–3 weeks',
    tags: ['feasibility', 'permitting', 'risk reduction']
  },
  {
    slug: 'medical-condo-utility-alignment',
    title: 'Medical Condo Utility Alignment',
    industry: 'Medical Condo',
    location: 'TBD',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/medical/800/600',
    overview: 'Coordinated specialized MEP requirements for a 12-unit medical condo project to ensure tenant improvement readiness.',
    what_we_did: [
      'MEP systems capacity review',
      'Consultant team scope alignment',
      'City utility coordination'
    ],
    outcomes: [
      'Zero change orders on primary utility service',
      'Predictable tenant fit-out timelines'
    ],
    tags: ['MEP', 'coordination', 'medical']
  },
  {
    slug: 'shopping-center-redevelopment-study',
    title: 'Shopping Center Phasing Strategy',
    industry: 'Shopping Center',
    location: 'TBD',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/shopping/800/600',
    overview: 'Strategic phasing analysis for a multi-tenant shopping center redevelopment to maintain existing tenant operations.',
    what_we_did: [
      'Operational impact analysis',
      'Phased utility cutover planning',
      'Contractor logistics coordination'
    ],
    outcomes: [
      'Minimal downtime for existing anchor tenants',
      'Phased delivery on schedule'
    ],
    tags: ['phasing', 'logistics', 'redevelopment']
  }
];
