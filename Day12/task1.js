const throwError = () => {
    try {
        // console.log("no error")
                throw new Error("inetntionally occured error.");
    } catch(error) {
         console.error("error occured", error.message);
    }
}
throwError()