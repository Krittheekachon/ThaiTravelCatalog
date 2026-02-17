
export interface Tour {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  descriptionTh: string;
  price: number;
  duration: string;
  nights: number;
  days: number;
  image: string;
  category: 'Domestic' | 'International' | 'Group';
  badge: 'Most Popular' | 'Best Seller' | 'Experience' | 'Seasonal Offer';
  groupSize: string;
  language: string;
  accommodation: string;
  itinerary: ItineraryStep[];
  included: string[];
  excluded: string[];
  gallery: string[];
}

export interface ItineraryStep {
  day: number;
  title: string;
  titleTh: string;
  description: string;
}

export type Page = 'home' | 'detail';
