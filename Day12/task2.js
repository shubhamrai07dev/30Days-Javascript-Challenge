const divideNumber = (num1, num2) => {
   try {
     if (num1 % num2 === 0) {
       throw new Error("error came");
     } else {
         console.log("error here")
     }
   } catch (error) {
    console.log("error message", error.message)
   }
}
divideNumber(9, 2)