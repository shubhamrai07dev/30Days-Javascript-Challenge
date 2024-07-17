function fun(number) {
      if (number >= 0) {
          console.log("positive")
          
      } else {
          console.log("negative");
      }
}

function HOF(fun, num) {
  fun(num)
}


HOF(fun, -4)