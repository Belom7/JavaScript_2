Vue.component('search', {
  data: {
    search: '',
  },
  template: `
              <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(search)">
              <input type="text" class="search-field" v-model="search">
              <button class="btn-search" type="submit">
                  <i class="fas fa-search"></i>
              </button>
          </form>
  `
});