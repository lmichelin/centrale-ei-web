<template>
  <div class="MovieDesc">
    <Movie :movie="movie" />
  </div>
</template>

<script>
import axios from "axios";
import Movie from "@/components/Movie.vue";
export default {
  name: "MovieDesc",
  components: { Movie },
  data: function () {
    return {
      movie: {},
    };
  },
  methods: {
    fetchTheMovie: function () {
      axios
        .get(`http://localhost:3000/movies/${this.$route.params.id}`)
        .then((response) => {
          this.movie = response.data[0];
        })
        .catch((error) => {
          this.usersLoadingError = "An error occured while fetching the movie.";
          console.error(error);
        });
    },
  },
  mounted: function () {
    console.log(this.$route);
    this.fetchTheMovie();
  },
};
</script>

<style></style>
