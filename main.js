const reader = require('readline-sync');
const utils = require('./converter');

const number = reader.questionInt("Please enter the number you want to convert = ");
const option = reader.questionInt("Please enter option: \n 1:Binary \n 2:Hexadecimal \n");

if(option === 1){
  console.log(utils.convertToBinary(number));
}else if(option === 2){
  console.log(uitls.convertToHexa(number));
}else if(typeof option === "number"){
  console.log("There is no options for that number! ");
}else{
  console.log("Imported value should be number");
}