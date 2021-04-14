import { reactive, watch } from '@vue/composition-api';
const apiKey = '9481f0e0'; // API key for application

export const useMovieApi = () => {
  const state = reactive({
    search: 'Superman',
    loading: true,
    page: 1,
    movies: []
  });

  watch(() => {
    const omdbApiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${encodeURI(state.search)}&page=${state.page}`;
    if (state.loading) {
      fetch(omdbApiUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search;
        state.totalResults = +jsonResponse.totalResults || 0; // returns the results as a number instead of the default string
        state.numPages = Math.ceil(state.totalResults / 10);
        state.loading = false;
      });
    }
  });

  return state;
};
