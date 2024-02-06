export type HeroType = {
  id: number;
  name: string;
  description: string;
  comics: {
    available: number;
    items: [];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
};
