import axios from "axios";
import md5 from "md5";
import { HeroType } from "../../types/heroType";
import { baseUrl, publicKey, privateKey } from "../../config/api.config";

type HeroesArray = HeroType[];

export const GetHeroesList = async (): Promise<HeroesArray> => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  try {
    const response = await axios.get(`${baseUrl}/v1/public/characters`, {
      params: {
        apikey: publicKey,
        ts: ts,
        hash: hash,
        offset: 100,
        limit: 20,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
