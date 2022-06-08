<template>
  <div class="movie">
    <img
      :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
      width="230"
      class="poster"
    />
    <div class="title">{{ movie.title }}</div>
    <div class="date">Released {{ movie.release_date }}</div>
  </div>
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
  padding-top: 25px;
  text-align: center;
  width: 230px;
}

.title {
  color: orange;
  -webkit-text-stroke: #000;
}
.date {
  color: orange;
  -webkit-text-stroke: #000;
}
.poster {
  border: 1px solid #fff;
  margin-bottom: 10px;
}
</style>
