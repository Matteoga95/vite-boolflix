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
        callApi(url) {

            axios
                .get(url)
                .then(response => {
                    //console.log(response.data);
                    this.state.movies = response.data.results
                    console.log(response.data);
                })
                .catch(err => {
                    console.error(err.message);
                    this.state.errorMessage = err.message
                })
        },
        Search() {
            let url = this.state.API_url;
            console.log(this.state.queryInput);

            //se l'input di cerca non è vuoto procedo con la chiamata api
            if (this.state.queryInput !== '') {

                url += this.state.queryInput
                console.log(url);

                this.callApi(url)
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
            <div class="my-5 row row-cols-1 row-cols-md-5 g-4">

                <movieCard v-for=" movie in state.movies" :movie="movie" />

            </div>
        </div>


    </main>
</template>

<style lang="scss" scoped>
input {
    width: 300px;
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
