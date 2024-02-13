import { HeroType } from "./heroType";

export type UserType = {
  email: string | null;
  avatar: string;
  favHeroes: HeroType[];
};
