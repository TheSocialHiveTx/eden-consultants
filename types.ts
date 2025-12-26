
export type Industry = 'Shopping Center' | 'QSR' | 'Restaurant' | 'Office Condo' | 'Medical Condo';

export interface CaseStudy {
  slug: string;
  title: string;
  industry: Industry;
  location: string;
  year: string | number;
  overview: string;
  what_we_did: string[];
  outcomes: string[];
  timeline?: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  deliverables: string[];
}

export interface IndustryDetail {
  id: Industry;
  label: string;
  focusPoints: string[];
  description: string;
  icon: string;
}
