import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const apikey = '45b8eb3f93ddf64f6d341cdee0ee93d6';


const app = new Vue({
  el: '.full-page',

  data() {
    return {
      seriesData: null,
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey=${apikey}`)
      .then((r) => r.json())
        .then((data) => {
          this.seriesData = data;
        });
    },
  },
});
