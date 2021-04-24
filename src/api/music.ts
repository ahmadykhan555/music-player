import { AxiosResponse } from "axios";
import { Song } from "../models/song";
import { httpGET } from "../utility/http";

export const getSongs = async (): Promise<Song[]> => {
  return httpGET("https://api-stg.jam-community.com/song/trending");
};
