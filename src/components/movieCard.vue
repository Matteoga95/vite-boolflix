<script>
export default {
    name: 'movieCard',
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="movie card rounded-0 bg-dark text-white h-100 p-2">
            <div class="card-body text-center">
                <h5>{{ movie.title }}</h5>
                <h5>{{ movie.original_title }}</h5>
                <p>{{ movie.original_language }}</p>

                <div class="voto">{{ movie.vote_average }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>