function forLoop(array) {
  for (var i = 0; i < 25; i++) {
<<<<<<< HEAD
   array.push(`I am ${i} strange loop.`);
  }
  return array; 
=======
    return "I am ${i} strange loops";
  }
>>>>>>> 59e37098234fcce63b8aacc724aa18c618f5228a
}

function whileLoop(n) {
  while (n > 0) {
<<<<<<< HEAD
    console.log(n);
    --n;
  }
  return "done";
}

function doWhileLoop(array) {
  var length = array.length;
  do {
    array.pop();
  } while(array.length > 0 || array.length === " ");
  return array;
=======
    console.log(--n);
  }
}

function doWhileLoop(array) {
  do {
    return --array;
  } while(array.length > 0);
>>>>>>> 59e37098234fcce63b8aacc724aa18c618f5228a
}