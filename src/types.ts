export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface ImageMetadata {
  url: string;
  imgix_url: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface LandingPage extends CosmicObject {
  type: 'landing-page';
  metadata: {
    hero_headline: string;
    hero_subheadline: string;
    hero_image?: ImageMetadata;
    cta_button_text: string;
    features_section_title: string;
    features: Feature[];
    benefits_section_title: string;
    benefits: Benefit[];
    testimonial_quote: string;
    testimonial_author: string;
    final_cta_headline: string;
    final_cta_description: string;
  };
}

export interface PromptPackage extends CosmicObject {
  type: 'prompt-packages';
  metadata: {
    package_name: string;
    description: string;
    price: string;
    package_image?: ImageMetadata;
    features_list: string[];
    featured_package: boolean;
  };
}

export interface CosmicResponse<T> {
  object?: T;
  objects?: T[];
  total?: number;
}