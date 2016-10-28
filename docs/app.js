var app = new Vue({
  el: '#app',
  data: {
    passwordText: '',
    rating: '<response>',
    alert: ''
  },
  methods: {
    checkRating: function () {
      let thisVue = this;

      if(this.passwordText) {
        $.get({
          url: 'https://password-rating.herokuapp.com/api/v1/passwords/' + encodeURIComponent(this.passwordText),
        }).done(function( data ) {
          thisVue.rating = data;
        }).fail(function() {
          thisVue.alert = 'Uh oh, something went wrong. :-(';
            thisVue.rating = '';
          });
      }
    }
  }
})