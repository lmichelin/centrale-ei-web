<template>
  <div class="home">
    <img
      alt="Morbin"
      src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/01/Morbius%202022%20Big__w1200.jpg"
      width="300"
      class="logo"
    />
    <h1>MORBVIES</h1>
    <p>
      <input
        type="text"
        v-model="query"
        v-on:input="findMovies"
        placeholder="Search..."
      />
    </p>
    <div class="catalogue">
      <Movie v-for="movie in foundMovies.slice(0, 21)" :movie="movie" />
    </div>
  </div>
</template>
<script>
import Movie from "@/components/Movie.vue";
import axios from "axios";
export default {
  name: "Home",
  components: { Movie },
  data: function () {
    return {
      query: "",
      query_lowercase: "",
      movies: [],
      foundMovies: [],
    };
  },
  created() {
    console.log("Hello World");
  },
  methods: {
    fetchMovies: function () {
      axios
        .get("http://localhost:3000/movies")
        .then((response) => {
          console.log(response.data);
          this.movies = response.data;
          this.foundMovies = response.data;
          console.log(this.movies);
        })
        .catch((error) => {
          this.usersLoadingError = "An error occured while fetching movies.";
          console.error(error);
        });
    },
    findMovies: function () {
      this.query_lowercase = this.query.toLowerCase();
      this.foundMovies = [];
      for (const movie of this.movies) {
        let title = movie.title.toLowerCase();
        if (title.includes(this.query_lowercase)) {
          this.foundMovies.push(movie);
        }
      }
    },
  },
  mounted: function () {
    this.fetchMovies();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  background-image: url("../../public/morbius_background.jpg");
  width: "100%";
  background-position: center top;
  background-size: 100% auto;
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

.logo {
  border: 1px solid #fff;
  margin-top: 25px;
}

.search {
  text-align: center;
  color: white;
}

.catalogue {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding-bottom: 25px;
}
</style>
