export interface IMovieResult<T> {
    results: T[];
}

export interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface IPopularMovie {
    id: number;
    original_language: string;
    poster_path: string;
    title: string;
}

export interface IMovieDetails {
    id: number;
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    budget: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    status: string;
    production_companies: IProductionCompany[];
}