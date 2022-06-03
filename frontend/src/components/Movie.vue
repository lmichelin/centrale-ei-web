<template>
  <div class="child">
    <img
      height="400"
      :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
    />
    <h2>{{ movie.title }}</h2>
    <h3>{{ movie.release_date }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    movie: Array,
  },
};
</script>

<style scoped>
.child {
  margin-left: auto;
  margin-right: auto;
}

table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  padding: 10px;
}
</style>
