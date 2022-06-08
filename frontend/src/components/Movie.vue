<template>
  <router-link :to="'/movies/' + movie.id_" class="movie">
    <img
      :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
      width="230"
      class="poster"
    />
    <div class="description">
      <div class="title">{{ movie.title }}</div>
      <div class="date">Released {{ movie.release_date }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
  },
};
</script>

<style>
.movie {
  text-decoration: none;
  margin-top: 25px;
  text-align: center;
  width: 230px;
}

.poster {
  border: 2px solid #fff;
  margin-bottom: 5 px;
  border-radius: 15px;
}
.description {
  background-color: black;
  border: 2px solid #fff;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.title {
  color: white;
  -webkit-text-stroke: #000;
}
.date {
  color: white;
  -webkit-text-stroke: #000;
}
</style>
