<template>
  <div class="movie">
    <div class="movie-details">
      <div class="movie-details-cell movie-details-poster" @click="getDetails(movie.imdbID)">
        <img class="poster" height="48" :alt="altText" :src="movie.Poster" onerror="if (this.src != 'error.jpg') this.src = 'https://m.media-amazon.com/images/S/sash/85lhIiFCmSScRzu.png';"/>
      </div>
      <div class="movie-details-cell" @click="getDetails(movie.imdbID)">
        <div class="movie-title">{{ movie.Title }}</div>
        <div class="movie-year">({{ movie.Year }})</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { computed } from '@vue/composition-api';
  export default {
    name: "Movie",
    props: ['movie'],
    setup({ movie }) {
      const altText = computed(() => `The movie titled: ${movie.Title}`);
      return { 
        altText,
        getDetails(id) {
          this.$emit('get-details', id);
        }
      }
    }
  };
</script>
<style>
  .movie {
    height: 88px;
    width: 320px;
    border-bottom: 1px solid rgb(196, 196, 196);
    display: table;
    font-family: Arial;
  }

  .movie-details {
    text-align: left;
    display: table-row;
  }

  .movie-details-poster {
    width: 84px;
  }

  .movie-details-cell {
    display: table-cell;
    vertical-align: top;
  }

  .movie-title {
    font-size: 24px;
    font-weight: 700;
    width: 235px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 12px;
  }

  .movie-year {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
  }

  .poster {
    margin-top: 16px;
    margin-left: 24px;
    margin-right: 12px;
  }

  .null-img {
    height: 48px;
  }
</style>