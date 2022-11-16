import {
    reactive
} from 'vue'

export const store = reactive({
    movies: null,
    errorMessage: null,
    API_url: 'https://api.themoviedb.org/3/search/movie?api_key=ffb675dffbc6c050d7c87751106449a1&language=it-IT&query=',
    queryInput: '',
})