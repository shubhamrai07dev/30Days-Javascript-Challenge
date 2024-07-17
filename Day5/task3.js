const maxNum = function (num1, num2) {
      if (num1 > num2) {
        console.log(`${num1} is max.`);
      } else if (num1 < num2) {
        console.log(`${num2} is max.`);
      } else {
        console.log(`Both numbers are equal.`);
      }
};

maxNum(5, 5);