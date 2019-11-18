function convertToBinary(n) {
    let array = [];
  
    for (let i = n; i > 0; i = Math.floor(i / 2)){
      array.push(i % 2);
    }
  
    let res = '';
    for (let j = array.length - 1; j >= 0; j--) {
      res += array[j];
    }
    return res;
  }
  
  function convertToHexa(n) {
  
    if (n < 0) {
      n += 0xFFFFFFFF + 1;
    }
  
    let array = [];
    let values = ["A", "B", "C", "D", "E", "F"];
  
    for (let i = n; i > 0; i = Math.floor(i / 16)){
      if(i % 16 >= 10) {
        array.push(values[i % 16 - 10]);
      }else {
        array.push(i % 16);
      }
    }
  
    let res = '';
    for (let j = array.length - 1; j >= 0; j--) {
      res += array[j];
    }
    return res;
  }
  
  module.exports = {
    convertToHexa,
    convertToBinary
  }