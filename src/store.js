import {
    reactive
} from 'vue'

export const store = reactive({
    movies: null,
    series: null,
    errorMessage: null,
    API_url_movies: 'https://api.themoviedb.org/3/search/movie?api_key=ffb675dffbc6c050d7c87751106449a1&query=',
    API_url_series: "https://api.themoviedb.org/3/search/tv?api_key=ffb675dffbc6c050d7c87751106449a1&query=",
    queryInput: '',
})