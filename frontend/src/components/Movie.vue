<template>
  <div>
    <p>
      <img
        height="400"
        :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
      />
    </p>
    <p>{{ movie.title }}</p>
    <p>{{ movie.release_date }}</p>
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
.center {
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
