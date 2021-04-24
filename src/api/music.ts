import { Song } from "../models/song";
import { httpGET, httpPOST } from "../utility/http";

export const getSongs = async (): Promise<Song[]> => {
  return httpGET("https://api-stg.jam-community.com/song/trending");
};

export const likeSong = async (id: string): Promise<any> => {
  return httpPOST(
    "https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",
    { id }
  );
};
