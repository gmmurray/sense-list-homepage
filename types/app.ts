export interface IApp {
  name: string;
  slug: string;
  description: string;
  url: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
}
