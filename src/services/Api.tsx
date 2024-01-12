import axios from "axios";
import md5 from "md5";

const BASE_URL = "http://gateway.marvel.com/";
const publicKey = "81cfb00bcab273da1a435081f267f362";
const privateKey = "51a6de673e976f9ba61028b4824b8c003fb2eb21";

type Hero = {
  id: number;
  name: string;
  path: string;
  extension: string;
};
type HeroesArray = Hero[];

export const GetHeroesList = async (): Promise<HeroesArray> => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  try {
    const response = await axios.get(`${BASE_URL}/v1/public/characters`, {
      params: {
        apikey: publicKey,
        ts: ts,
        hash: hash,
        offset: 100,
        limit: 20,
      },
    });
    console.log(response.data.data.results);
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
