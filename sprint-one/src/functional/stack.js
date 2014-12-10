var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value){
    //Add a new key/value pair after the numereric key in storage
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    //Remove and return the last numeric key/value in storage
    var result = storage[counter - 1];
    delete storage[counter - 1];
    counter--;
    if(counter < 0){
      counter = 0;
    }
    return result;
  };

  someInstance.size = function(){
    //Return the number of numeric keys in storage
    return counter;
  };

  return someInstance;
};
