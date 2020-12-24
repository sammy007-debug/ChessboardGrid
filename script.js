
let size = parseInt(prompt("What grid dimension do you want? "));

/**
 

for (let i = ""; i.length <= size - 1; i += "#"){

  for(let j = ""; j.length <= size; j += "#"){
    var board = "";

   if (i.length % 2  == 0){
           j += " "
    }
    else if (j % 2 != 0){

      j += " "
    }
  board += j;
  }    
console.log(board);
}
 */

board = ""

for(i = 0; i < size; i++){

  for(j = 0; j < size; j++){

    if((i + j) % 2 == 0){

      board += " ";


    }else { 

      board += "#";

    }
  }
  board += "\n";
}

console.log(board);




