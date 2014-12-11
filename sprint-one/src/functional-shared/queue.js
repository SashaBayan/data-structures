var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, queueMethods);
  this.counter = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
  	this[counter] = value;
    counter++;
  },
  dequeue: function(){
  	var result = this[0];
  	delete this[0]


    counter--;
    if(counter < 0){
      counter = 0;
    }
    for (var i = counter; i > 0; i--) {
  	  console.log(this[i - 1]);
  	  this[i - 1] = this[i];
  	};
    return result;
  },
  size: function(){
  	return counter;
  }
};



  each = function(collection, iterator) {
    if(collection.constructor === Array){
        for (var i = 0; i < collection.length; i++) {
          iterator(collection[i], i, collection);
        };
    } else if(collection.constructor === Object){
        var keys = Object.keys(collection);
        for (var i = 0; i < keys.length; i++) {
          iterator(collection[keys[i]], keys[i], collection);
        };
    }
  };

  extend = function(obj) {
    each(arguments, function(item){
      for(var key in item){
        obj[key] = item[key]
      }
    });
    return obj;
  };