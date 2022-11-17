<script>
import movieCard from './movieCard.vue'
import { store as state } from '../store.js'
import axios from 'axios'
export default {
    name: 'AppMain',
    components: {
        movieCard
    },
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
                console.log("la string ainput non è stata valorizzata");
            }


        }
    }

}


</script>

<template>
    <main>
        <div class=" d-flex justify-content-center mt-5 ">
            <input type="text" placeholder="Cerca tra i film" v-model="this.state.queryInput" class="p-2 m-1">
            <button class="px-3 mx-3" @click="Search">Cerca</button>
        </div>

        <div>
            <div class="cards my-5 row row-cols-1 row-cols-md-5 g-4">

                <movieCard v-for=" movie in state.movies" :movie="movie" />
                <movieCard v-for=" serie in state.series" :serie="serie" />
            </div>
        </div>


    </main>
</template>

<style lang="scss" scoped>
input {
    width: 300px;
}

.cards {
    display: flex;
    justify-content: center;
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
</style>
