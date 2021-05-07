
export interface MovieType {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface SearchResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieType[];
    topMovies: MovieType[];
    selectedMovie: number;
    isLoading: boolean;
    errorMessage: string;
}

export interface StoreType {
    movies: SearchResponse;
}

export interface Action {
    type?: string;
    payload?: any | any[];
}

export type ActionType = Action;