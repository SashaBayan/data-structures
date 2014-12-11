

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  //Can we define counter in stackMethods?
  this.counter = 0;

  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

	push: function(value){
	  this[counter] = value;
	  counter++;
	},

	pop: function(){
	  var value = this[counter - 1];
	  delete this[counter - 1];
	  counter--;
	  if(counter < 0){
	  	counter = 0
	  }
	  return value;
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

//.push, .pop, .size
