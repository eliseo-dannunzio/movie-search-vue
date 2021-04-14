import { reactive, watch } from '@vue/composition-api';
const apiKey2 = '9481f0e0'; // API key for application

export const useMovieDetailsApi = () => {
  const state2 = reactive({
    id: '',
    loading: true,
    title: '',
    year: '',
    runtime: '',
    language: [],
    plot: '',
    actors: [],
    poster: ''
  });

  watch(() => {
    const omdbDetailsApiUrl = `https://www.omdbapi.com/?apikey=${apiKey2}&type=movie&i=${state2.id}`;
    if (state2.loading && state2.id) {
      fetch(omdbDetailsApiUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        state2.title = jsonResponse.Title;
        state2.year = jsonResponse.Year;
        state2.runtime = jsonResponse.Runtime;
        state2.language = jsonResponse.Language.split(", ");
        state2.plot = jsonResponse.Plot;
        state2.actors =  jsonResponse.Actors.split(", ");
        state2.poster = jsonResponse.Poster;
        state2.loading = false;
      });
    }
  });
  return state2;
};
