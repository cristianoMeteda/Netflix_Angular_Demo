/*SERIES MODELS*/

export interface ISerieResult<T> {
    results: T[];
}

export interface ISeasonEpisodes<T> {
    episodes: T[];
}

export interface IPopularSerie {
    id: number;
    poster_path: string;
    original_language: string;
    name: string;
}

export interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ISeason {
    air_date: Date;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    season_number: number;
    poster_path: string;
    episodes: IEpisode[];
}

export interface ISerieDetails {
    id: number;
    poster_path: string;
    overview: string;
    popularity: number;
    original_name: string;
    original_language: string;
    number_of_episodes: number;
    number_of_seasons: number;
    production_companies: IProductionCompany[];
    seasons: ISeason[];
}

export interface IEpisode {
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    still_path: string;
}
