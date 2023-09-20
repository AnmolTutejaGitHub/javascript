//Select Button
const btn=document.querySelector('button');
const box=document.querySelectorAll('.box') //.textContent.trim(); //trim() to remove whitespaces 


//Function to check if form is filled or Not 
const formFilled=function(box){
    for(let i=0;i<box.length;i++){
           let filled=box[i].value.trim()   //if empty string then filled='' which is falsy value 
            if (filled === '') {
                return false;
            }
    }
    // If all fields are filled, return true
    return true;}

//Functionality to open button.html
    btn.addEventListener('click',function(){
    if(formFilled(box)){
        const file = './button.html';
        // Open the file in a new tab or window
        window.open(file, '_blank');  //blank will open in known tab
    } else{
    {
        alert("First Fill The Form");
    }
      }
});
