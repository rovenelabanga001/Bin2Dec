function binaryToDecimal(binaryString) {
    if (!/^[01]+$/.test) {
      throw new Error("Input must be only 0s or 1s");
    }
  
    return parseInt(binaryString, 2);
  }

  console.log(binaryToDecimal(1101))