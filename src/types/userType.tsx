import { HeroType } from "./heroType";

export type UserType = {
  email: string | null;
  avatar: string;
  fav: {
    hero1: HeroType;
    hero2: HeroType;
    hero3: HeroType;
    hero4: HeroType;
    hero5: HeroType;
  };
};
