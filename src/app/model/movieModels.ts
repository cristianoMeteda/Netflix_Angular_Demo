/*MOVIE MODELS*/
export interface IMovieResult<T> {
    results: T[];
}

export interface ICastResult<T> {
    cast: T[];
}

export interface IAuthorDetails {
    username: string;
    avatar_path: string;
    rating: number;
}

export interface IMovieCast {
    name: string;
    profile_path: string;
    character: string;
    id: number;
}

export interface IReview {
    author: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    author_details: IAuthorDetails
}

export interface ITrailer {
    name: string;
    key: string;
    type: string;
    official: boolean;
    published_at: Date;
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