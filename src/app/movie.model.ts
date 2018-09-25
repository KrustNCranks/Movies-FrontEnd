export interface Movie {
  _id: String;
  voteCount: Number;
  video: String;
  vote_average: Number;
  title: String;
  popularity: String;
  poster_path: String;
  original_language: String;
  original_title: String;
  genre_ids: Array<string>;
  adult: String;
  overview: String;
  release_date: Date;
}
