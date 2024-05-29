/*SERIES MODELS*/

export interface ISerieResult<T> {
    results: T[];
}

export interface IPopularSerie {
    id: number;
    poster_path: string;
    original_language: string;
    name: string;
}
