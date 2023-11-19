export interface Navbar {
    solucoes: string;
    preco: string;
    academy: string;
    blog: string;
    contato: string;
    entrar: string;
    comecar: string;
  }
  
  export interface Submenu {
    titulo: string;
    escola: string;
    comunidade: string;
    gamificacao: string;
    aplicativo: string;
  }
  
  export interface HeaderI18n {
    navbar: Navbar;
    submenu: Submenu;
  }
  
  export interface HeroI18n {
    intro: string;
    titulo: string;
    subtitulo: string;
    comecar: string;
    video: string;
  }

  
  export interface FeaturesI18n {
    detalhes: string;
    recursos: string;
    titulo: string;
    maisRecursos: string;
    mais: string;
  }
  
  export interface I18nDictionary {
    header: HeaderI18n;
    hero: HeroI18n;
    features: FeaturesI18n;
  }