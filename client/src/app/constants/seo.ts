export interface SeoInterface {
  title?: string;
  meta?: {
    keywords?: string;
    description?: string;
    type?: string;
    card?: string;
    image?: string;
    url?: string;
    author?: string;
  };
}

const home: SeoInterface = {
  title: 'Youtube Api'
};

const watch: SeoInterface = {
  title: ''
};

const results: SeoInterface = {
  title: ''
};

const errorPage: SeoInterface = {
  title: '404 - Page Not Found'
};

export const seo = {
  home,
  watch,
  results,
  errorPage
};
