<template>
  <form class="search">
    <input
       type="text"
       :value="movieTitle"
       @keydown="disableEnter"
       @keyup="handleChange"
       placeholder="Search here"
    />
    <i class="fas fa-search submit" @click="handleSubmit"></i>
  </form>
</template>
<script>
  import { ref } from '@vue/composition-api';
  export default {
    name: 'Search',
    props: ['search'],
    setup({ search }, { emit }) {
      const movieTitle = ref(search);
      return {
        movieTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', movieTitle.value);
        },
        handleChange(event) {
          movieTitle.value = event.target.value
        },
        disableEnter(event) {
          if (event.keyCode == 13) {
            event.preventDefault();
            return false;
          }
        }
      }
    }
  };
</script>

<style>
  .search {
    width: 320px;
    padding: 40px 32px 40px 32px;
    border-bottom: 1px solid rgb(0, 78, 195);
  }

  .search > input[type="text"]{
    width: 256px;
    height: 48px;
    top: 40px;
    left: 32px;
    border-radius: 8px;
    border: 1px solid rgb(165, 165, 165);
    text-indent: 14px;
    color: rgb(165, 165, 165);
    font-size: 16px;
  }

  .submit {
    background-color: transparent;
    color: rgb(165, 165, 165);
    cursor: pointer;
    font-size: 24px;
    margin-top: 12px;
    margin-left: -39px;
  }
</style>