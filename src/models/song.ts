import { Artist } from "./artist";
import { Genre } from "./genre";

export interface Song {
  artist: Artist;
  artist_name: string;
  bpm: number;
  comments: number;
  cover_image_aspect_ratio: string;
  cover_image_path: string;
  description: string;
  duration: number;
  faves: number;
  id: string;
  likes: number;
  linked_crews: string[];
  mix_packs: string[];
  music_file_mimetype: string;
  music_file_path: string;
  name: string;
  name_seo: string;
  plays: number;
  reposts: number;
  song_genres: Genre[];
  song_release: string;
  source_info: string;
  tags: null;
}
