export interface Artist {
  artist_name: string;
  country: string;
  cover_image_path: string;
  created: Date;
  crews: any[];
  description: string;
  external_songs_count?: number;
  external_videos_count: number;
  favorite_genres: any[];
  favorites: number;
  followers: number;
  follows: number;
  id: string;
  liked: number;
  location?: string;
  muted: boolean;
  name: string;
  place?: string;
  profile_image_path: string;
  releases: number;
  social_accounts: any[];
  video_shout_out_count: number;
}
