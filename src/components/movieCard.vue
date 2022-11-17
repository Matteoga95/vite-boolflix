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
            voto: null
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

        } else {
            //in questo caso è un film
            this.titolo = this.movie.title
            this.titoloOriginale = this.movie.original_title
            this.voto = this.movie.vote_average
            this.language = this.movie.original_language
        }

        if (this.language == "en") {
            this.image = "https://countryflagsapi.com/svg/gb"
        } else if (this.language == "ja") {
            this.image = "https://countryflagsapi.com/svg/jp"
        } else {

            this.image = "https://countryflagsapi.com/svg/" + this.language
        }
    }

}
</script>

<template>
    <div class="col">
        <div class="movie card rounded-0 bg-dark text-white h-100 p-2">
            <div class="card-body text-center">

                <h5>{{ this.titolo }}</h5>
                <h5>{{ this.titoloOriginale }}</h5>
                <img class="img-fluid w-25" :src="image" alt="">


                <div class="voto">{{ this.voto }}</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>