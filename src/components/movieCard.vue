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
    methods: {
        callApiFlag() {

            let url = "https://countryflagsapi.com/png/"

            if (this.language == "en") {
                url += "gb"
            } else {
                url += this.language
            }
            // console.log(url);
            axios
                .get(url)
                .then(response => {
                    //console.log(response.data);
                    // this.state.movies = response.data.results
                    // console.log(response.data);
                    this.image = "data:image/png;base64, " + response.data
                })
                .catch(err => {
                    // console.error(err.message);
                    // this.state.errorMessage = err.message
                })
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

        //la chiamata per la bandiera
        this.callApiFlag()

    }

}
</script>

<template>
    <div class="col">
        <div class="movie card rounded-0 bg-dark text-white h-100 p-2">
            <div class="card-body text-center">

                <h5>{{ this.titolo }}</h5>
                <h5>{{ this.titoloOriginale }}</h5>
                <img :src="image" alt="">


                <div class="voto">{{ this.voto }}</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>