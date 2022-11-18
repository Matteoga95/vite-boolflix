<script>
import { store as state } from '../store.js'
import axios from 'axios'
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    methods: {
        callApi(url, isMovie) {

            axios
                .get(url)
                .then(response => {

                    if (isMovie == true) {
                        this.state.movies = response.data.results
                        console.log(response.data.results);

                    } else {
                        this.state.series = response.data.results
                        console.log(response.data.results);

                    }

                })
                .catch(err => {
                    console.error(err.message);
                    this.state.errorMessage = err.message
                })
        },
        Search() {

            //faccio le chimate api tra i film e serie
            let urlMovie = this.state.API_url_movies;
            let urlSeries = this.state.API_url_series;

            // console.log(this.state.queryInput);

            //se l'input di cerca non è vuoto procedo con le chiamata api
            if (this.state.queryInput !== '') {

                urlMovie += this.state.queryInput
                urlSeries += this.state.queryInput

                // console.log(urlMovie);
                // console.log(urlSeries);

                //chiamata film
                this.callApi(urlMovie, true)

                //chiamata serie
                this.callApi(urlSeries, false)
            } else {
                console.log("la stringa input non è stata valorizzata");
            }


        }
    }

}
</script>

<template>
    <header>
        <div class="d-flex justify-content-between">
            <h1 class="px-5">BoolFix</h1>
            <div class=" px-5 d-flex justify-content-center ">
                <input type="text" placeholder="Cerca tra i film" v-model="this.state.queryInput" class="p-2 m-1">
                <button class="px-3 mx-3" @click="Search">Cerca</button>
            </div>
        </div>


    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    padding: 1rem;
}

h1 {
    color: red;
    font-weight: bold;
}

button {
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    color: white;
    transition: border-color 0.25s;
}

button:hover {
    border-color: #646cff;
}

button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

input {
    width: 300px;
}
</style>
