// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function () {
  	debugger;
  	// this.model.on('enqueue', this.render);
  },

  events: {
    'click': function() {
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
