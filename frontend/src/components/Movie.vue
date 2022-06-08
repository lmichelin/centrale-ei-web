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
  margin-bottom: 5px;
  border-radius: 15px;
}
.description {
  background: linear-gradient(rgb(143, 143, 143), #000);
  border: 2px solid #fff;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  width: calc(100% - 10px);
  vertical-align: middle;
}
.title {
  color: white;
  -webkit-text-stroke: #000;
  font-weight: bolder;
  margin-bottom: 5px;
}
.date {
  color: white;
  -webkit-text-stroke: #000;
}
</style>
