export interface Languages {
    pt: string;
    en: string;
    es: string;
  }
  
  export interface FeatureItem {
    id: number;
    title: Languages;
    description: Languages;
  }
  
  export interface FeaturesData {
    data: FeatureItem[];
  }