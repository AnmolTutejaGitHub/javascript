//Select Button
const btn=document.querySelector('button');
const box=document.querySelectorAll('.box') //.textContent.trim(); //trim() to remove whitespaces 


//Function to check if form is filled or Not 
const formFilled=function(box){
    for(let i=0;i<box.length;i++){
            filled=box[i].textContent.trim()   //if empty string then filled='' which is falsy value 
            if (filled === '') {
                return false;
            }
    }
    // If all fields are filled, return true
    return true;}

//Now add Functionality to direct to another WebPage
    btn.addEventListener('click',function(){
    //when all fields filled button will work
    if(formFilled(box)){
        const file = './button.html';
        // Open the file URL in a new tab or window
        window.open(file, '_blank');  //blank will open in known tab
    } else{
    {
        alert("First Fill The Form");
    }
      }
});