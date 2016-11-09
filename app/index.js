import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const apikey = '45b8eb3f93ddf64f6d341cdee0ee93d6';


const app = new Vue({
  el: '.full-page',

  data() {
    return {
      seriesData: null,
      characters: null,
      comics: null,
      modalDescription: false,
      searchTerm: '',
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    showDescription(description) {
      this.modalDescription = description;
    },

    hideModal() {
      this.modalDescription = null;
    },

    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey=${apikey}`)
        .then((r) => r.json())
        .then((data) => {
          this.seriesData = data.data.results[0];
          this.searchCharacters(this.seriesData.id);
          this.searchComics(this.seriesData.id);
        });
    },
    searchCharacters(id) {
      fetch(`http://gateway.marvel.com/v1/public/series/${id}/characters?apikey=${apikey}`)
        .then((r) => r.json())
        .then((data) => {
          this.characters = data.data.results;
        });
    },

    searchComics(seriesComics) {
      fetch(`http://gateway.marvel.com/v1/public/series/${seriesComics}/comics?apikey=${apikey}`)
      .then((r) => r.json())
      .then((data) => {
        this.comics = data.data.results;
      });
    },
  },
});
