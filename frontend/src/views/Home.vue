<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Movie Website</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
    <p>
      <input
        v-model="movieName"
        placeholder="Type any movie here"
        type="text"
      />
    </p>
    <div>Nom du film: {{ movieName }}</div>
    <div class="parent">
      <tr v-for="movie in movies" :key="movie.id">
        <Movie class="child" :movie="movie" />
      </tr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Movie from "@/components/Movie";

export default {
  name: "Home",
  components: {
    Movie,
  },
  data: function () {
    return {
      movieName: "",
      movies: [],
      moviesLoadingError: "",
    };
  },
  methods: {
    fetchMovies: function () {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a`
        )
        .then((response) => {
          // Do something if call succeeded
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch((error) => {
          // Do something if call failed
          this.usersLoadingError = "An error occured while fetching movies.";
          console.error(error);
        });
    },
    fetchMoviesAsync: async function () {
      try {
        // Do something if call succeeded
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a`
        );
        await (this.movies = response.data.results);
        console.log(this.movies);
      } catch (error) {
        // Do something if call failed
        this.usersLoadingError = "An error occured while fetching movies.";
        console.error(error);
      }
    },
  },
  created() {
    console.log("Hello World");
    this.fetchMoviesAsync();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.parent {
  display: flex;
  flex-flow: row nowrap;
  height: 250px;
}

.child {
  width: 40%;
  height: 40%;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
