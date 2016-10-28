import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.full-page',

  data() {
    return {
      currentSelection: null,
      seriesData: null,
      series: null,
    };
  },

  mounted() {
    fetch('http://gateway.marvel.com:80/v1/public/series/9856%20?apikey=45b8eb3f93ddf64f6d341cdee0ee93d6')
    .then((r) => r.json())
      .then((data) => {
        // this.series = data;
        this.searchSeries('Hulk');
      });
  },

  methods: {
    searchSeries(search) {
      fetch('http://gateway.marvel.com:80/v1/public/series/9856%20?apikey=45b8eb3f93ddf64f6d341cdee0ee93d6')

      .then((r) => r.json())
        .then((data) => {
          this.seriesData = data;
        });
    },
  },
});
