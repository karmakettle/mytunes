// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on("add", this.enqueue, this)
  },
  enqueue: function () {
  	this.at(0).play();
  },
  dequeue: function () {}
});