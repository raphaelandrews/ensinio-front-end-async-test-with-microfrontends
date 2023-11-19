export interface Languages {
  [key: string]: string;
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