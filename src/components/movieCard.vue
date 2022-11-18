<script>
import axios from 'axios'

export default {
    name: 'movieCard',
    props: {
        movie: Object,
        serie: Object
    },
    data() {
        return {
            language: null,
            image: null,
            titolo: "",
            titoloOriginale: "",
            poster_path: "https://image.tmdb.org/t/p/w342",
            voto: null,
            overview: ""
        }
    },
    mounted() {


        //in base all'oggetto non undefined  valorizzo le variabili giuste che mi servono

        //se è una serie
        if (this.movie === undefined) {

            this.titolo = this.serie.name
            this.titoloOriginale = this.serie.original_name
            this.voto = this.serie.vote_average
            this.language = this.serie.original_language
            this.poster_path += this.serie.poster_path
            this.overview = this.serie.overview

        } else {
            //in questo caso è un film
            this.titolo = this.movie.title
            this.titoloOriginale = this.movie.original_title
            this.voto = this.movie.vote_average
            this.language = this.movie.original_language
            this.poster_path += this.movie.poster_path
            this.overview = this.movie.overview
        }

        if (this.language == "en") {
            this.image = "https://countryflagsapi.com/svg/gb"
        } else if (this.language == "ja") {
            this.image = "https://countryflagsapi.com/svg/jp"
        } else {

            this.image = "https://countryflagsapi.com/svg/" + this.language
        }

        //normalizzo il voto
        this.voto = Math.floor((this.voto / 2) + 1)


    }

}
</script>

<template>
    <div class="col">

        <div class="card text-center">

            <img class="img-fluid " :src="poster_path" alt="">

            <div class="card-text">

                <h5>{{ this.titolo }}</h5>
                <h5>{{ this.titoloOriginale }}</h5>
                <img class="py-1 img-fluid w-25" :src="image" alt="">

                <!-- //metto al posto del voto le stelline di fontawsome -->
                <div class="py-2">
                    <i v-for="voti in voto" class=" px-1 fa-solid fa-star"></i>
                </div>
                <p class="text-start">{{ this.overview }}</p>

            </div>



        </div>


    </div>
</template>

<style lang="scss" scoped>
.card-text {
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    padding-top: 1rem;
    display: none;
}

.card {
    position: relative;
}

.card:hover {
    .card-text {
        display: block;
    }
}
</style>