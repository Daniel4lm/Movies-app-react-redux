
export interface MoviesType {
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

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface SelectedMovie {
    data: MovieType | null;
    isLoading: boolean;
    errorMessage: string;
}

export interface SearchResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: MoviesType[];
    topMovies: MoviesType[];
    selectedMovie: number;
    isLoading: boolean;
    errorMessage: string;
}

export interface StoreType {
    movies: SearchResponse;
    movie: SelectedMovie;
}

export interface Action {
    type?: string;
    payload?: any | any[];
}

export type ActionType = Action;