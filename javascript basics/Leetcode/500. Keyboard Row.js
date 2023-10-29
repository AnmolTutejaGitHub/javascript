/////////took many hours ,, i still can't figure out how i made it word
///////

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */

// var findWords = function(words) {
//     const row1="qwertyuiop";
//     const row2="asdfghjkl";
//     const row3="zxcvbnm";
//     const arr=[];
//     // let init=true;
//     // let detected=false;
//     let wordslen=words.length //as pop is being used
//     for(let i=0;i<wordslen;i++){
//         let init=true;
//     let detected=false;
//     for(const word of words){
//         for(const char of word){
//             if(row1.includes(char)){
//               init=true
//              }
//             else {
//             init=false
//            break
//            }
//           }if(init) { arr.push(word)
//             detected=true}}
//           for(const word of words){
//           for(const char of word){
//             if(row2.includes(char) && detected==false){
//               init=true
//              }
//             else {
//             init=false
//             break
//            }
//          } if(init) { arr.push(word)
//             detected=true}}
//           for(const word of words){
//           for(const char of word){
//             if(row3.includes(char) && detected==false){
//               init=true
//              }
//             else {
//             init=false
//             break 
//           }
//          } if(init) { arr.push(word)
//             detected=true}
//     }
//     //console.log(words[i])
//     //words.pop(words[i])
//     //words.splice(0,words[i]);
//    words.shift();  //removes the first element of the array 

    
//    // console.log(i)
//   }return arr;}


// console.log(findWords(["Hello","Alaska","Dad","Peace"]))



var findWords = function(words){
  //const everyfunc=function(){
  //word=>rows[k].includes(word[j]
  //}
  const rows=["qwertyuiop","asdfghjkl","zxcvbnm"];
  let arr=[]
 //for(let i=0;i<words.length;i++){
    for(let j=0;j<words.length;j++){
      let found=false
      for(let k=0;k<rows.length;k++){
     // if(words.every(word=>[...word].every(char => rows[k].includes(char)))){   //the code you provided is written correctly to check if every character at every index of each word in the words array is included in rows[k].
      if(words[j].split('').every(char => rows[k].includes(char.toLowerCase()))) {
        found=true
      }
      if(found) {
        arr.push(words[j])
      break;}
    }
  }
//}
return arr;
}

//console.log(findWords(["Hello","Alaska","Dad","Peace"]))