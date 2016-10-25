var app = new Vue({
  el: '#app',
  data: {
    message: 'qwerty',
    rating: 'No rating yet.'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    checkRating: function () {
      let thisVue = this;
      $.get({
        url: 'https://password-rating.herokuapp.com/api/v1/passwords/' + encodeURIComponent(this.message),
      }).done(function( data ) {
        thisVue.rating = data;
      });
    }
  }
})