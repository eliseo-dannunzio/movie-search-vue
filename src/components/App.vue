<template>
  <div class="app">
    <Search :search="state.search" @search="handleSearch"/>
    <div class="movie-list">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.title" @get-details="showDetails"/>
    </div>
    <div class="pagination">
      <button class="btn left" :disabled="isPage1()" @click="changePage(-1)">
        <i class="fas fa-caret-left"></i>
      </button>
      <div class="page-num">Page {{state.page}} / {{state.numPages}}</div>
      <button class="btn right" :disabled="isPageMax()" @click="changePage(1)">
        <i class="fas fa-caret-right"></i>
      </button>
    </div>
    <MovieDetails :details="state2" />
  </div>
</template>

<script>
  import Search from './Search.vue';
  import Movie from './Movie.vue';
  import MovieDetails from './MovieDetails.vue';
  import { useMovieApi } from '../hooks/movie-api';
  import { useMovieDetailsApi } from '../hooks/movie-details-api';

  export default {
    name: 'app',
    components: { Search, Movie, MovieDetails },
    setup() {
      const state = useMovieApi();
      const state2 = useMovieDetailsApi();

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.lastSearch = state.search;
          state.search = searchTerm;
          state.page = (state.search == state.lastSearch) ? (state.page || 1) : 1;
          state.totalResults = 0;
          state.numPages = 1;
        },
        state2,
        showDetails(id) {
          state2.loading = true;
          state2.id = id;
          state2.title = '';
          state2.year = '';
          state2.runtime = '';
          state2.language = [];
          state2.plot = '';
          state2.actors = [];
          state2.poster = '';
        },
        isPage1() {
          return (state.page == 1);
        },
        isPageMax() {
          return (state.page == state.numPages);
        },
        changePage(val) {
          state.page += val;
          state.loading = true;
        }
      };
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  
  .app {
    font-family: 'Lato', sans-serif;
  }

  .spinner {
    height: 80px;
    margin: auto;
  }

  .intro {
    font-size: large;
  }

  * {
    box-sizing: border-box;
  }

  .movie-list {
    width: 320px;
  }

  .header h2 {
    margin: 0;
  }

  .add-movies {
    text-align: center;
  }

  .add-movies button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }

  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }

  .pagination {
    width: 320px;
    height: 60px;
    display: block;
  }

  .pagination > .btn,
  .pagination > .page-num {
    float: left;
  }

  .btn {
    width: 28px;
    height: 28px;
    border: 1px solid rgb(193, 193, 193);
    border-radius: 4px;
    color: rgb(196, 196, 196);
    font-size: 12px;
    margin-top: 15px;
  }

  .btn.left {
    margin-left: 20px;
  }
  .btn.right {
    margin-right: 20px;
  }

  .page-num {
    width: 224px;
    font-size: 14px;
    font-weight: 400;
    margin-top: 22px;
    text-align: center;
  }



</style>
